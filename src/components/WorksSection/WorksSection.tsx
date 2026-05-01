import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { ProjectItem } from "../../types";
import styles from "./WorksSection.module.scss";

const WorksSection = () => {
  const { t } = useTranslation();
  const items = t("works.items", { returnObjects: true }) as ProjectItem[];
  const hasLoop = items.length > 1;
  const loopedItems = hasLoop ? [items[items.length - 1], ...items, items[0]] : items;
  const [slideIndex, setSlideIndex] = useState(hasLoop ? 1 : 0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const canNavigate = items.length > 1;
  const activeSlide = hasLoop
    ? (slideIndex - 1 + items.length) % items.length
    : slideIndex;

  const nextSlide = () => {
    if (!canNavigate || isAnimating) {
      return;
    }

    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setSlideIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!canNavigate || isAnimating) {
      return;
    }

    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setSlideIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    if (!canNavigate || isAnimating || index === activeSlide) {
      return;
    }

    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setSlideIndex(hasLoop ? index + 1 : index);
  };

  const handleTrackTransitionEnd = () => {
    if (!hasLoop) {
      setIsAnimating(false);
      return;
    }

    if (slideIndex === 0 || slideIndex === items.length + 1) {
      setIsTransitionEnabled(false);
      setSlideIndex(slideIndex === 0 ? items.length : 1);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
          setIsAnimating(false);
        });
      });

      return;
    }

    setIsAnimating(false);
  };

  const trackStyle = {
    transform: `translateX(calc(-${slideIndex} * (100% + var(--carousel-gap))))`
  };

  const renderProjectCard = (project: ProjectItem, key: string) => {
    return (
      <article key={key} className={styles.slide}>
        <div className={styles.project}>
          <div className={styles.preview}>
            <img src={project.previewUrl} alt={`${project.title} preview`} />
          </div>
          <div className={styles.meta}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.stackList}>
              {project.stack.map((item) => (
                <li key={`${project.title}-${item}`}>{item}</li>
              ))}
            </ul>
            <a href={project.demoUrl} className={styles.demoLink}>
              <span>{t("works.openDemo")}</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="works" className={styles.section}>
      <div className={`container ${styles.content}`}>
        <h2>{t("works.title")}</h2>
        <div className={styles.carousel}>
          <button
            className={styles.control}
            type="button"
            aria-label={t("works.prevAria")}
            onClick={prevSlide}
            disabled={!canNavigate || isAnimating}
          >
            <ChevronLeft size={18} />
          </button>

          <div className={styles.viewport}>
            <div
              className={`${styles.track} ${isTransitionEnabled ? styles.trackAnimated : ""}`}
              style={trackStyle}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {loopedItems.map((project, index) =>
                renderProjectCard(project, `${project.title}-${index}`)
              )}
            </div>
          </div>

          <button
            className={styles.control}
            type="button"
            aria-label={t("works.nextAria")}
            onClick={nextSlide}
            disabled={!canNavigate || isAnimating}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className={styles.dots} role="tablist" aria-label={t("works.dotsAria")}>
          {items.map((project, index) => (
            <button
              key={project.title}
              type="button"
              role="tab"
              aria-label={`Слайд ${index + 1}`}
              aria-selected={index === activeSlide}
              className={index === activeSlide ? styles.activeDot : ""}
              onClick={() => goToSlide(index)}
              disabled={!canNavigate || isAnimating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;

import { Code2, Globe, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import type { ProjectItem } from "../../types";
import styles from "./WorksSection.module.scss";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

const createFallbackPreview = (title: string) => {
  const safeTitle = title.replace(/[<>&"]/g, "").slice(0, 42);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#11253f"/>
          <stop offset="55%" stop-color="#0d1a2f"/>
          <stop offset="100%" stop-color="#1f334f"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#bg)"/>
      <circle cx="1270" cy="210" r="260" fill="rgba(89,213,255,0.18)"/>
      <circle cx="330" cy="760" r="320" fill="rgba(242,162,58,0.17)"/>
      <text x="120" y="455" fill="#d9e9ff" font-size="62" font-family="Inter, Arial, sans-serif">${safeTitle}</text>
      <text x="120" y="525" fill="#8eb1d6" font-size="30" font-family="Inter, Arial, sans-serif">Project Preview</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation();
  const { ref: revealRef, isVisible } = useReveal<HTMLElement>({
    threshold: 0.22,
    rootMargin: "0px 0px -14% 0px"
  });
  const isReversed = index % 2 === 1;

  return (
    <article
      ref={revealRef}
      className={`${styles.card} ${isVisible ? styles.cardVisible : ""} ${isReversed ? styles.reversed : ""}`}
      style={{ "--item-index": index } as CSSProperties}
    >
      <div className={styles.media}>
        <img
          src={project.previewUrl}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(event) => {
            const target = event.currentTarget;
            target.onerror = null;
            target.src = createFallbackPreview(project.title);
          }}
        />
      </div>
      <div className={styles.meta}>
        <p className={styles.eyebrow}>
          {String(index + 1).padStart(2, "0")}
          {project.period ? ` / ${project.period}` : ""}
        </p>
        <div className={styles.metaTop}>
          <h3>{project.title}</h3>
        </div>
        <p className={styles.description}>{project.description}</p>
        <ul className={styles.stackList}>
          {project.stack.map((item) => (
            <li key={`${project.title}-${item}`}>{item}</li>
          ))}
        </ul>
        {project.result ? (
          <p className={styles.result}>
            <strong>{t("works.resultLabel")}:</strong> {project.result}
          </p>
        ) : null}
        <div className={styles.links}>
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            <Code2 size={15} aria-hidden="true" />
            <span>{t("works.openRepo")}</span>
          </a>
          <a href={project.projectUrl} target="_blank" rel="noreferrer">
            <Globe size={15} aria-hidden="true" />
            <span>{t("works.openProject")}</span>
          </a>
        </div>
      </div>
    </article>
  );
};

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
    <section
      id="works"
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
    >
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

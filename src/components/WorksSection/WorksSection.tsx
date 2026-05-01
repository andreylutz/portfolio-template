import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { ProjectItem } from "../../types";
import styles from "./WorksSection.module.scss";

const WorksSection = () => {
  const { t } = useTranslation();
  const items = t("works.items", { returnObjects: true }) as ProjectItem[];
  const [activeSlide, setActiveSlide] = useState(0);
  const currentProject = items[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + items.length) % items.length);
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
          >
            <ChevronLeft size={18} />
          </button>

          <article className={styles.project}>
            <div className={styles.preview}>
              <img src={currentProject.previewUrl} alt={`${currentProject.title} preview`} />
            </div>
            <div className={styles.meta}>
              <h3>{currentProject.title}</h3>
              <p>{currentProject.description}</p>
              <ul className={styles.stackList}>
                {currentProject.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={currentProject.demoUrl} className={styles.demoLink}>
                <span>{t("works.openDemo")}</span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </article>

          <button
            className={styles.control}
            type="button"
            aria-label={t("works.nextAria")}
            onClick={nextSlide}
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
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;

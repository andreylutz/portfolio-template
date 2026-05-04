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
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="works"
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
    >
      <div className={`container ${styles.content}`}>
        <h2>
          <Sparkles size={18} aria-hidden="true" />
          <span>{t("works.title")}</span>
        </h2>
        <p className={styles.subtitle}>{t("works.subtitle")}</p>
        <div className={styles.list}>
          {items.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${project.period ?? index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;

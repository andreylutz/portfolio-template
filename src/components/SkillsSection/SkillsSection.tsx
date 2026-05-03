import { Cpu } from "lucide-react";
import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../../hooks/useReveal";
import styles from "./SkillsSection.module.scss";

type SkillGroup = {
  title: string;
  items: string[];
};

const SkillsSection = () => {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true }) as SkillGroup[];
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
    >
      <div className="container">
        <h2 className={styles.heading}>
          <Cpu aria-hidden="true" size={18} />
          <span>{t("skills.title")}</span>
        </h2>
        <p className={styles.description}>{t("skills.description")}</p>
        <ul className={styles.groupsGrid}>
          {groups.map((group, groupIndex) => (
            <li key={group.title} style={{ "--item-index": groupIndex } as CSSProperties}>
              <h3>{group.title}</h3>
              <ul className={styles.skillsList}>
                {group.items.map((item) => (
                  <li key={`${group.title}-${item}`}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;

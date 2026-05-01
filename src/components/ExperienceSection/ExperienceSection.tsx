import { Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ExperienceItem } from "../../types";
import styles from "./ExperienceSection.module.scss";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <h2>
          <Wrench aria-hidden="true" size={18} />
          <span>{t("experience.title")}</span>
        </h2>
        <ul className={styles.experienceList}>
          {items.map((item) => (
            <li key={item.period + item.company}>
              <p className={styles.period}>{item.period}</p>
              <h3>{item.company}</h3>
              <p className={styles.role}>{item.role}</p>
              <ul className={styles.stack}>
                {item.stack.map((stackItem) => (
                  <li key={stackItem}>{stackItem}</li>
                ))}
              </ul>
              <ul className={styles.highlights}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;

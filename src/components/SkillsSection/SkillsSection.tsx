import { Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./SkillsSection.module.scss";

const SkillsSection = () => {
  const { t } = useTranslation();
  const items = t("skills.items", { returnObjects: true }) as string[];

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <h2>
          <Cpu aria-hidden="true" size={18} />
          <span>{t("skills.title")}</span>
        </h2>
        <ul className={styles.skillsGrid}>
          {items.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;

import { Mail, Send } from "lucide-react";
import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.scss";

type HeroMetric = {
  value: string;
  label: string;
};

const Hero = () => {
  const { t } = useTranslation();
  const metrics = t("hero.metrics", { returnObjects: true }) as HeroMetric[];
  const focusTags = t("hero.focusTags", { returnObjects: true }) as string[];

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.glowLine} aria-hidden="true" />
        <div className={styles.intro}>
          <p className={styles.kicker}>{t("hero.kicker")}</p>
          <h1>{t("hero.title")}</h1>
          <p className={styles.description}>{t("hero.description")}</p>
          <p className={styles.status}>{t("hero.status")}</p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="https://t.me/andLucenko">
              <Send size={16} aria-hidden="true" />
              <span>{t("hero.primaryAction")}</span>
            </a>
            <a className={styles.secondaryAction} href="mailto:andreylutcenko123@gmail.com">
              <Mail size={16} aria-hidden="true" />
              <span>{t("hero.secondaryAction")}</span>
            </a>
          </div>
          <ul className={styles.focusTags}>
            {focusTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <ul className={styles.metrics}>
          {metrics.map((item, index) => (
            <li key={item.label} style={{ "--item-index": index } as CSSProperties}>
              <span className={styles.metricValue}>{item.value}</span>
              <span className={styles.metricLabel}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;

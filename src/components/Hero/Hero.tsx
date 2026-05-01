import { useTranslation } from "react-i18next";
import styles from "./Hero.module.scss";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <p className={styles.kicker}>{t("hero.kicker")}</p>
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.description")}</p>
      </div>
    </section>
  );
};

export default Hero;

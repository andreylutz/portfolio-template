import { useTranslation } from "react-i18next";
import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <h2>{t("about.title")}</h2>
        <p>{t("about.description")}</p>
        <ul className={styles.contacts}>
          <li>
            {t("about.phoneLabel")}: <a href="tel:+79001215204">+7 900 121-52-04</a>
          </li>
          <li>
            {t("about.emailLabel")}:{" "}
            <a href="mailto:andreylutcenko123@gmail.com">andreylutcenko123@gmail.com</a>
          </li>
          <li>
            {t("about.telegramLabel")}: <a href="https://t.me/andLucenko">@andLucenko</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;

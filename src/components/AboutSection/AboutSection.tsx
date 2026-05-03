import { Mail, Phone, Send, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { CSSProperties } from "react";
import useReveal from "../../hooks/useReveal";
import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) as string[];
  const quickFacts = t("about.quickFacts", { returnObjects: true }) as string[];
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
    >
      <div className="container">
        <div className={styles.headline}>
          <h2>{t("about.title")}</h2>
          <p className={styles.lead}>{t("about.lead")}</p>
          <p>{t("about.description")}</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.valueBlock}>
            <h3>
              <Sparkles size={16} aria-hidden="true" />
              <span>{t("about.valueTitle")}</span>
            </h3>
            <ul className={styles.values}>
              {values.map((value, index) => (
                <li key={value} style={{ "--item-index": index } as CSSProperties}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <aside className={styles.side}>
            <div className={styles.metaCard}>
              <h3>{t("about.quickFactsTitle")}</h3>
              <ul className={styles.quickFacts}>
                {quickFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
            <div className={styles.metaCard}>
              <h3>{t("about.contactsTitle")}</h3>
              <ul className={styles.contacts}>
                <li>
                  <Phone size={15} aria-hidden="true" />
                  <span>{t("about.phoneLabel")}:</span>
                  <a href="tel:+79001215204">+7 900 121-52-04</a>
                </li>
                <li>
                  <Mail size={15} aria-hidden="true" />
                  <span>{t("about.emailLabel")}:</span>
                  <a href="mailto:andreylutcenko123@gmail.com">andreylutcenko123@gmail.com</a>
                </li>
                <li>
                  <Send size={15} aria-hidden="true" />
                  <span>{t("about.telegramLabel")}:</span>
                  <a href="https://t.me/andLucenko">@andLucenko</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

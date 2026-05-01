import { Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { NavItem } from "../../types";
import styles from "./Header.module.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const items = t("nav", { returnObjects: true }) as NavItem[];
  const activeLanguage = i18n.resolvedLanguage ?? i18n.language;

  const changeLanguage = (language: "ru" | "en") => {
    void i18n.changeLanguage(language);
  };

  return (
    <header className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.brand}>
          <Bot aria-hidden="true" size={18} />
          <span>{t("header.brand")}</span>
        </a>
        <nav aria-label={t("header.navAriaLabel")}>
          <ul className={styles.navList}>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.languageSwitch} role="group" aria-label={t("header.languageAriaLabel")}>
          <button
            type="button"
            className={activeLanguage?.startsWith("ru") ? styles.activeLanguage : ""}
            onClick={() => changeLanguage("ru")}
          >
            RU
          </button>
          <button
            type="button"
            className={activeLanguage?.startsWith("en") ? styles.activeLanguage : ""}
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Bot, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { NavItem } from "../../types";
import styles from "./Header.module.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const items = t("nav", { returnObjects: true }) as NavItem[];
  const activeLanguage = i18n.resolvedLanguage ?? i18n.language;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 761px)");
    const handleChange = () => {
      if (mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    handleChange();

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const changeLanguage = (language: "ru" | "en") => {
    void i18n.changeLanguage(language);
    setIsMenuOpen(false);
  };

  const scrollToAnchor = (href: string) => {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    const headerElement = document.querySelector<HTMLElement>("header");
    const headerOffset = headerElement?.getBoundingClientRect().height ?? 68;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 10;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth"
    });

    window.history.replaceState(null, "", href);
  };

  const onNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    if (isMenuOpen) {
      setIsMenuOpen(false);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => scrollToAnchor(href));
      });
      return;
    }

    scrollToAnchor(href);
  };

  return (
    <header className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.brand}>
          <Bot aria-hidden="true" size={18} />
          <span>{t("header.brand")}</span>
        </a>
        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? t("header.closeMenuAriaLabel") : t("header.openMenuAriaLabel")}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
        <nav
          id="main-navigation"
          className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ""}`}
          aria-label={t("header.navAriaLabel")}
        >
          <ul className={styles.navList}>
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(event) => onNavClick(event, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;

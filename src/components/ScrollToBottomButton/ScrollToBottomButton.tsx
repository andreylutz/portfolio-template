import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ScrollToBottomButton.module.scss";

const SCROLL_SHOW_OFFSET = 180;

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_SHOW_OFFSET);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={scrollToTop}
      aria-label={t("scrollButton.toTopAria")}
      title={t("scrollButton.toTopTitle")}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
};

export default ScrollToBottomButton;

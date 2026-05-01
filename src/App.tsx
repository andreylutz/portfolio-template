import styles from "./App.module.scss";
import AboutSection from "./components/AboutSection/AboutSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ScrollToBottomButton from "./components/ScrollToBottomButton/ScrollToBottomButton";
import WorksSection from "./components/WorksSection/WorksSection";

const App = () => {
  return (
    <div className={styles.site}>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <WorksSection />
      </main>
      <ScrollToBottomButton />
    </div>
  );
};

export default App;

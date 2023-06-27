import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import css from "./styles/app.module.scss";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;

import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    // <div className="App">
    // </div>

    // Using react fragment removes default component positions
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

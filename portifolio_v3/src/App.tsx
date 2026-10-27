import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Leadership } from "./components/Leadership/Leadership";
import { Education } from "./components/Education/Education";
import { Contact } from "./components/Contact/Contact";
import { ScrollProgressBar } from './components/ScrollProgressBar/ScrollProgressBar';

function App() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Leadership />
      <Education />
      <Contact />
    </>
  );
}

export default App
import Navbar from "./components/Navbar";
import NavProvider from "./context/NavContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <NavProvider>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </NavProvider>
  );
};

export default App;

import Header from "./components/header";
import Footer from "./components/footer";
import Landing from "./components/landing";
import { HomePage, ScrollStyle } from "./styles/app.style";
import backgroundSVG from "./resources/endless-constellation.svg";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <HomePage
      id="HomePage"
      style={{ backgroundImage: `url(${backgroundSVG})` }}
    >
      <Header />
      <ScrollStyle>
        <Landing />
        <Projects />
        <Contact />
        <Footer />
      </ScrollStyle>
    </HomePage>
  );
}

export default App;

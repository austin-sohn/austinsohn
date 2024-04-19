import Header from "./components/header";
// import Footer from "./components/footer";
import Landing from "./components/landing";
import HomePage from "./styles/app.style";
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
      <Landing />
      <Projects />
      <Contact />
    </HomePage>
  );
}

export default App;

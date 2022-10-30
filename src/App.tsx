import Header from "./components/header";
import Footer from "./components/footer";
import Resume from "./components/resume";
import HomePage from "./styles/app.style";

function App() {
  return (
    <HomePage id="HomePage">
      <Header />
      <Resume />
      <Footer />
    </HomePage>
  );
}

export default App;

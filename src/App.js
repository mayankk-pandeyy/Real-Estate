import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <div className="white-gradient"></div>
      <Header></Header>
      <Hero></Hero>
      <Companies></Companies>
      <Residencies/>
      <Value></Value>
      <Contact></Contact>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>

  );
}

export default App;

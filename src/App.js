import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Business from "./components/business/Business";
import Scoreboard from "./components/scoreboard/Scoreboard";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Testemonials from "./components/testemonials/Testemonials";
function App() {
  const onHandleScroll = () => {
    console.log("IDemoooo");
  };

  return (
    <div onScroll={onHandleScroll}>
      <Navbar />
      <Home />
      <Business />
      <About />
      <Portfolio />
      <Scoreboard />
      <Testemonials />
      <Contact />
    </div>
  );
}

export default App;

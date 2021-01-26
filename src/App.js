import "@mozilla-protocol/core/protocol/css/protocol.css";
import "@mozilla-protocol/core/protocol/css/protocol-extra.css";
import "@councildataproject/cdp-design/dist/colors.css";
import "@councildataproject/cdp-design/dist/images.css";
import "@councildataproject/cdp-design/dist/text.css";
import "./steps.css";
import ReactGA from "react-ga";

//Import Components
import Navigation from "./components/layout/Navigation";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About/About";
import Instances from "./components/layout/Instances/Instances";
import Contributing from "./components/layout/Contributing";
import Footer from "./components/layout/Footer";

// Run Google Analytics
ReactGA.initialize("UA-108611658-2");

function App() {
  return (
    <div id="top" className="App">
      <Navigation
        links={[
          {
            name: "About",
            to: "#about",
          },
          {
            name: "Instances",
            to: "#instances",
          },
          {
            name: "Contributing",
            to: "#contributing",
          },
        ]}
      />
      <main>
        <Hero />
        <About />
        <Instances />
        <Contributing />
      </main>
      <Footer />
    </div>
  );
}

export default App;

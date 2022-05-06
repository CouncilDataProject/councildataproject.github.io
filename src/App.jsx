import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Locations } from './components/Locations';
import { Contributing } from './components/Contributing';
import { Footer } from './components/Footer';
import './App.css';
import '@mozilla-protocol/core/protocol/css/protocol.css';
import '@mozilla-protocol/core/protocol/css/protocol-extra.css';
import '@councildataproject/cdp-design/dist/colors.css';
import '@councildataproject/cdp-design/dist/images.css';
import '@councildataproject/cdp-design/dist/text.css';

function App() {
  return (
    <div id="top" className="App">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <About />
        <Locations />
        <Contributing />
      </main>
      <Footer />
    </div>
  );
}

export default App;

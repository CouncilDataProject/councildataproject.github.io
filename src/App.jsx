import '@mozilla-protocol/core/protocol/css/protocol.css';
import '@mozilla-protocol/core/protocol/css/protocol-extra.css';
import '@councildataproject/cdp-design/dist/colors.css';
import '@councildataproject/cdp-design/dist/images.css';
import '@councildataproject/cdp-design/dist/text.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Instances from './components/Locations';
import Contributing from './components/contributing/Contributing';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="App">
      <Navigation
        links={[
          {
            name: 'About',
            to: '#about',
          },
          {
            name: 'Locations',
            to: '#locations',
          },
          {
            name: 'Contributing',
            to: '#contributing',
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

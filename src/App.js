import './App.css';
import '@mozilla-protocol/core/protocol/css/protocol.css';
import '@mozilla-protocol/core/protocol/css/protocol-extra.css';
import ReactGA from 'react-ga';

// Run Google Analytics
ReactGA.initialize('UA-108611658-2');

function App() {
  return (
      <div className="App">
        // Header nav
        <div class="mzp-c-navigation">
            <div class="mzp-c-navigation-l-content">
                <div class="mzp-c-navigation-container">
                    <div class="mzp-c-navigation-menu">
                        <nav class="mzp-c-menu mzp-is-basic">
                            <ul class="mzp-c-menu-category-list">
                                <li class="mzp-c-menu-category">
                                    <a class="mzp-c-menu-title" href="/news">News</a>
                                </li>
                                <li class="mzp-c-menu-category">
                                    <a class="mzp-c-menu-title" href="/partners">Partners</a>
                                </li>
                                <li class="mzp-c-menu-category">
                                  <a class="mzp-c-menu-title" href="/community">Community</a>
                                </li>
                                <li class="mzp-c-menu-category">
                                  <a class="mzp-c-menu-title" href="/about">About</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        // Hero

        // About

        // Instances

        // FAQ

        // Other Content

        // Footer
    </div>
  );
}

export default App;

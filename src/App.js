import './colors.css';
import './steps.css';
import '@mozilla-protocol/core/protocol/css/protocol.css';
import '@mozilla-protocol/core/protocol/css/protocol-extra.css';
import ReactGA from 'react-ga';

// Run Google Analytics
ReactGA.initialize('UA-108611658-2');

function App() {
    return (
      <div className="App">
        <div className="mzp-c-navigation mzp-is-sticky">
            <div className="mzp-c-navigation-l-content">
                <div className="mzp-c-navigation-download">

                    <div className="mzp-c-button-download-container">
                        <a href="https://github.com/CouncilDataProject" className="mzp-c-button mzp-t-product mzp-t-product mzp-t-secondary mzp-t-md">
                            GitHub
                        </a>
                    </div>

                </div>
                <div className="mzp-c-navigation-container">
                    <nav className="mzp-c-menu mzp-is-basic">
                        <ul className="mzp-c-menu-category-list">
                            <li className="mzp-c-menu-category">
                                <a href="#">
                                    <img src="logo.png" width="84" />
                                </a>
                            </li>
                            <li className="mzp-c-menu-category">
                                <a className="mzp-c-menu-title" href="#about">About</a>
                            </li>
                            <li className="mzp-c-menu-category">
                                <a className="mzp-c-menu-title" href="#instances">Instances</a>
                            </li>
                            <li className="mzp-c-menu-category">
                                <a className="mzp-c-menu-title" href="#community">Community</a>
                            </li>
                            <li className="mzp-c-menu-category">
                              <a className="mzp-c-menu-title" href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <main>
            <section id="hero" className="mzp-c-hero mzp-has-image cdp-bg-dark-purple cdp-white">
                <div className="mzp-l-content mzp-t-content-xl">
                    <div className="mzp-c-hero-body">
                        <h1 className="mzp-c-hero-title">Council Data Project</h1>

                        <div className="mzp-c-hero-desc">
                            <p>
                                An entirely free and open application to make it easier to follow your local municipality's council action.
                                <br/><br/>
                                Videos, transcripts, voting records, legislation, all searchable under a single website.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mzp-c-hero-image">
                    <img src="imgs/public-speaker-light-purple.svg" alt="public speaker art" />
                </div>
            </section>

            <div id="about" className="mzp-l-content mzp-t-content-xl">
                <article className="mzp-c-article">
                    <h1 className="mzp-c-article-title">
                        Tools for a more accessible democracy
                    </h1>
                    <p>
                        Council Data Project is an open-source project dedicated to providing journalists, activists, researchers, and all members of each community we serve with the tools they need to stay informed and hold their Council Members accountable.
                    </p>
                    <p>
                        By combining and simplifying sources of information on Council meetings and actions, CDP ensures that everyone is empowered to participate in local government.</p>

                    <h3>How it works</h3>
                    <p>
                        Each municipality that CDP supports (<em>a CDP instance</em>) has open source maintainers which write code to gather municipality meeting information and compile them into a single resource to then be stored by our general CDP tooling.
                    </p>
                    <ul className="steps">
                        <li>
                            <span><strong>Gather Events</strong> Videos, meeting member information, minutes item details, voting records, and legislative documents are all compiled into a single resource for CDP tools to interact with.<br/><sub>Written and maintained by each instance's open source contributors.</sub></span>
                        </li>

                        <li>
                            <span><strong>Transcribe</strong> Depending on if closed caption files were gathered or if only the video of the event was available, our tools either clean up the captions or transcribe the audio.<br/><sub>Written and maintained by the CDP open source community.</sub></span>
                        </li>

                        <li>
                            <span><strong>Create Searchable Index</strong> Every two days our system reindexes all of the events, legislation, and minutes items found in the entire system to make them quickly searchable.<br/><sub>Written and maintained by the CDP open source community.</sub></span>
                        </li>
                    </ul>
                </article>
            </div>

            <div id="instances" className="cdp-bg-light-gray">
                <div className="mzp-l-content mzp-t-content-xl">
                    <h1 className="mzp-c-article-title">
                        CDP Instances
                    </h1>
                    <p>
                        All currently maintained Council Data Project instances.
                    </p>
                    <section
                    className="mzp-c-card mzp-c-card-extra-small has-aspect-3-2">
                        <a className="mzp-c-card-block-link" href="https://councildataproject.github.io/seattle">
                            <div className="mzp-c-card-media-wrapper">
                                <img className="mzp-c-card-image" src="imgs/seattle.jpg" alt="Seattle skyline"/>
                            </div>
                            <div className="mzp-c-card-content">
                                <h2 className="mzp-c-card-title">City of Seattle, Washington</h2>
                                <p className="mzp-c-card-meta">Maintained by the CDP Core Team</p>
                            </div>
                        </a>
                    </section>
                </div>
            </div>
        </main>

        <footer className="mzp-c-footer">
            <div className="mzp-l-content">
                <nav className="mzp-c-footer-secondary">
                    <div className="mzp-c-footer-legal">
                        <p>
                            Portions of this content are ©2017–2020 by individual Council Data Project contributors. Content available under <a rel="license" href="https://github.com/CouncilDataProject/councildataproject.github.io/blob/master/LICENSE">MIT License</a>.
                        </p>
                        <p>
                            Styled using <a rel="external" href="https://protocol.mozilla.org/">Mozilla Protocol</a>. Images and artwork are provided by <a rel="external" href="https://undraw.co/">unDraw</a>.
                        </p>
                    </div>
                </nav>
            </div>
        </footer>
    </div>
    );
}

export default App;

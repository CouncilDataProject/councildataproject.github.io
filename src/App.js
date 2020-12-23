import "./colors.css";
import "./steps.css";
import "@mozilla-protocol/core/protocol/css/protocol.css";
import "@mozilla-protocol/core/protocol/css/protocol-extra.css";
import ReactGA from "react-ga";

// Run Google Analytics
ReactGA.initialize("UA-108611658-2");

function App() {
  return (
    <div id="top" className="App">
      <div id="main-nav" className="mzp-c-navigation mzp-is-sticky">
        <div className="mzp-c-navigation-l-content">
          <div className="mzp-c-navigation-container">
            <div className="mzp-c-navigation-download">
              <div className="mzp-c-button-download-container">
                <a
                  href="https://github.com/CouncilDataProject"
                  className="mzp-c-button mzp-t-product mzp-t-product mzp-t-secondary mzp-t-md"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="mzp-c-navigation-container" aria-expanded="false">
              <nav className="mzp-c-menu mzp-is-basic">
                <ul className="mzp-c-menu-category-list">
                  <li className="mzp-c-menu-category">
                    <a className="mzp-c-menu-title" href="#top">
                      <img
                        src="favicon-transparent.png"
                        alt="CDP logo"
                        width="38"
                      />
                    </a>
                  </li>
                  <li className="mzp-c-menu-category">
                    <a className="mzp-c-menu-title" href="#about">
                      About
                    </a>
                  </li>
                  <li className="mzp-c-menu-category">
                    <a className="mzp-c-menu-title" href="#instances">
                      Instances
                    </a>
                  </li>
                  <li className="mzp-c-menu-category">
                    <a className="mzp-c-menu-title" href="#contributing">
                      Contributing
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section
          id="hero"
          className="mzp-c-hero mzp-has-image cdp-bg-dark-purple cdp-white"
        >
          <div className="mzp-l-content mzp-t-content-xl">
            <div className="mzp-c-hero-body">
              <h1 className="mzp-c-hero-title">Council Data Project</h1>

              <div className="mzp-c-hero-desc">
                <p>
                  An entirely free and open application to make it easier to
                  follow your local municipality's council action.
                  <br />
                  <br />
                  Videos, transcripts, voting records, and legislation
                  <br />
                  -- all searchable under a single website.
                </p>
              </div>
            </div>
          </div>

          <div className="mzp-c-hero-image">
            <img
              src="imgs/public-speaker-light-purple.svg"
              alt="public speaker art"
            />
          </div>
        </section>

        <div id="about" className="mzp-l-content mzp-t-content-xl">
          <article className="mzp-c-article">
            <h1 className="mzp-c-article-title">
              Tools for a more accessible democracy
            </h1>
            <p>
              Council Data Project is an open-source project dedicated to
              providing journalists, activists, researchers, and all members of
              each community we serve with the tools they need to stay informed
              and hold their Council Members accountable.
            </p>
            <p>
              By combining and simplifying sources of information on Council
              meetings and actions, CDP ensures that everyone is empowered to
              participate in local government.
            </p>

            <h3>How It Works</h3>
            <p>
              Each municipality that CDP supports (<em>a CDP instance</em>) has
              open source maintainers which write code to gather municipality
              meeting information and compile them into a single resource. When
              our systems receive these compiled resources, our tooling will
              process, store, and index each event.
            </p>
            <ul className="steps">
              <li>
                <span className="step-index">1</span>
                <span className="step-description">
                  <strong>Gather Events</strong> The only requirement for new
                  CDP instance maintainers is to provide a method to gather some
                  basic event information. Event information can be as simple as{" "}
                  <a href="https://councildataproject.github.io/cdp-backend/event_data_ingestion_model.html#minimal-event-data">
                    a URL to a meeting recording
                  </a>{" "}
                  or as expansive as{" "}
                  <a href="https://councildataproject.github.io/cdp-backend/event_data_ingestion_model.html#expanded-event-data-with-event-minutes-items">
                    having all minutes items and vote information attached
                  </a>
                  .
                </span>
              </li>

              <li>
                <span className="step-index">2</span>
                <span className="step-description">
                  <strong>Transcribe</strong> Our tools will take over the rest
                  of the job and either clean up and use provided closed caption
                  files, or create transcripts using the event recording.
                </span>
              </li>

              <li>
                <span className="step-index">3</span>
                <span className="step-description">
                  <strong>Create Searchable Index</strong> Every two days our
                  system will reindex all the events, legislation, and minutes
                  items for you.
                </span>
              </li>
            </ul>
          </article>
        </div>

        <div id="instances" className="cdp-bg-light-gray">
          <div className="mzp-l-content mzp-t-content-xl">
            <h1 className="mzp-c-article-title">CDP Instances</h1>
            <p>All currently maintained Council Data Project instances.</p>
            <div className="mzp-l-card-third">
              <section className="mzp-c-card mzp-c-card-extra-small has-aspect-3-2">
                <a
                  className="mzp-c-card-block-link"
                  href="https://councildataproject.github.io/seattle"
                >
                  <div className="mzp-c-card-media-wrapper">
                    <img
                      className="mzp-c-card-image"
                      src="imgs/seattle.jpg"
                      alt="Seattle skyline"
                    />
                  </div>
                  <div className="mzp-c-card-content">
                    <h2 className="mzp-c-card-title">
                      City of Seattle, Washington
                    </h2>
                    <p className="mzp-c-card-meta">
                      Maintained by the CDP Core Team
                    </p>
                  </div>
                </a>
              </section>
            </div>
          </div>
        </div>

        <div id="contributing" className="cdp-bg-yellow">
          <div className="mzp-l-content mzp-t-content-xl">
            <article className="mzp-c-article">
              <h1 className="mzp-c-article-title">Contributing</h1>
              <p>
                As an entirely free and open-source project, Council Data
                Project welcomes contribution in all forms. Want to work on
                graphic, visual, or UX design, front-end or back-end
                development, statistical modeling, or project management -- we
                can use all the help we can get.
              </p>
              <p>
                If you would like to contribute in any of these areas, please
                reach out on{" "}
                <a href="https://www.democracylab.org/index/?section=AboutProject&id=145">
                  DemocracyLab
                </a>{" "}
                or simply start tackling issues in one of our{" "}
                <a href="https://github.com/CouncilDataProject">
                  GitHub repositories
                </a>
                .
              </p>
              <dl class="mzp-u-list-styled">
                <dt>
                  <a href="https://github.com/CouncilDataProject/cdp-backend">
                    cdp-backend
                  </a>
                </dt>
                <dd>
                  Contains all database models, data processing pipelines, and
                  infrastructure-as-code for CDP deployments. Contributions here
                  will be available to all CDP instances. Entirely written in
                  Python.
                </dd>
                <dt>
                  <a href="https://github.com/CouncilDataProject/cdp-frontend">
                    cdp-frontend
                  </a>
                </dt>
                <dd>
                  Contains all of the components used by the web apps to be
                  hosted on GitHub Pages. Contributions here will be available
                  to all CDP instances. Entirely written in TypeScript and
                  React.
                </dd>
                <dt>
                  <a href="https://github.com/CouncilDataProject/cookiecutter-cdp-deployment">
                    cookiecutter-cdp-deployment
                  </a>
                </dt>
                <dd>
                  A template to be used by the Python{" "}
                  <a href="https://github.com/cookiecutter/cookiecutter">
                    cookiecutter
                  </a>{" "}
                  package to create an entirely new deployment repository. This
                  is where <em>cdp-backend</em> and <em>cdp-frontend</em> are
                  imported and used. If you would like to create a new
                  deployment under the <em>councildataproject</em> domain please
                  log a{" "}
                  <a href="https://github.com/CouncilDataProject/councildataproject.github.io/issues">
                    GitHub issue
                  </a>
                  .
                </dd>
                <dt>
                  <a href="https://github.com/CouncilDataProject/councildataproject.github.io">
                    councildataproject.github.io
                  </a>
                </dt>
                <dd>
                  This website! Contributions here should largely be text
                  changes and admin updates.
                </dd>
              </dl>
              <h3>Contributors</h3>
              <p>
                Council Data Project was created by{" "}
                <a href="https://jacksonmaxfield.github.io/">
                  Jackson Maxfield Brown
                </a>{" "}
                and <a href="http://nicweber.info/">Nic Weber</a>.
              </p>
              <p>
                There have been major contributions from:{" "}
                <a href="https://github.com/tohuynh">To Huynh</a> (Full Stack
                Development), <a href="https://www.isaacna.com/">Isaac Na</a>{" "}
                (Backend Development),{" "}
                <a href="https://www.katlynmfgreene.com/">Katlyn M.F. Greene</a>{" "}
                (UX Research),{" "}
                <a href="https://www.emilygilles.design/">Emily Gilles</a> (UX
                Design), and{" "}
                <a href="https://www.linkedin.com/in/madeleine-farrer-14a1a3118/">
                  Madeleine Farrer
                </a>{" "}
                (Logo Design).
              </p>
              <p>
                Much of our second prototype can be attributed to the voluteers
                from{" "}
                <a href="https://medium.com/democracylab-org/textio-engages-employees-to-accelerate-civic-innovation-5984609a95ce">
                  Textio
                </a>
                .
              </p>
              <p>
                Many volunteers and contributors have found the project through{" "}
                <a href="https://www.democracylab.org/index/?section=Home">
                  DemocracyLab
                </a>
                .
              </p>
            </article>
          </div>
        </div>
      </main>

      <footer className="mzp-c-footer">
        <div className="mzp-l-content">
          <nav className="mzp-c-footer-secondary">
            <div className="mzp-c-footer-legal">
              <p>
                Portions of this content are ©2017–2021 by individual Council
                Data Project contributors. Content available under{" "}
                <a
                  rel="license"
                  href="https://github.com/CouncilDataProject/councildataproject.github.io/blob/master/LICENSE"
                >
                  MIT License
                </a>
                .
              </p>
              <p>
                Styled using{" "}
                <a rel="external" href="https://protocol.mozilla.org/">
                  Mozilla Protocol
                </a>
                . Artwork provided by{" "}
                <a rel="external" href="https://undraw.co/">
                  unDraw
                </a>
                .
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;

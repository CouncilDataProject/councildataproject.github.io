import React from 'react'

export default function Contributing() {
    return (
      <>
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
      </>
    );
}

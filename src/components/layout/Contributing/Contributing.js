import React from "react";
import StepList from "./StepList";

export default function Contributing() {
  return (
    <>
      <div id="contributing" className="cdp-bg-yellow">
        <div className="mzp-l-content mzp-t-content-xl">
          <article className="mzp-c-article">
            <h1 className="mzp-c-article-title">Contributing</h1>
            <p>
              As an entirely free and open-source project, Council Data Project
              welcomes contribution in all forms. Want to work on graphic,
              visual, or UX design, front-end or back-end development,
              statistical modeling, or project management -- we can use all the
              help we can get.
            </p>
            <p>
              If you would like to contribute in any of these areas, please
              reach out on{" "}
              <a
                class="cdp-link"
                href="https://www.democracylab.org/index/?section=AboutProject&id=145"
              >
                DemocracyLab
              </a>{" "}
              or simply start tackling issues in one of our{" "}
              <a class="cdp-link" href="https://github.com/CouncilDataProject">
                GitHub repositories
              </a>
              .
            </p>
            <p>
              And don't worry, all CDP libraries are available under MIT
              License.
            </p>
            <h3>How CDP Works</h3>
            <StepList />
            <h3>Our Tools</h3>
            <dl class="mzp-u-list-styled">
              <dt>
                <a
                  class="cdp-link"
                  href="https://github.com/CouncilDataProject/cdp-backend"
                >
                  cdp-backend
                </a>
              </dt>
              <dd>
                Contains all database models, data processing pipelines, and
                infrastructure-as-code for CDP deployments. Contributions here
                will propagate to all CDP instances. Entirely written in Python.
              </dd>
              <dt>
                <a
                  class="cdp-link"
                  href="https://github.com/CouncilDataProject/cdp-frontend"
                >
                  cdp-frontend
                </a>
              </dt>
              <dd>
                Contains all of the components used by the web applications to
                be hosted on GitHub Pages. Contributions here will propagate to
                all CDP instances. Entirely written in TypeScript and React.
              </dd>
              <dt>
                <a
                  class="cdp-link"
                  href="https://github.com/CouncilDataProject/cdp-design"
                >
                  cdp-design
                </a>
              </dt>
              <dd>
                Contains many of the graphic design and styling guidelines used
                across the CDP ecosystem. Contributions here will propagate to
                this website and all CDP instances.
              </dd>
              <dt>
                <a
                  class="cdp-link"
                  href="https://github.com/CouncilDataProject/cookiecutter-cdp-deployment"
                >
                  cookiecutter-cdp-deployment
                </a>
              </dt>
              <dd>
                A template for creating an entirely new CDP instance. This
                single template will create a GitHub repository to host and
                manage all database infrastructure, run and schedule all
                pipelines, and host your deployment's website. This is where{" "}
                <em>cdp-backend</em> and <em>cdp-frontend</em> are imported and
                used. If you would like to create a new deployment under the{" "}
                <em>councildataproject</em> domain please create a{" "}
                <a
                  class="cdp-link"
                  href="https://github.com/CouncilDataProject/councildataproject.github.io/issues"
                >
                  GitHub issue
                </a>{" "}
                and we will help to get you set up.
              </dd>
              <dt>
                <a
                  class="cdp-link"
                  href="https://github.com/CouncilDataProject/councildataproject.github.io"
                >
                  councildataproject.github.io
                </a>
              </dt>
              <dd>
                This website! Contributions here should be largely text changes,
                admin updates, and new deployment management.
              </dd>
            </dl>
            <h3>Contributors</h3>
            <p>
              Council Data Project was created by{" "}
              <a class="cdp-link" href="https://jacksonmaxfield.github.io/">
                Jackson Maxfield Brown
              </a>{" "}
              and{" "}
              <a class="cdp-link" href="https://nicweber.info/">
                Nic Weber
              </a>
              .
            </p>
            <p>
              There have been major contributions from:{" "}
              <a class="cdp-link" href="https://github.com/tohuynh">
                To Huynh
              </a>{" "}
              (Full Stack Development),{" "}
              <a class="cdp-link" href="https://www.isaacna.com/">
                Isaac Na
              </a>{" "}
              (Backend Development),{" "}
              <a class="cdp-link" href="https://hawkticehurst.com/">
                Hawk Ticehurst
              </a>{" "}
              (Frontend Development),{" "}
              <a
                class="cdp-link"
                href="https://www.linkedin.com/in/brianjledbetter/"
              >
                Brian Ledbetter
              </a>{" "}
              (Frontend Development),{" "}
              <a class="cdp-link" href="https://www.katlynmfgreene.com/">
                Katlyn M.F. Greene
              </a>{" "}
              (UX Research),{" "}
              <a class="cdp-link" href="https://www.emilygilles.design/">
                Emily Gilles
              </a>{" "}
              (UX Design), and{" "}
              <a
                class="cdp-link"
                href="https://www.linkedin.com/in/madeleine-farrer-14a1a3118/"
              >
                Madeleine Farrer
              </a>{" "}
              (Logo Design).
            </p>
            <p>
              Much of our second prototype can be attributed to the voluteers
              from{" "}
              <a
                class="cdp-link"
                href="https://medium.com/democracylab-org/textio-engages-employees-to-accelerate-civic-innovation-5984609a95ce"
              >
                Textio
              </a>
              .
            </p>
            <p>
              Many volunteers and contributors have found the project through{" "}
              <a
                class="cdp-link"
                href="https://www.democracylab.org/index/?section=Home"
              >
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

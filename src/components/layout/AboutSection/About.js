import React from 'react'
import AboutList from './AboutList'

export default function About(props) {
    return (
      <>
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
            <AboutList />
          </article>
        </div>
      </>
    );
}

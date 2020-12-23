import React from 'react'

export default function Instances() {
    return (
      <>
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
      </>
    );
}

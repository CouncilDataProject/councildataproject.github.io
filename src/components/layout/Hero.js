import React from 'react'

export default function Hero() {
    return (
      <>
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
                  -- all searchable under a single website."
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
      </>
    );
}

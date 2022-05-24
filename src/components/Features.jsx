import React from 'react';
import './Features.css';

export function Features() {
  return (
    <section className="mzp-l-content">
      <div id="features-container" className="mzp-l-card-third mzp-c-emphasis-box">
        <section className="mzp-c-card-picto">
          <div
            id="search-transcripts-feature"
            className="mzp-c-card-picto-content">
            <h2 className="mzp-c-card-picto-title">
              Searchable meeting transcripts
            </h2>
            <p className="mzp-c-card-picto-desc">
              Pick any phrase and search through timestamped transcripts.
            </p>
          </div>
        </section>
        <section className="mzp-c-card-picto ">
          <div
            id="track-legislation-feature"
            className="mzp-c-card-picto-content">
            <h2 className="mzp-c-card-picto-title">
              Track legislation life cycle
            </h2>
            <p className="mzp-c-card-picto-desc">
              Track legislation you care about through the council process.
            </p>
          </div>
        </section>
        <section className="mzp-c-card-picto ">
          <div id="voting-history-feature" className="mzp-c-card-picto-content">
            <h2 className="mzp-c-card-picto-title">View full voting history</h2>
            <p className="mzp-c-card-picto-desc">
              Access full voting records and contact info of each council
              member.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

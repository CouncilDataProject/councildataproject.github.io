import React from 'react';

export default function About(props) {
  return (
    <>
      <div id="about" className="mzp-l-content mzp-t-content-xl">
        <article className="mzp-c-article">
          <h1 className="mzp-c-article-title">
            Tools for a more accessible democracy
          </h1>
          <p>
            We wondered why it was so hard to find out what was happening in our
            local city council and why we couldn't just search for council
            meetings and legislation based on a topic.
            <br />
            So, we set out to solve that.
          </p>
          <p>
            Council Data Project is an open-source project dedicated to
            providing journalists, activists, researchers, and all members of
            each community we serve with the tools they need to stay informed
            and hold their councilmembers accountable. By combining and
            simplifying sources of information on council meetings and actions,
            CDP ensures that everyone is empowered to participate in local
            government.
          </p>
          <p>
            For members of the community looking to stay up-to-date, we aim to
            make finding relevant meetings as easy as possible. For journalists
            and activists, our tools enable tracking legislation through the
            council process, transcript search with timestamped transcripts for
            review and sharing, full voting records querying, and more. And, for
            civic technology organizations and municipal government offices, we
            make all of our tools easy to deploy for your own council.
          </p>
          <p>
            <a href="#contributing">Learn more in Contributing</a>
          </p>
        </article>
      </div>
    </>
  );
}

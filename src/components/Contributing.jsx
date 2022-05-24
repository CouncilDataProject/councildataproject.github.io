import React from 'react';
import { ContributorList } from './ContributorList';
import { DocsList } from './DocsList';

export function Contributing() {
  return (
    <section id="contributing" style={{ padding: '4rem 0' }}>
      <div className="mzp-l-content mzp-t-content-xl">
        <article className="mzp-c-article">
          <h2 className="mzp-c-article-title" style={{ marginBottom: '2rem' }}>
            Contributing
          </h2>
          <p>
            Contributions are welcome, and they are greatly appreciated! Every
            little bit helps, and credit will always be given.
          </p>
          <p>
            We have multiple avenues for contributing, whether it be via code,
            design, project management, research, and so on. We welcome all
            skill levels, and are excited to see what you can do!
          </p>
        </article>
        <article className="mzp-c-article" style={{ marginTop: '4rem' }}>
          <h3>Documentation</h3>
          <p>
            Explore our guides/docs for getting started with the Council Data
            Project.
          </p>
        </article>
        <DocsList />
        <article className="mzp-c-article" style={{ marginTop: '4rem' }}>
          <h3>Contributors</h3>
          <p>Council Data Project was created by:</p>
        </article>
        <ContributorList />
        <article className="mzp-c-article">
          <p>
            Much of our second prototype can be attributed to the volunteers
            from{' '}
            <a
              className="cdp-link"
              href="https://medium.com/democracylab-org/textio-engages-employees-to-accelerate-civic-innovation-5984609a95ce">
              Textio
            </a>
            .
          </p>
          <p>
            Many volunteers and contributors have found the project through{' '}
            <a
              className="cdp-link"
              href="https://www.democracylab.org/index/?section=Home">
              DemocracyLab
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  );
}

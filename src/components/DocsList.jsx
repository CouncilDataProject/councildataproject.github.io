import React from 'react';
import './DocsList.css';

export function DocsList() {
  const docs = [
    {
      title: 'Frontend',
      description: 'Component library and web app used for CDP locations.',
      linkUrl: 'https://github.com/CouncilDataProject/cdp-frontend',
    },
    {
      title: 'Backend',
      description:
        'Data storage utilities and processing pipelines used for CDP locations.',
      linkUrl: 'https://github.com/CouncilDataProject/cdp-backend',
    },
    {
      title: 'Infrastructure',
      description: 'Bots, templates, and CLIs for creating new CDP locations.',
      linkUrl:
        'https://github.com/CouncilDataProject/cookiecutter-cdp-deployment',
    },
    {
      title: 'Design assets',
      description: 'Design assets and tokens for CDP locations.',
      linkUrl: 'https://github.com/CouncilDataProject/cdp-design',
    },
    {
      title: 'Scraper library',
      description: 'Scraper libraries for CDP locations.',
      linkUrl: 'https://github.com/CouncilDataProject/cdp-scrapers',
    },
    {
      title: 'Roadmap',
      description: 'High level project roadmap for CDP development.',
      linkUrl: 'https://github.com/CouncilDataProject/cdp-roadmap',
    },
  ];

  return (
    <section className="docs-list-container">
      {docs.map((contributor) => (
        <a
          key={contributor.linkUrl}
          className="cdp-doc-card"
          style={{ textDecoration: 'none', color: '#000' }}
          href={contributor.linkUrl}>
          <p className="cdp-doc-card-title">{contributor.title}</p>
          <p className="cdp-doc-card-description">{contributor.description}</p>
        </a>
      ))}
    </section>
  );
}

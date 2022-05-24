import React from 'react';
import './DocsList.css';

export function DocsList() {
  const docs = [
    {
      title: 'Get started',
      description: 'New to CDP? Start here.',
      linkUrl: '#',
    },
    {
      title: 'Frontend',
      description: 'Component library and web app used for CDP locations.',
      linkUrl: '#',
    },
    {
      title: 'Backend',
      description:
        'Data storage utilities and processing pipelines used for CDP locations.',
      linkUrl: '#',
    },
    {
      title: 'Infrastructure',
      description: 'Bots, templates, and CLIs for creating new CDP locations.',
      linkUrl: '#',
    },
    {
      title: 'Design assets',
      description: 'Design assets and tokens for CDP locations.',
      linkUrl: '#',
    },
    {
      title: 'Scraper library',
      description: 'Scraper libraries for CDP locations.',
      linkUrl: '#',
    },
    {
      title: 'Roadmap',
      description: 'High level project roadmap for CDP development.',
      linkUrl: '#',
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

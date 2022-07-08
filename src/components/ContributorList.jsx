import './DocsList.css';

export function ContributorList() {
  const contributors = [
    {
      name: 'Jackson Maxfield Brown',
      role: 'Project Lead and Backend Development',
      linkUrl: 'https://jacksonmaxfield.github.io',
    },
    {
      name: 'Nic Weber',
      role: 'Project Lead and Advising',
      linkUrl: 'https://nicweber.info/',
    },
    {
      name: 'To Huynh',
      role: 'Full Stack Development',
      linkUrl: 'https://github.com/tohuynh',
    },
    {
      name: 'Isaac Na',
      role: 'Backend Development',
      linkUrl: 'https://www.isaacna.com/',
    },
    {
      name: 'Hawk Ticehurst',
      role: 'Frontend Development',
      linkUrl: 'https://twitter.com/hawkticehurst',
    },
    {
      name: 'Brian Ledbetter',
      role: 'Frontend Development',
      linkUrl: 'https://www.linkedin.com/in/brianjledbetter/',
    },
    {
      name: 'Katlyn M.F. Greene',
      role: 'UX Research',
      linkUrl: 'https://www.katlynmfgreene.com/',
    },
    {
      name: 'Emily Gilles',
      role: 'UX Design',
      linkUrl: 'https://www.emilygilles.design/',
    },
    {
      name: 'Madeleine Farrer',
      role: 'Graphic Design',
      linkUrl: 'https://www.linkedin.com/in/madeleine-farrer-14a1a3118/',
    },
    {
      name: 'Shak Ragoler',
      role: 'Backend Development',
      linkUrl: 'https://github.com/Shak2000',
    },
    {
      name: 'Sarah Liu',
      role: 'Product Management',
      linkUrl: 'https://www.linkedin.com/in/sarah-liu-28180b1a4/',
    },
    {
      name: 'Sung Cho',
      role: 'Backend Development',
      linkUrl: 'https://www.linkedin.com/in/sungwcho/',
    },
    {
      name: 'Neha Singh',
      role: 'UX Design',
      linkUrl: 'https://www.linkedin.com/in/neha-s-bb2605189/',
    },
    {
      name: 'Kris Smith',
      role: 'Data Science',
      linkUrl: 'https://www.linkedin.com/in/kristopher-smith-/',
    },
    {
      name: 'Melanie White',
      role: 'UX Design',
      linkUrl: 'https://melanie-white.com/',
    },
    {
      name: 'Adrian MacDonald',
      role: 'Product Design',
      linkUrl: 'https://www.linkedin.com/in/adrian-macdonald',
    },
    {
      name: 'Pia Steffes',
      role: 'UX Design',
      linkUrl: 'https://www.linkedin.com/in/piasteffes/',
    },
    {
      name: 'Dale Harvey Husband',
      role: 'UX Design',
      linkUrl: 'https://www.linkedin.com/in/dale-harvey-husband-977526a5/',
    },
  ];

  return (
    <section className="docs-list-container">
      {contributors.map((contributor) => (
        <a
          key={contributor.linkUrl}
          className="cdp-doc-card"
          style={{ textDecoration: 'none', color: '#000' }}
          href={contributor.linkUrl}>
          <p className="cdp-doc-card-title">{contributor.name}</p>
          <p className="cdp-doc-card-description">{contributor.role}</p>
        </a>
      ))}
    </section>
  );
}

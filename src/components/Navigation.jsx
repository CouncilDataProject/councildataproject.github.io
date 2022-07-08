export function Navigation() {
  const navLinks = [
    {
      linkText: 'About',
      linkUrl: '#about',
    },
    {
      linkText: 'Locations',
      linkUrl: '#locations',
    },
    {
      linkText: 'Contributing',
      linkUrl: '#contributing',
    },
  ];

  return (
    <div className="mzp-c-navigation mzp-is-sticky">
      <div className="mzp-c-navigation-l-content">
        <div className="mzp-c-navigation-container">
          <button
            className="mzp-c-navigation-menu-button"
            type="button"
            aria-controls="navigation-menu">
            Menu
          </button>
          <NavLogo />
          <NavItems links={navLinks} />
        </div>
      </div>
    </div>
  );
}

function NavLogo() {
  return (
    <section
      className="mzp-c-navigation-logo"
      style={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <span
        className="cdp-icon-black-bg-transparent-size-256"
        style={{
          maxWidth: '42px',
          maxHeight: '42px',
        }}></span>
      <p
        style={{
          margin: '0',
          fontSize: '18px',
          fontWeight: 'bold',
        }}>
        Council Data Project
      </p>
    </section>
  );
}

function NavItems({ links }) {
  return (
    <div className="mzp-c-navigation-items" id="navigation-menu">
      <div className="mzp-c-navigation-menu">
        <nav className="mzp-c-menu mzp-is-basic">
          <ul className="mzp-c-menu-category-list">
            {links.map((link) => {
              return (
                <li className="mzp-c-menu-category" key={link.linkUrl}>
                  <a className="mzp-c-menu-title" href={link.linkUrl}>
                    {link.linkText}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="mzp-c-navigation-download">
        <div className="mzp-c-button-download-container">
          <a
            href="https://github.com/CouncilDataProject"
            className="mzp-c-button mzp-t-product mzp-t-product mzp-t-secondary mzp-t-md">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

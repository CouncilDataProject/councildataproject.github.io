import React from "react";

const NavLinks = [
  {
    name: "About",
    to: "#about",
  },
  {
    name: "Instances",
    to: "#instances",
  },
  {
    name: "Contributing",
    to: "#contributing",
  },
];

export default function Navigation() {
  return (
    <>
      <div id="main-nav" className="mzp-c-navigation mzp-is-sticky">
        <div className="mzp-c-navigation-l-content">
          <div className="mzp-c-navigation-container">
            <div className="mzp-c-navigation-download">
              <div className="mzp-c-button-download-container">
                <a
                  href="https://github.com/CouncilDataProject"
                  className="mzp-c-button mzp-t-product mzp-t-product mzp-t-secondary mzp-t-md"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="mzp-c-navigation-container" aria-expanded="false">
              <nav className="mzp-c-menu mzp-is-basic">
                <ul className="mzp-c-menu-category-list">
                  <li className="mzp-c-menu-category">
                    <a className="mzp-c-menu-title" href="#top">
                      <img
                        src="favicon-transparent.png"
                        alt="CDP logo"
                        width="38"
                      />
                    </a>
                  </li>
                  {NavLinks.map((item) => {
                    return (
                      <li className="mzp-c-menu-category">
                        <a className="mzp-c-menu-title" href={item.to}>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

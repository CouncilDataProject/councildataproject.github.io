import React, { useState } from "react";
import MediaQuery from "react-responsive";

function Navitems({ Links }) {
  return (
    <div className="mzp-c-navigation-items" id="navigation-demo">
      {/* show github link only in PC view */}
      <MediaQuery query="(min-width: 768px)">
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
      </MediaQuery>
      <div className="mzp-c-navigation-container" aria-expanded="false">
        <nav className="mzp-c-menu mzp-is-basic">
          <ul className="mzp-c-menu-category-list">
            {Links.map((item) => {
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
  );
}

export default function Navigation({ NavLinks }) {
  // state to show menu in mobile view
  const [mmenu, setMmenu] = useState(false);

  return (
    <>
      <div id="main-nav" className="mzp-c-navigation mzp-is-sticky">
        <div className="mzp-c-navigation-l-content">
          <div className="mzp-c-navigation-container">
            <div
              className="cdp-icon-black-bg-transparent-size-64"
              style={{
                float: "left",
                marginTop: "12px",
              }}
            >
              <a href="#top">CDP logo</a>
            </div>
            {/* mobile view */}
            <MediaQuery query="(max-width: 767px)">
              <button
                className="mzp-c-navigation-menu-button"
                style={{ display: "inline" }}
                type="button"
                onClick={() => {
                  if (mmenu) {
                    setMmenu(false);
                  } else {
                    setMmenu(true);
                  }
                }}
              >
                Menu
              </button>
              {mmenu ? <Navitems Links={NavLinks} /> : <></>}
            </MediaQuery>
            {/* PC screen view */}
            <MediaQuery query="(min-width: 768px)">
              <Navitems Links={NavLinks} />
            </MediaQuery>
          </div>
        </div>
      </div>
    </>
  );
}

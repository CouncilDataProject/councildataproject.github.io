import React, { useEffect } from 'react';
// import '@mozilla-protocol/core/protocol/js/protocol-menu.js';

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

  // useEffect(() => {
  //   Mzp.Navigation.init({
  //     onNavOpen: function () {
  //       console.log('Navigation opened');
  //     },
  //     onNavClose: function () {
  //       console.log('Navigation closed');
  //     },
  //   });
  // }, []);

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
    // <section className="mzp-c-navigation">
    //   <div className="mzp-c-navigation-l-content">
    //     <div className="mzp-c-navigation-container">
    //       <NavLogo />
    //       {/* desktop view */}
    //       <MediaQuery query="(min-width: 768px)">
    //         <NavItems links={links} />
    //       </MediaQuery>
    //       {/* mobile view */}
    //       <MediaQuery query="(max-width: 767px)">
    //         <button
    //           className="mzp-c-navigation-menu-button"
    //           style={{ display: 'inline' }}
    //           type="button"
    //           onClick={() => {
    //             if (isMenuOpen) {
    //               setIsMenuOpen(false);
    //             } else {
    //               setIsMenuOpen(true);
    //             }
    //           }}>
    //           Menu
    //         </button>
    //         {isMenuOpen ? <NavItems links={links} /> : <></>}
    //       </MediaQuery>
    //     </div>
    //   </div>
    // </section>
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
      <div className="mzp-c-navigation-download">
        <div className="mzp-c-button-download-container">
          <a
            href="#"
            className="mzp-c-button mzp-t-product mzp-t-product mzp-t-secondary mzp-t-md">
            GitHub
          </a>
        </div>
      </div>
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
    </div>
  );
}

// function NavItems({ links }) {
//   return (
//     <div className="mzp-c-navigation-items">
//       <div className="mzp-c-navigation-container" aria-expanded="false">
//         <nav className="mzp-c-menu mzp-is-basic">
//           <ul className="mzp-c-menu-category-list">
//             {links.map((item) => {
//               return (
//                 <li className="mzp-c-menu-category">
//                   <a className="mzp-c-menu-title" href={item.to}>
//                     {item.name}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//       {/* show github link only in desktop view */}
//       <MediaQuery query="(min-width: 768px)">
//         <div className="mzp-c-navigation-download">
//           <div className="mzp-c-button-download-container">
//             <a
//               href="https://github.com/CouncilDataProject"
//               className="mzp-c-button mzp-t-product mzp-t-product mzp-t-secondary mzp-t-md">
//               GitHub
//             </a>
//           </div>
//         </div>
//       </MediaQuery>
//     </div>
//   );
// }

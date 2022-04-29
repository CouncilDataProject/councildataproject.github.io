import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero-container">
      <div id="hero-content-container" class="mzp-c-hero-body">
        <h1 class="cdp-h1 mzp-u-title-xl">
          A search engine for local government.
        </h1>
        {/* <HeroButton buttonText="Select your location" href="#locations" /> */}
      </div>
      <img src="imgs/cdp-hero.png" alt="" />
    </section>
    // <section id="hero" className="hero-container">
    //   <div className="mzp-l-content mzp-t-content-xl">
    //     <div className="mzp-c-hero-body">
    //       <h1 className="mzp-c-hero-title">
    //         A search engine for local government.
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="mzp-c-hero-image">
    //     <img src="imgs/cdp-hero.png" alt="public speaker art" />
    //   </div>
    // </section>
  );
}

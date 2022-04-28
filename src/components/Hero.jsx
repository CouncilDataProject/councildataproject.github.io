import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mzp-c-hero mzp-has-image cdp-bg-dark-purple cdp-white"
    >
      <div className="mzp-l-content mzp-t-content-xl">
        <div className="mzp-c-hero-body">
          <h1 className="mzp-c-hero-title">A search engine for local government.</h1>
        </div>
      </div>

      <div className="mzp-c-hero-image">
        <img
          src="imgs/public-speaker-light-purple.svg"
          alt="public speaker art"
        />
      </div>
    </section>
  );
}

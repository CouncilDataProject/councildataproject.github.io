import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="mzp-c-footer">
        <div className="mzp-l-content">
          <nav className="mzp-c-footer-secondary">
            <div className="mzp-c-footer-legal">
              <p>
                Portions of this content are ©2017–2021 by individual Council
                Data Project contributors. Content available under{' '}
                <a
                  rel="license"
                  href="https://github.com/CouncilDataProject/councildataproject.github.io/blob/master/LICENSE"
                >
                  MIT License
                </a>
                .
              </p>
              <p>
                Styled using{' '}
                <a rel="external" href="https://protocol.mozilla.org/">
                  Mozilla Protocol
                </a>
                . Artwork provided by{' '}
                <a rel="external" href="https://undraw.co/">
                  unDraw
                </a>
                .
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}

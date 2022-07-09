export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mzp-c-footer">
      <div className="mzp-l-content">
        <nav className="mzp-c-footer-secondary">
          <div className="mzp-c-footer-legal">
            <p className="mzp-c-footer-license">
              Portions of this content are ©2017-{currentYear} by individual
              Council Data Project contributors. Content available under{' '}
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
              . Icons provided by{' '}
              <a rel="external" href="https://ionic.io/ionicons">
                ionicons
              </a>
              .
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
}

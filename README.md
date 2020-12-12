# councildataproject.github.io

[![Deployment Status](https://github.com/CouncilDataProject/councildataproject.github.io/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/CouncilDataProject/councildataproject.github.io/actions)

Landing page for the Council Data Project organization. Contains information about the
project and acts as a transfer site for supported instances.

## About

Council Data Project is an open-source project dedicated to providing journalists,
activists, researchers, and all members of each community we serve with the tools they
need to stay informed and hold their Council Members accountable.

By combining and simplifying sources of information on Council meetings and actions,
CDP ensures that everyone is empowered to participate in local government.

Each municipality that CDP supports (_a CDP instance_) has open source maintainers
which write code to gather municipality meeting information and compile them into a
single resource to then be processed, stored, and made accessible by our general CDP
tooling.

## Contributing

- [cdp-backend](https://github.com/CouncilDataProject/cdp-backend): Contains
  all the database models, data processing pipelines, and infrastructure-as-code for CDP
  deployments. Contributions here will be available to all CDP instances. Entirely
  written in Python.
- [cdp-frontend](https://github.com/CouncilDataProject/cdp-frontend): Contains all of
  the components used by the web apps to be hosted on GitHub Pages. Contributions here
  will be available to all CDP instances. Entirely written in
  TypeScript and React.
- [cookiecutter-cdp-deployment](https://github.com/CouncilDataProject/cookiecutter-cdp-deployment):
  A template to be used by the Python `cookiecutter` package to create an entirely new
  deployment repository. This is where `cdp-backend` and `cdp-frontend` are imported and
  used. If you would like to create a new deployment under the
  `councildataproject.github.io` domain please
  [log a GitHub issue](https://github.com/CouncilDataProject/councildataproject.github.io/issues).
  If you want to utilize a different domain, simply use the template like any other
  `cookiecutter`.
- [councildataproject.github.io](https://github.com/CouncilDataProject/councildataproject.github.io):
  This repo. Our landing page! Contributions here should largely be text changes and
  admin updates.

## Development Commands

- `npm i`: install project dependencies
- `npm start`: start a localhost server and watch for changes
- `npm run build`: build the production application
- `npm run test`: test that at the very least the webpage will render

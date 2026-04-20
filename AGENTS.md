# Repository Guidelines

## Project Structure & Module Organization
This repository is a Cypress end-to-end test suite. Active specs live in `e2e/` and follow the `*.cy.js` pattern, for example `e2e/login.cy.js` and `e2e/home.cy.js`. Shared support code lives in `support/`, with reusable commands in `support/commands.js` and page objects in `support/pages/`. Test data is stored in `fixtures/` as JSON, such as `fixtures/example.json`. Cypress run artifacts are written to `cypress/screenshots/` and `cypress/videos/` and are ignored by git.

The `cypress/` directory also contains the default Cypress scaffold examples. Treat those as reference material unless you are intentionally updating the legacy examples.

## Build, Test, and Development Commands
The repository does not define package scripts, so use Cypress directly after installing dependencies:

- `npx cypress open` - launches the interactive Cypress runner for local debugging.
- `npx cypress run` - runs all specs headlessly.
- `npx cypress run --spec e2e/login.cy.js` - runs a single spec file.

## Coding Style & Naming Conventions
Use JavaScript with the existing Cypress style: `2`-space indentation, camelCase for functions and page-object methods, and `*.cy.js` for spec files. Keep selectors specific and readable, and prefer page objects or custom commands for repeated flows. `cypress.config.js` uses CommonJS; specs and support files use ES module imports.

No formatter or linter is configured in the repo. Match the surrounding style instead of introducing new formatting conventions.

## Testing Guidelines
Place new end-to-end coverage in `e2e/` and name tests by behavior, such as `login with invalid password`. Reuse fixtures via `cy.fixture('example')` when the same credentials or data are needed across specs. Keep shared setup in `support/commands.js` and `support/pages/` rather than duplicating login or checkout flows in each spec.

## Commit & Pull Request Guidelines
Recent commits are short and direct, such as `Home page test cases update` and `Updated config file`. Follow that pattern: keep commit messages specific, concise, and focused on one change. Pull requests should summarize the behavioral change, list affected specs, and include screenshots or run output when UI behavior changes. Mention any new fixture data or selector changes explicitly.

## Security & Configuration Tips
Do not commit secrets or local environment values. The `.gitignore` already excludes `node_modules/`, `.env`, screenshots, and videos. Tests target public demo sites, so keep credentials limited to fixture data and avoid hardcoding personal accounts.

# starter.nodejs

[![Build Status](https://travis-ci.org/AbrahamTewa/starter.nodejs.svg?branch=master)](https://travis-ci.org/AbrahamTewa/starter.nodejs) [![Coverage Status](https://coveralls.io/repos/github/AbrahamTewa/starter.nodejs/badge.svg?branch=master)](https://coveralls.io/github/AbrahamTewa/starter.nodejs?branch=master) [![Dependency status](https://david-dm.org/AbrahamTewa/starter.nodejs.svg)](https://david-dm.org/AbrahamTewa/starter.nodejs) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/07acca80a73449ed98b6b0b44c2800e3)](https://www.codacy.com/app/AbrahamTewa/starter.nodejs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=AbrahamTewa/starter.nodejs&amp;utm_campaign=Badge_Grade) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=AbrahamTewa_starter.nodejs&metric=alert_status)](https://sonarcloud.io/dashboard?id=AbrahamTewa_starter.nodejs) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Simple node starter, using Babel 7, gulp 4, unit testing, eslinting, etc...

## Description

This project is meant to be a NodeJS starter. It expose a simple CLI that display "Hello world" in the console. But all main development aspects are included in this project.

### Development experience
- [Babel 7](http://babeljs.io/), using the `@babel/env` preset.
- [gulp 4](https://github.com/gulpjs/gulp/blob/v4.0.0/docs/API.md) for task creation.
- [conventional commits](http://conventionalcommits.org/) with [semantic-release](https://semantic-release.gitbook.io/)

### Code quality
- [ESLint 5](http://eslint.org/) with [Airbnb base rules](https://www.npmjs.com/package/eslint-config-airbnb-base). The only change on the airbnb rules is the indent rule, set to 4. Just update `.eslintrc` file to change this behavior.
- [EditorConfig](http://editorconfig.com/), just because it's a must-have.
- [remark-lint](https://github.com/remarkjs/remark-lint) configured with recommended rules

### Unit testing, with coverage
Complete unit-testing environment :
- [Mocha](https://mochajs.org/) as test framework
- [Chai](http://chaijs.com/) as assertion library
- [chai-jest-snapshot](https://www.npmjs.com/package/chai-jest-snapshot) for snapshot usage
- [sinon.js](https://sinonjs.org/) for spies, stubs and mocks
- [proxyquire](https://www.npmjs.com/package/proxyquire) to proxyfy modules and packages
- [faker](https://www.npmjs.com/package/faker) to generate fake data

See `src/helpers.spec.js` for a complete example of all these tools.

### Continuous Integration
- [Travis](http://travis-ci.org/) integration, with jobs for:
  - Unit tests (all branches except `master`)
  - Coverage (`master` branch only) reported to [coveralls.io](https://coveralls.io/)
  - Lint
  - Release
  - Github Pages
- [Codacy](https://codacy.com) integration
- [SonarCloud](https://sonarcloud.io) integration

### Documentation
- [jsDoc](http://usejsdoc.org/) with [minami theme](https://www.npmjs.com/package/minami) for documentation generation.
- [Docsify](http://docsify.js.org/), publish on Github pages

## Install

```bash
git clone https://github.com/AbrahamTewa/starter.nodejs.git
cd starter.nodejs
npm ci
npm run build
```

### Setup travis

In travis, you need to setup the following variables for your project:

* `CODACY_PROJECT_TOKEN`
* `GITHUB_TOKEN`
* `NPM_TOKEN`
* `SONAR_TOKEN` for SonarCloud integration

#### `CODACY_PROJECT_TOKEN`

Codacy's project token. See "Project API" in the Settings/Integrations tab of the codacy project.
This token will be use by travis to send coverage report to codacy.

#### `GITHUB_TOKEN`

[Personal access token](https://github.com/settings/tokens) configurable in Developer settings section.

This token will be use for semantic-release. It enable the tool to update the repository with changelog, updated version of package.json and tag creation.

See:
* [Semantic-release/github configuration](https://github.com/semantic-release/github#configuration)

#### `NPM_TOKEN`

NPM Access token.
It enable the publication of your package if it's not private.

See:
* [Semantic-release/npm configuration](https://github.com/semantic-release/npm#configuration)

#### `SONAR_TOKEN`

Enable SonarCloud integration.
See [Travic documentation](https://docs.travis-ci.com/user/sonarcloud/)).

## Usage

```bash
npm start -- --help
```

## Usage

```bash
git clone https://github.com/AbrahamTewa/starter.nodejs.git
cd node-starter
npm install
npm run build
npm start
```

## Available commands

### `npm run build`
Run the build of the application.
The builder will create a new folder "build" in which the build will be added.

```bash
npm run build
```

### `npm run lint`
Lint source files using [ESLint](http://eslint.org)/.

### `npm run test`
Run the test using [Mocha](https://mochajs.org/).

Output directory : `reports/tests/unit/`.

The output directory it's clean at the begining of the command.

### `npm run test-cov`
Run tests with coverage using [Istanbul/nyc](https://istanbul.js.org/).

```bash
npm run test-cov
```

This command will generate:
* Unit tests reports as describe bellow
* `./reports/tests/unit/coverage/lcov.info' : lcov file
* `./reports/tests/unit/coverage/lcov-report/index.html' : HTML report file

The output directory it's clean at the begining of the command.

## Continuous Integration
Travis is already configured with several jobs and stages:

| Stage       | Job           | Description                                                         |
| --- | --- | --- |
| Validation  | Unit tests    | Run unit testing                                                    |
| Validation  | Lint          | Run code linting                                                    |
| Publication | Documentation | (`master` branch only) Create and publish the project documentation |

## Unit tests

Unit tests will generate several files:

| Path                                       | Description                                                        |
| --- | --- |
| `dist/`                                    | Folder containing build files. See   [npm build](#npm-run-build) command |
| `reports/tests/unit/xunit.xml`             | JUnit report of unit tests                                         |
| `reports/tests/unit/results/`              | HTML report of unit tests                                          |
| `reports/tests/unit/coverage/lcov.info`    | LCov coverage report of unit tests                                 |
| `reports/tests/unit/coverage/lcov-report/` | HTML coverage report of unit tests                                 |

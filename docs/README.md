# starter.nodejs

[![Build Status](https://travis-ci.org/AbrahamTewa/starter.nodejs.svg?branch=master)](https://travis-ci.org/AbrahamTewa/starter.nodejs) [![Dependency status](https://david-dm.org/AbrahamTewa/starter.nodejs.svg)](https://david-dm.org/AbrahamTewa/starter.nodejs)

Simple node starter, using Babel 7, gulp 4, unit testing, eslinting, etc...

## Usage

```
git clone https://github.com/AbrahamTewa/starter.nodejs.git
cd node-starter
npm install
npm run build
npm start -- --help
```

## Description

This project is meant to be a NodeJS starter. It expose a simple CLI that display "Hello world" in the console. But all main development aspects are included in this project.

### Development experience
- [Babel 7](http://babeljs.io/), using the `@babel/env` preset.
- [gulp 4](https://github.com/gulpjs/gulp/blob/v4.0.0/docs/API.md) for task creation.

### Code quality
- [ESLint 5](http://eslint.org/) with [Airbnb base rules](https://www.npmjs.com/package/eslint-config-airbnb-base). The only change on the airbnb rules is the indent rule, set to 4. Just update `.eslintrc` file to change this behavior.
- [EditorConfig](http://editorconfig.com/), just because it's a must-have.

### Unit testing, with coverage
Complete unit-testing environment :
- [Mocha](https://mochajs.org/) as test framework
- [Chai](http://chaijs.com/) as assertion library
- [chai-jest-snapshot](https://www.npmjs.com/package/chai-jest-snapshot) for snapshot usage
- [sinon.js](https://sinonjs.org/) for spies, stubs and mocks
- [proxyquire](https://www.npmjs.com/package/proxyquire) to proxyfy modules and packages
- [faker](https://www.npmjs.com/package/faker) to generate fake data

### Documentation
- [jsDoc](http://usejsdoc.org/) with [minami theme](https://www.npmjs.com/package/minami) for documentation generation.
- [GitBook](https://github.com/GitbookIO/gitbook), who, with [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown) allow reference documentation into the book

See `src/helpers.spec.js` for a complete example of all these tools.

```
npm test
```

This will generate two reports:
* `./reports/tests/unit/xunit.xml': Xunit report
* `./reports/tests/unit/results/index.html`: [Mochawesome](https://www.npmjs.com/package/mochawesome) report

#### Coverage
Coverage is performed by using [Istanbul/nyc](https://istanbul.js.org/).

```
npm run test-cov
```

This command will generate:
* Unit tests reports as describe bellow
* `./reports/tests/unit/coverage/lcov.info' : lcov file
* `./reports/tests/unit/coverage/lcov-report/index.html' : HTML report file

### Continuous Integration
Travis is already configured with several jobs and stages:

| Stage       | Job           | Description                                                         |
| Validation  | Unit tests    | Run unit testing                                                    |
| Validation  | Lint          | Run code linting                                                    |
| Publication | Documentation | (`master` branch only) Create and publish the project documentation |

## Usage

``` 
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

### `npm run lint`
Lint source files using [ESLint](http://eslint.org)/.

### `npm run test-cov`
Run tests with coverage using [Istanbul](https://istanbul.js.org/) and [Mocha](https://mochajs.org/) for test.

Output directory : `reports/tests/unit/`.

The output directory it's clean at the begining of the command.

### `npm run test`
Run the test using [Mocha](https://mochajs.org/).

Output directory : `reports/tests/unit/`.

The output directory it's clean at the begining of the command.

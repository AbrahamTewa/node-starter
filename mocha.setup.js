/* eslint-disable import/no-extraneous-dependencies */
/* eslint-env node, mocha */

import chai from 'chai';
import chaiJestSnapshot from 'chai-jest-snapshot';

chai.use(chaiJestSnapshot);

before(() => {
    chaiJestSnapshot.resetSnapshotRegistry();
});

beforeEach(function beforeEach() {
    chaiJestSnapshot.configureUsingMochaContext(this);
});

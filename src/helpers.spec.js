/* eslint-env node, mocha */

// ============================================================
// Import packages
import { assert, expect } from 'chai';
import faker from 'faker';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

// ============================================================
// Import modules
import {
    getHelloMessage,
} from './helpers';

// ============================================================
// Tests
describe('getHelloMessage', () => {
    it('Should return a string', () => {
        const helloMessage = getHelloMessage();

        assert.isString(helloMessage);

        expect(helloMessage).to.matchSnapshot();
    });

    it('Should include name', () => {
        const name = faker.random.alphaNumeric(10);
        const helloMessage = getHelloMessage(name);

        assert.isString(helloMessage);
        assert.isTrue(helloMessage.includes(name));
    });
});

describe('sayHello', () => {
    it('should log the default message if no name provided', () => {
        const consoleLogSpy = sinon.spy();
        const proxy = proxyquire('./helpers', {
            'better-console': {
                log: consoleLogSpy,
            },
        });

        proxy.sayHello();

        assert.isTrue(consoleLogSpy.calledOnce);
        assert.isString(consoleLogSpy.args[0][0]);
    });
});

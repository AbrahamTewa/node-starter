#!/usr/bin/env node
const { sayHello } = require('./helpers');

require('yargs') // eslint-disable-line no-unused-expressions
    .usage('$0 <cmd> [args]')
    .command('hello [name]', 'Display hello message', (yargs) => {
        yargs.positional('name', {
            type: 'string',
            describe: 'The name to say hello to',
        });
    }, (argv) => {
        sayHello(argv.name);
    })
    .help()
    .argv;

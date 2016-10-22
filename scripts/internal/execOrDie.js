/* global console module */
const shelljs = require('shelljs');
const { exec, exit } = shelljs;

const R = require('ramda');
const { complement, isNil } = R;
const isNotNil = complement(isNil);

const printIfNotNil = x => isNotNil(x) ? console.info(x) : undefined;
const noError = result => result.code === 0;
module.exports = (cmd, text) => (noError(exec(cmd)) ? printIfNotNil(text) : exit(1));
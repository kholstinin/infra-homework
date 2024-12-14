import infra from "../build/eslint-plugin-infra/index.js";
import assert from 'node:assert';
import { ESLint } from 'eslint';

assert.equal(infra.meta.version, '0.0.1');
assert.equal(infra.meta.name, 'eslint-plugin-infra');

const
  eslint = new ESLint(),
  results = await eslint.lintFiles('./src/*');

const expectedErrors = [
  {
    ruleId: 'infra/strict-const',
    severity: 2,
    message: 'Wrong usage of runtime const, please use globalThis.ENVIRONMENT',
    line: 7,
    column: 29,
    nodeType: 'Identifier',
    endLine: 7,
    endColumn: 40
  },
  {
    ruleId: 'infra/strict-const',
    severity: 2,
    message: 'Wrong usage of buildtime const, please use PROJECT without globalThis',
    line: 15,
    column: 37,
    nodeType: 'Identifier',
    endLine: 15,
    endColumn: 44
  }
]

const errorMessages = results[0].messages;
assert.equal(errorMessages.length, 2);

errorMessages.forEach((message, index) => {
  const expectedError = expectedErrors[index];

  assert.equal(message.ruleId, expectedError.ruleId);
  assert.equal(message.message, expectedError.message);
});

import {exec} from 'node:child_process';
import path from 'node:path';
import assert from 'node:assert';

const preCommitPath = path.resolve(import.meta.dirname, '../.git/hooks/pre-commit');

const expectedOutput = [
  'Structure of component footer is broken! Missing footer.js',
  'Structure of component list is broken! Missing index.js'
];

exec(`bash ${preCommitPath}`, (_err, stdout) => {
  assert.deepEqual(stdout.split('\n').filter(Boolean), expectedOutput);
});

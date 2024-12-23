const assert = require('node:assert');
const { exec } = require('node:child_process');
const packageJSON = require('../package.json');

const deps = [];

for (const dep in packageJSON.dependencies) {
  deps.push(`${dep}: ${packageJSON.dependencies[dep]}`)
}

const expected = {
  name: "infra-homework",
  version: "1.0.0",
  author: "kholstinin.da@gmail.com",
  description: "homework tasks for frontend infra course",
  dependencies: deps
};

exec('yarn project', (_, stdout) => {
  assert.deepEqual(JSON.parse(stdout), expected);
});

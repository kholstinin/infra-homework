const assert = require('assert');
const { exec } = require('node:child_process');

const actual = {
  name: "infra-homework",
  version: "1.0.0",
  author: "kholstinin.da@gmail.com",
  description: "homework tasks for frontend infra course",
  dependencies: ["eslint: 9.16.0", "yaml: 2.6.1"]
};

exec('yarn project', (_, stdout) => {
  assert.deepEqual(stdout, JSON.stringify(actual));
});

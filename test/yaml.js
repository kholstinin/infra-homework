const yaml = require('yaml');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');
const expected = require('../config.json');

const yamlConfig = fs.readFileSync(path.resolve(__dirname, '../config.yaml'), 'utf-8');

assert.deepEqual(yaml.parse(yamlConfig), expected);

import yaml from 'yaml';
import path from 'node:path';
import fs from 'node:fs/promises';

export async function load(url, context, nextLoad) {
  if (!isYaml(url)) return nextLoad(url, context);

  try {
    const content = await fs.readFile(new URL(url), 'utf8');
    return {
      shortCircuit: true,
      format: 'json',
      source: JSON.stringify(yaml.parse(content))
    };
  } catch (e) {
    console.error(`Failed to load ${url}:\n`, e);
  }
}

function isYaml(url) {
  const ext = path.extname(url);
  return ext === '.yml' || ext === '.yaml';
}
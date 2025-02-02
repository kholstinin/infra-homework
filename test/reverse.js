import assert from 'node:assert';
import expected from './users.json' with { type: 'json' };

(async () => {
  const response = await fetch('http://localhost');
  const serverHeader = response.headers.get('server');

  if (!serverHeader.includes('nginx')) {
    throw new Error(`Ответ отдал не nginx!`);
  };

  const users = await response.json();

  assert.deepEqual(users, expected);
})();

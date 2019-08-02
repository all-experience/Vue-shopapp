const env = require('@/config/index.js');
export function testApi () {
  return env.API_URL + 'test.com'
}

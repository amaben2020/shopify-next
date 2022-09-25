const path = require('path');
const merge = require('deepmerge');

// merging 2 framweork configs // deepmerge
function withFrameworkConfig(defaultConfig = {}) {
  const framework = 'shopify';

  const frameworkNextConfig = require(path.join(
    '../',
    framework,
    'next.config'
  ));

  const config = merge(defaultConfig, frameworkNextConfig);
  return config;
}

module.exports = { withFrameworkConfig };

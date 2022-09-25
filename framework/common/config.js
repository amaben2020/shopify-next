const path = require('path');
const fs = require('fs');
const merge = require('deepmerge');

// merging 2 framweork configs // deepmerge
function withFrameworkConfig(defaultConfig = {}) {
  // @framework would point to another framework programmatically
  const framework = 'shopify';

  const frameworkNextConfig = require(path.join(
    '../',
    framework,
    'next.config'
  ));

  const config = merge(defaultConfig, frameworkNextConfig);
  const tsPath = path.join(process.cwd(), 'tsconfig.json');
  const tsconfig = require(tsPath);

  tsconfig.compilerOptions.paths['@framework'] = [`@framework/${framework}`];
  tsconfig.compilerOptions.paths['@framework/*'] = [
    `@framework/${framework}/*`,
  ];

  fs.writeFileSync(tsPath, JSON.stringify(tsconfig, null, 2));

  return config;
}

module.exports = { withFrameworkConfig };

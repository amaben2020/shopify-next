const path = require('path');
const fs = require('fs');
const merge = require('deepmerge');
const prettier = require('prettier');

const ALLOWED_FRAMEWORKS = ['shopify', 'bigcommerce', 'shopify_local'];

// merging 2 framweork configs // deepmerge
function withFrameworkConfig(defaultConfig = {}) {
  // @framework would point to another framework programmatically

  let framework = defaultConfig?.framework.name;

  if (!framework) {
    throw new Error('No framework specified, please add a valid provider');
  }

  if (!ALLOWED_FRAMEWORKS.includes(framework)) {
    throw new Error(
      `The api framework: ${framework} is not supported, use ${ALLOWED_FRAMEWORKS.join(
        ', '
      )}`
    );
  }

  if (framework === 'shopify_local') {
    framework = 'shopify';
  }

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

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsconfig), {
      parser: 'json',
    })
  );

  return config;
}

module.exports = { withFrameworkConfig };

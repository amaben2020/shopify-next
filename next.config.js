/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require('./framework/common/config');

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
});

module.exports = nextConfig;

console.log('next ', JSON.stringify(module.exports, null, 2));

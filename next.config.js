/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = withNextIntl({
  reactStrictMode: true,
});

module.exports = nextConfig;

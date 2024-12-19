import type { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = withBundleAnalyzer({
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
});

export default nextConfig;

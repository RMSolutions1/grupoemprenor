/** @type {import('next').NextConfig} - Solo para build estático (public_html) */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
module.exports = nextConfig;

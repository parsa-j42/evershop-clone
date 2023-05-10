/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: '/evershop-clone',
  assetPrefix: '/evershop-clone/',
  output: 'export',
  async generateStaticParams() {
    return {
      '/shop/kids': { page: '/shop/kids' }
    };
  }
}

module.exports = nextConfig

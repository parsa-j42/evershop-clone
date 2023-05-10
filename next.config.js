/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/evershop-clone',
  experimental: {
    appDir: true,
  },
  output: 'export',
  async generateStaticParams() {
    return {
      '/shop/kids': { page: '/shop/kids' }
    };
  }
}

module.exports = nextConfig

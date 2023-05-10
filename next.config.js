/** @type {import('next').NextConfig} */
const nextConfig = {
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

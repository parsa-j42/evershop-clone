/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  exportPathMap: async function (defaultPathMap) {
    return {
      ...defaultPathMap,
      '/shop/kids': { page: '/shop/kids' }
    };
  }
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'picsum.photos'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

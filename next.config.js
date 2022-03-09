module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'picsum.photos'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}

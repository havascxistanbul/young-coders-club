module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'picsum.photos'],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

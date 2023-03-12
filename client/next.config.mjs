/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/client",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/client',
          basePath: false,
          permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig
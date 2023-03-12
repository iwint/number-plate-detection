/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/',
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
        hostname: 'example.com',
      },
    ],
  },
}

export default nextConfig
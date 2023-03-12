/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/dashboard",
  async redirects() {
    return [
      {
          source: '/dasboard',
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
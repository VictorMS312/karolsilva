/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.instagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent**.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'instagram.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig

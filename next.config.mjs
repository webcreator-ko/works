/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evgvu9mkg9k.exactdn.com',
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "gpt-trends-cms.com",
   },
  ],
 },
};

export default nextConfig;

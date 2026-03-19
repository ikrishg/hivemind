/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
  images: {
    remotePatterns: [
      {
        hostname: 'krish.pics',
      },
    ],
  },
};

export default nextConfig;

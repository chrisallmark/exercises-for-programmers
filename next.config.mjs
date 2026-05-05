/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "live.staticflickr.com" },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;

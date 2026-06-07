/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.image2url.com",
        pathname: "/r2/default/images/**"
      }
    ]
  }
};

export default nextConfig;

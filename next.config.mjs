/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: "incremental",
    after: true,
  },
};

export default nextConfig;

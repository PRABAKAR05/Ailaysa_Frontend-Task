/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Capacitor (serves from /out)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

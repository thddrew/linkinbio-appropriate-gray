import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        hostname: "github.com",
      },
      {
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/analytics",
      destination: `${process.env.ANALYTICS_URL}/analytics`,
    },
    {
      source: "/analytics/:path*",
      destination: `${process.env.ANALYTICS_URL}/analytics/:path*`,
    },
  ],
};

export default nextConfig;

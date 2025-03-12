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
      destination: `${process.env.ANALYTICS_URL}/`,
    },
    {
      source: "/analytics/:path*",
      destination: `${process.env.ANALYTICS_URL}/:path*`,
    },
  ],
};

export default nextConfig;

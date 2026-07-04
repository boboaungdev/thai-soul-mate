import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
      },
    ],
  },
}

export default nextConfig

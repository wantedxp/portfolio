/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "**",
      },
    ]
  }
}

module.exports = {
  images: {
    domains: ['imgur.com'],
  },
}


module.exports = nextConfig

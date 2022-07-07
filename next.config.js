/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dev-rendomstuff00.pantheonsite.io', 'images.ctfassets.net', 'cdn2.thecatapi.com', 'images.dog.ceo', 'imgs.xkcd.com'],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [8, 16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig

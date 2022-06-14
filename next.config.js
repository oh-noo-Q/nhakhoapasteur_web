/** @type {import('next').NextConfig} */
module.exports = {
  target: "serverless",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
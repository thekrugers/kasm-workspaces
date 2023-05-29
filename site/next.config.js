/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'TheKrugers',
    description: 'Kasm Workspaces we use.',
    icon: '/img/logo.svg',
    listUrl: 'https://thekrugers.github.io/kasm-workspaces/',
    contactUrl: 'https://github.com/thekrugers/kasm-workspaces/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-workspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

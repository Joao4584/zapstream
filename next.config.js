/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["*"], // Adicione 'cdn.sanity.io' como um domínio permitido
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
    }
}

module.exports = nextConfig

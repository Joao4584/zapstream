/** @type {import('next').NextConfig} */
const path = require('path');


const nextConfig = {
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, './'),
        '@server': path.resolve(__dirname, './server'),
        '@schema': path.resolve(__dirname, './schema'),
        '@type': path.resolve(__dirname, './__types__'),
      
      };
      return config;
    },
    async redirects() {
        return [
            {
              source: '/auth',
              destination: '/auth/login',
              permanent: true, 
            },
            {
              source: '/',
              destination: '/dashboard',
              permanent: true
            }
        ];
    },

    
}

module.exports = nextConfig

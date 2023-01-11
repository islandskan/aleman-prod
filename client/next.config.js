/** @type {import('next').NextConfig} */
const env = require('dotenv').config();
console.log(env);

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.ctfassets.net',
            'assets.ctfassets.net',
            'downloads.ctfassets.net',
        ],
    },
};

module.exports = nextConfig;

import withNextIntl from 'next-intl/plugin';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: !IS_PRODUCTION,
    experimental: {
        nextScriptWorkers: IS_PRODUCTION
    },
    // Image optimization
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },
    // Compression
    compress: true,
    // Security headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                ],
            },
            {
                source: '/sitemap.xml',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/xml',
                    },
                ],
            },
        ];
    },
    // Redirects for SEO
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ];
    },
};

export default withNextIntl('./src/translation')(nextConfig);

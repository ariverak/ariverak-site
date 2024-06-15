import withNextIntl from 'next-intl/plugin';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: !IS_PRODUCTION,
    experimental: {
        nextScriptWorkers: IS_PRODUCTION
    }
};

export default withNextIntl('./src/translation')(nextConfig);

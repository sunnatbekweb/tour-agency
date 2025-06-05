import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ['tour.onesystem.uz'],
  },
};
export default withNextIntl(nextConfig);
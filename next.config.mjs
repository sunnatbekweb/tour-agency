import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ['back.yolgo.travel'],
  },
};
export default withNextIntl(nextConfig);
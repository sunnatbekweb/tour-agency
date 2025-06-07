'use client';
import { NextIntlClientProvider } from 'next-intl';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';
export default function Providers({ children, locale, messages }) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Provider store={store}>{children}</Provider>
    </NextIntlClientProvider>
  );
}

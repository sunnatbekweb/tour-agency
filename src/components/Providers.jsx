"use client";

import { NextIntlClientProvider } from "next-intl";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

export default function Providers({ children, locale }) {
  return (
    <NextIntlClientProvider locale={locale}>
      <Provider store={store}>{children}</Provider>
    </NextIntlClientProvider>
  );
}

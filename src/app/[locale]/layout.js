import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../../styles/fonts.css";
import "../../styles/style.css";
import "../../styles/globals.css";

export const metadata = {
  title: "Tour Agency",
  description: "Created by OneSystem",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

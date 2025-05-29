import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import Providers from "@/components/Providers";
import { Header } from "@/components/layouts/Header/Header";
import { Footer } from "@/components/layouts/Footer/Footer";
import "../../styles/fonts.css";
import "../../styles/style.css";
import "../../styles/globals.css";

export const metadata = {
  title: 'Tour Agency',
  description: 'Created by OneSystem',
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="antialiased">
        <Providers locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

"use client"
import "./Footer.css";
import FooterSmSection from "@/components/ui/footer/FooterSmSection";
import FooterMdSection from "@/components/ui/footer/FooterMdSection";
import FooterSection from "@/components/ui/footer/FooterSection";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
export const Footer = () => {
  const locale = useLocale();
  const pathname = usePathname()
  return (
    <div className={`${pathname === `/${locale}/contact` && "hidden"}`}>
      <footer className="footer">
        <FooterSmSection />
        <FooterMdSection />
        <FooterSection />
      </footer>
    </div>
  );
};

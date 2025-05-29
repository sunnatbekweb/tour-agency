import './Footer.css';
import FooterSmSection from '@/components/ui/FooterSmSection';
import FooterMdSection from '@/components/ui/FooterMdSection';
import FooterSection from '@/components/ui/FooterSection';
export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <FooterSmSection />
        <FooterMdSection />
        <FooterSection />
      </footer>
    </div>
  );
};

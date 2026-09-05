import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">

        {/* Main Footer CTA */}
        <div className="footer-cta">
          <p className="eyebrow">LET&apos;S BUILD WHAT&apos;S NEXT</p>

          <h2>
            Make infrastructure
            <br />
            more intelligent.
          </h2>

          <a
            href="mailto:hello@example.com"
            className="footer-link"
          >
            Start a conversation
            <ArrowUpRight size={20} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          {/* InnoVetra Branding */}
          <div className="footer-brand">
            <Image
              src="/images/logo2.png"
              alt="InnoVetra Technologies LLC"
              width={90}
              height={90}
              className="footer-logo"
            />

            <div className="footer-brand-text">
              <span className="footer-company-name">
                InnoVetra
              </span>

              <span className="footer-company-subtitle">
                Technologies LLC
              </span>
            </div>
          </div>

          {/* Company Focus */}
          <p className="footer-focus">
            AI · Digital Twins · Infrastructure Intelligence
          </p>

          {/* Copyright */}
          <p className="footer-copyright">
            © 2026 InnoVetra Technologies LLC. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
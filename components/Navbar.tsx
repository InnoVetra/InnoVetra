"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = ["About", "Solutions", "Industries", "Technology", "Insights"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav-shell">

        {/* InnoVetra Logo */}
        <a className="brand" href="#top" aria-label="InnoVetra Technologies LLC Home">
          <Image
            src="/images/logo.png"
            alt="InnoVetra Technologies LLC"
            width={360}
            height={110}
            className="brand-logo"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}

          <a className="nav-cta" href="#contact">
            Contact
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cookie, ShoppingBasket, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useBox } from "@/context/BoxContext";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, maxItems } = useBox();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-brand-pink p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <Cookie className="text-deep-chocolate" size={24} />
            </div>
            <span className="text-xl font-black text-deep-chocolate tracking-tight">
              Fresh Batch Box
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold text-sm uppercase tracking-wider hover:text-brand-pink transition-colors ${
                  pathname === link.href ? "text-brand-pink" : "text-deep-chocolate/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/menu"
              className="bg-deep-chocolate text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-deep-chocolate/90 transition-all flex items-center gap-2"
            >
              <ShoppingBasket size={18} />
              Box ({totalItems}/{maxItems})
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-deep-chocolate"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-beige p-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block font-bold text-lg ${
                pathname === link.href ? "text-brand-pink" : "text-deep-chocolate"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/menu"
            onClick={() => setIsMenuOpen(false)}
            className="block bg-brand-pink text-deep-chocolate text-center py-3 rounded-xl font-bold"
          >
            Build Your Box ({totalItems}/{maxItems})
          </Link>
        </div>
      )}
    </nav>
  );
}

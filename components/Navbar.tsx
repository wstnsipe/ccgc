"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, company } from "@/lib/data";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isTransparent
            ? "bg-transparent"
            : "bg-[#0A1628] shadow-lg shadow-black/20"
        )}
        style={{ height: "var(--nav-height, 72px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-tight leading-none">
                CCGC
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase leading-none mt-0.5 hidden sm:block">
                Continental Consulting Group
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded",
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#C8102E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:7036837040"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              703.683.7040
            </a>
            <Link
              href="/book"
              className="bg-[#C8102E] hover:bg-[#a50d25] text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors duration-200 tracking-wide"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={clsx(
          "fixed inset-0 z-40 bg-[#0A1628] transition-transform duration-300 md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: "var(--nav-height, 72px)" }}
      >
        <nav className="flex flex-col p-6 gap-2 border-t border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-lg font-medium py-3 px-4 rounded transition-colors",
                  isActive
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:7036837040"
              className="text-gray-300 text-sm text-center py-2"
            >
              703.683.7040
            </a>
            <Link
              href="/book"
              className="bg-[#C8102E] text-white text-center font-semibold py-3 px-6 rounded-sm transition-colors hover:bg-[#a50d25] tracking-wide"
            >
              Book a Consultation
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

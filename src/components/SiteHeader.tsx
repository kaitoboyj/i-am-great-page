import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-new.jpeg";

const WHATSAPP_URL =
  "https://wa.me/2349169606650?text=" +
  encodeURIComponent("Hello 13KULTURE, I'd like to work with you.");

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/artists", label: "Artists" },
  { to: "/media", label: "Media & PR" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="13KULTURE logo" className="w-9 h-9 rounded-full object-cover ring-1 ring-accent/40" />
          <span className="font-display font-semibold tracking-tight text-foreground">
            13<span className="text-accent">KULTURE</span>
          </span>
        </Link>
        <nav className="hidden xl:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-foreground/80 hover:text-accent transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xl:inline-flex h-10 items-center justify-center rounded-full bg-accent text-accent-foreground px-5 text-sm font-medium hover:opacity-90 transition"
        >
          Work With Us
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 py-2"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-accent text-accent-foreground px-5 text-sm font-medium"
            >
              Work With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

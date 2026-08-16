import { Link } from "@tanstack/react-router";
import { Instagram, Music2, Twitter, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-new.jpeg";

const explore = [
  { to: "/about", label: "About" },
  { to: "/artists", label: "Artists" },
  { to: "/services", label: "Services" },
  { to: "/media", label: "Media & PR" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cream mt-32 border-t border-accent/20">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="13KULTURE logo" className="w-9 h-9 rounded-full object-cover ring-1 ring-accent/40" />
              <span className="font-display font-semibold">13<span className="text-accent">KULTURE</span></span>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Creative Culture Company</p>
            <p className="text-sm text-cream/70 leading-relaxed max-w-xs">
              Building platforms, partnerships and opportunities for African creativity.
            </p>
            <p className="mt-6 font-display text-lg text-cream/90 max-w-xs">
              Documenting Culture. <span className="italic text-accent">Creating Legacy.</span>
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              {explore.map((e) => (
                <li key={e.to}><Link to={e.to} className="hover:text-accent">{e.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent inline-flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent inline-flex items-center gap-2"><Music2 className="w-4 h-4" /> TikTok</a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent inline-flex items-center gap-2"><Twitter className="w-4 h-4" /> X</a></li>
              <li><a href="mailto:ohagwugabriel@gmail.com" className="hover:text-accent inline-flex items-center gap-2"><Mail className="w-4 h-4" /> ohagwugabriel@gmail.com</a></li>
              <li><a href="https://wa.me/2349169606650" target="_blank" rel="noopener noreferrer" className="hover:text-accent inline-flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp +234 916 960 6650</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} 13KULTURE. All rights reserved.</p>
          <p>Lagos, Nigeria · Working across Africa and beyond</p>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Sparkles, CalendarDays, Radio, Palette } from "lucide-react";
import architecture from "@/assets/afro-architecture.jpg";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships — 13KULTURE" },
      { name: "description", content: "Culture moves further when the right people move together. Partnerships for artists, brands, events, media platforms and creative organisations." },
      { property: "og:title", content: "Partnerships — 13KULTURE" },
      { property: "og:description", content: "Culture moves further when the right people move together." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/partnerships" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/partnerships" }],
  }),
  component: Partnerships,
});

const tracks = [
  { icon: Users, t: "For Artists", d: "Collaborations, media, opportunities and strategic development." },
  { icon: Sparkles, t: "For Brands", d: "Cultural campaigns, activations and creative partnerships." },
  { icon: CalendarDays, t: "For Events & Festivals", d: "Talent, media, promotion and cultural programming." },
  { icon: Radio, t: "For Media Platforms", d: "Content, talent, broadcast and distribution partnerships." },
  { icon: Palette, t: "For Creative Organisations", d: "Cross-platform collaborations and cultural initiatives." },
];

function Partnerships() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[440px]">
        <img src={architecture} alt="Contemporary African architecture at night" loading="lazy" width={1600} height={1008} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/95" />
        <div className="absolute inset-0 container-x flex flex-col justify-end pb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Partnerships</p>
          <h1 className="font-display text-cream text-5xl md:text-7xl max-w-4xl text-balance">
            Culture moves further when <span className="italic text-accent">the right people move together.</span>
          </h1>
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((t) => (
          <div key={t.t} className="p-8 rounded-2xl border border-border bg-card hover:border-accent transition">
            <t.icon className="w-7 h-7 text-accent mb-4" />
            <h2 className="font-display text-2xl mb-2">{t.t}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.d}</p>
          </div>
        ))}
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-foreground text-background p-12 md:p-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto text-balance">Tell us what you're building.</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 h-12 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Megaphone, Camera, Handshake, CalendarDays, Radio, Plane } from "lucide-react";
import studio from "@/assets/studio-culture.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — 13KULTURE" },
      { name: "description", content: "Artist development, media & PR, creative production, cultural partnerships, events and broadcast distribution from 13KULTURE." },
      { property: "og:title", content: "Services — 13KULTURE" },
      { property: "og:description", content: "One Culture. Many Possibilities." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Users, t: "Artist Development", d: "Positioning, creative direction, collaborations and long-term career strategy for emerging and established talent." },
  { icon: Megaphone, t: "Media & PR", d: "Press strategy, artist publicity, media relations and placement across the platforms that shape the conversation." },
  { icon: Camera, t: "Creative Production", d: "Photography, videography, campaign films and content built for culture-first audiences." },
  { icon: Handshake, t: "Cultural Partnerships", d: "Bringing brands, artists, platforms and organisations together around shared audiences and shared value." },
  { icon: CalendarDays, t: "Events & Experiences", d: "Festival programming, event partnerships, talent curation and cultural experiences." },
  { icon: Radio, t: "Broadcast & Distribution", d: "Television, radio and digital distribution planned around campaign objectives and available budgets." },
];

function Services() {
  return (
    <div>
      <section className="container-x py-24 md:py-32">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Services</p>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl text-balance leading-[1.05]">
          One Culture. <span className="italic text-accent">Many Possibilities.</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
          Six connected capabilities, one ecosystem. Most of our work runs across several of them at once.
        </p>
      </section>

      <section className="container-x pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.t} className="p-8 rounded-2xl border border-border bg-card hover:border-accent transition">
            <s.icon className="w-7 h-7 text-accent mb-4" />
            <h2 className="font-display text-2xl mb-2">{s.t}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-navy text-cream py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={studio} alt="Creative studio session" loading="lazy" width={1600} height={1000} className="rounded-2xl aspect-[4/3] object-cover w-full" />
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">Supporting capability</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Travel & Logistics</h2>
            <p className="text-cream/80 text-lg mb-8">
              Strategic travel and logistics support for artists, executives, productions and cultural events.
            </p>
            <Link to="/travel" className="inline-flex items-center gap-2 text-accent">See how it works <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <section className="container-x py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-balance max-w-2xl mx-auto">Let's build something that matters.</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 h-12 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">
          Start a conversation <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="sr-only"><Plane className="w-4 h-4" /></p>
      </section>
    </div>
  );
}

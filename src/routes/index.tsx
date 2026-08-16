import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Radio, CalendarDays, Sparkles } from "lucide-react";
import afroHero from "@/assets/afro-hero.jpg";
import pillarArtists from "@/assets/pillar-artists.jpg";
import pillarMedia from "@/assets/pillar-media.jpg";
import pillarEvents from "@/assets/pillar-events.jpg";
import pillarBrands from "@/assets/pillar-brands.jpg";
import architecture from "@/assets/afro-architecture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "13KULTURE — Creative Culture Company" },
      { name: "description", content: "13KULTURE builds platforms, partnerships and opportunities for African creativity — connecting artists, media, brands, events and cultural platforms." },
      { property: "og:title", content: "13KULTURE — Creative Culture Company" },
      { property: "og:description", content: "Building platforms, partnerships and opportunities for African creativity." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  { icon: Users, t: "Artists", d: "Artist development, collaborations, opportunities and strategic positioning.", img: pillarArtists, href: "/artists" },
  { icon: Radio, t: "Media", d: "Broadcast distribution, PR, media placement and creative coverage.", img: pillarMedia, href: "/media" },
  { icon: CalendarDays, t: "Events", d: "Festival, event and cultural partnership opportunities.", img: pillarEvents, href: "/partnerships" },
  { icon: Sparkles, t: "Brands", d: "Creative campaigns, partnerships and cultural activations.", img: pillarBrands, href: "/partnerships" },
] as const;

const capabilities = [
  { t: "Artist Development", d: "Positioning, roll-outs and creative direction for talent with something to say." },
  { t: "Media & PR", d: "Press strategy, publicity and placement across the platforms that matter." },
  { t: "Creative Production", d: "Photography, videography and campaign production built for culture." },
  { t: "Cultural Partnerships", d: "Bringing brands, artists and platforms together around shared audiences." },
  { t: "Events & Experiences", d: "Festival programming, event partnerships and cultural experiences." },
  { t: "Broadcast & Distribution", d: "TV, radio and digital distribution tailored to campaign objectives." },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden">
        <img
          src={afroHero}
          alt="African creatives on a Lagos rooftop at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/95" />
        <div className="absolute inset-0 container-x flex flex-col justify-end pb-20 md:pb-28">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-6 animate-fade-in">13KULTURE</p>
          <h1 className="font-display text-cream text-5xl md:text-7xl lg:text-8xl font-semibold max-w-5xl text-balance leading-[1.02]">
            Creative <span className="text-accent italic font-normal">Culture</span> Company
          </h1>
          <p className="mt-6 max-w-2xl text-cream/85 text-lg">
            Building platforms, partnerships and opportunities for African creativity.
          </p>
          <p className="mt-3 max-w-2xl text-cream/65">
            Connecting artists, media, brands, events and cultural platforms to create meaningful opportunities, amplify talent and shape lasting cultural impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">
              Work With 13KULTURE <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/work" className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-cream/40 text-cream hover:bg-card/10 transition">
              Explore Our Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-y border-border bg-card">
        <div className="container-x py-12 text-center">
          <p className="font-display text-2xl md:text-3xl text-balance">
            Building Africa's next creative network. <span className="text-accent italic">A connected ecosystem for African creativity.</span>
          </p>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">The ecosystem</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-2xl text-balance">Where Culture Connects</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            We build meaningful connections between the people, platforms and businesses shaping African culture.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <Link key={p.t} to={p.href} className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent transition">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6">
                <p.icon className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-display text-2xl mb-2 uppercase tracking-wide">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-navy text-cream py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">What we do</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-2xl">One Culture. <span className="italic text-accent">Many Possibilities.</span></h2>
            </div>
            <Link to="/services" className="text-accent inline-flex items-center gap-2 text-sm">All services <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.t} className="p-8 rounded-2xl border border-cream/10 hover:border-accent/50 transition">
                <h3 className="font-display text-2xl mb-2">{c.t}</h3>
                <p className="text-sm text-cream/70 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="container-x py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={architecture} alt="Contemporary African architecture with textile-inspired screen facade" loading="lazy" width={1600} height={1008} className="rounded-2xl w-full aspect-[4/5] object-cover" />
          <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block">
            <p className="font-display text-lg leading-tight">Documenting Culture. Creating Legacy.</p>
          </div>
        </div>
        <div>
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-3">About 13KULTURE</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-balance">We don't just document culture. We help build what comes next.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            13KULTURE is a Creative Culture Company building meaningful connections between African talent, media, brands, events and cultural platforms.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We identify opportunities, develop creative partnerships and create platforms that help talent and businesses move further.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-accent">Read our story <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-foreground text-background p-12 md:p-20 text-center">
          <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto text-balance">
            Let's build something that matters.
          </h2>
          <p className="mt-6 text-background/70 max-w-xl mx-auto">
            Whether you're an artist, brand, media platform, event organiser or cultural organisation, tell us what you're building.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-10 h-12 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

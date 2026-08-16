import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import studio from "@/assets/studio-culture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 13KULTURE Creative Culture Company" },
      { name: "description", content: "13KULTURE is a Creative Culture Company building meaningful connections between African talent, media, brands, events and cultural platforms." },
      { property: "og:title", content: "About — 13KULTURE" },
      { property: "og:description", content: "We don't just document culture. We help build what comes next." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="container-x py-24 md:py-32">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">About 13KULTURE</p>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl text-balance leading-[1.05]">
          A Creative Culture Company. <span className="italic text-accent">Built for what comes next.</span>
        </h1>
        <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            13KULTURE is a Creative Culture Company building meaningful connections between African talent, media, brands, events and cultural platforms.
          </p>
          <p>
            We identify opportunities, develop creative partnerships and create platforms that help talent and businesses move further.
          </p>
          <p>
            From artist collaborations and media distribution to cultural events, creative campaigns and strategic partnerships, we work across the ecosystem to turn creativity into opportunity and opportunity into lasting value.
          </p>
          <p className="text-foreground font-display text-2xl md:text-3xl">
            We don't just document culture. We help build what comes next.
          </p>
        </div>
      </section>

      <section className="relative">
        <img src={studio} alt="African creative studio at work" loading="lazy" width={1600} height={1000} className="w-full h-[60vh] object-cover" />
      </section>

      <section className="container-x py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-display text-3xl mb-4">What we believe</h2>
            <p className="text-muted-foreground">Culture moves further when the right people move together. Our work is about connection, not just coverage.</p>
          </div>
          <div>
            <h2 className="font-display text-3xl mb-4">How we work</h2>
            <p className="text-muted-foreground">We sit between talent, media, brands and events — finding the opportunity, then building the partnership that makes it real.</p>
          </div>
          <div>
            <h2 className="font-display text-3xl mb-4">Where we're going</h2>
            <p className="text-muted-foreground">Growing a connected ecosystem for African creativity, from Lagos outward.</p>
          </div>
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-card p-12 text-center">
          <p className="font-display text-3xl md:text-4xl text-balance">
            Documenting Culture. <span className="italic text-accent">Creating Legacy.</span>
          </p>
          <p className="mt-4 text-muted-foreground">Our founding statement — still the standard we hold every project to.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 h-12 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

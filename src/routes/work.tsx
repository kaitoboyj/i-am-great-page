import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import mediaShoot from "@/assets/media-shoot.jpg";
import editing from "@/assets/editing.jpg";
import pillarEvents from "@/assets/pillar-events.jpg";
import pillarBrands from "@/assets/pillar-brands.jpg";
import pillarArtists from "@/assets/pillar-artists.jpg";
import studio from "@/assets/studio-culture.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — 13KULTURE" },
      { name: "description", content: "Selected creative work from 13KULTURE across music, fashion, events, media campaigns and cultural partnerships." },
      { property: "og:title", content: "Work — 13KULTURE" },
      { property: "og:description", content: "Selected work across music, fashion, events and cultural campaigns." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

const projects = [
  { t: "AYO KAYO — On Tour", k: "Music · Tour film", img: mediaShoot },
  { t: "Capsule launch · MARQUE", k: "Fashion · Campaign", img: editing },
  { t: "Palm Wine Sessions", k: "Events · Live coverage", img: pillarEvents },
  { t: "Brand activation · Lagos", k: "Brands · Cultural activation", img: pillarBrands },
  { t: "Artist roll-out programme", k: "Artists · Development", img: pillarArtists },
  { t: "Studio series", k: "Creative production", img: studio },
];

function Work() {
  return (
    <div>
      <section className="container-x py-24 md:py-32">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Work</p>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl text-balance leading-[1.05]">
          Selected work from across <span className="italic text-accent">the ecosystem.</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
          Music, fashion, events, campaigns and partnerships — the projects behind the positioning.
        </p>
      </section>

      <section className="container-x pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <figure key={p.t} className="relative overflow-hidden rounded-2xl group">
            <img src={p.img} alt={p.t} loading="lazy" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
            <figcaption className="absolute bottom-5 left-5 right-5 text-cream">
              <p className="text-xs uppercase tracking-widest text-accent">{p.k}</p>
              <p className="font-display text-2xl">{p.t}</p>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="container-x pb-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-balance max-w-2xl mx-auto">Let's build something that matters.</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 mt-8 h-12 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">
          Start a conversation <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

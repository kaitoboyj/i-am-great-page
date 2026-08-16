import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Music2, MapPin } from "lucide-react";
import pillarArtists from "@/assets/pillar-artists.jpg";
import pillarEvents from "@/assets/pillar-events.jpg";
import pillarBrands from "@/assets/pillar-brands.jpg";
import pillarMedia from "@/assets/pillar-media.jpg";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — 13KULTURE" },
      { name: "description", content: "Talent with something to say. Culture with somewhere to go. Meet the artists 13KULTURE develops, represents and collaborates with." },
      { property: "og:title", content: "Artists — 13KULTURE" },
      { property: "og:description", content: "Talent with something to say. Culture with somewhere to go." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/artists" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/artists" }],
  }),
  component: Artists,
});

const artists = [
  {
    name: "AYO KAYO",
    genre: "Afrobeats / Alté",
    location: "Lagos, Nigeria",
    bio: "A songwriter working between Afrobeats and alté, building a catalogue around memory, movement and the city.",
    work: "Tour film · On Tour (2025)",
    img: pillarArtists,
  },
  {
    name: "NNEKA OSA",
    genre: "Soul / Highlife",
    location: "Enugu, Nigeria",
    bio: "Vocalist and bandleader reworking highlife arrangements for a new live audience across West Africa.",
    work: "Live session · Palm Wine Sessions",
    img: pillarEvents,
  },
  {
    name: "STUDIO MARQUE",
    genre: "Fashion / Creative Direction",
    location: "Accra, Ghana",
    bio: "A design studio building campaign worlds for African labels, from lookbooks to full brand identity.",
    work: "Capsule launch · MARQUE",
    img: pillarBrands,
  },
  {
    name: "TOBI ADEYEMI",
    genre: "Film / Documentary",
    location: "Johannesburg, South Africa",
    bio: "Director documenting nightlife, music scenes and the people building them across the continent.",
    work: "Short doc · After Hours",
    img: pillarMedia,
  },
];

const WHATSAPP = "https://wa.me/2349169606650?text=";

function Artists() {
  return (
    <div>
      <section className="container-x py-24 md:py-32">
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Artists</p>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl text-balance leading-[1.05]">
          Talent with something to say. <span className="italic text-accent">Culture with somewhere to go.</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
          We develop, position and connect artists across music, film, fashion and creative direction.
        </p>
      </section>

      <section className="container-x pb-24 grid md:grid-cols-2 gap-8">
        {artists.map((a) => (
          <article key={a.name} className="rounded-2xl overflow-hidden border border-border bg-card hover:border-accent transition">
            <img src={a.img} alt={a.name} loading="lazy" width={1024} height={1280} className="w-full aspect-[4/3] object-cover" />
            <div className="p-8">
              <h2 className="font-display text-3xl mb-1">{a.name}</h2>
              <p className="text-sm text-accent mb-1">{a.genre}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mb-4"><MapPin className="w-3 h-3" /> {a.location}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{a.bio}</p>
              <p className="text-sm mb-6"><span className="text-muted-foreground">Selected work · </span>{a.work}</p>
              <div className="flex items-center gap-4">
                <a
                  href={WHATSAPP + encodeURIComponent(`Hello 13KULTURE, I'd like to book or collaborate with ${a.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition"
                >
                  Book / Collaborate <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label={`${a.name} on Instagram`} className="text-muted-foreground hover:text-accent"><Instagram className="w-5 h-5" /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label={`${a.name} on TikTok`} className="text-muted-foreground hover:text-accent"><Music2 className="w-5 h-5" /></a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-navy text-cream py-24">
        <div className="container-x text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4 text-balance">Are you building something?</h2>
          <p className="text-cream/70 max-w-xl mx-auto">We're always listening for new talent to develop and connect across the ecosystem.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 h-12 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

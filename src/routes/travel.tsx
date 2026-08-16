import { createFileRoute } from "@tanstack/react-router";
import { Plane, Users, Truck, Check } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import heroJet from "@/assets/hero-jet.jpg";
import jetInterior from "@/assets/jet-interior.jpg";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Travel & Logistics — 13KULTURE" },
      { name: "description", content: "Strategic travel and logistics support for artists, executives, productions and cultural events." },
      { property: "og:title", content: "Travel & Logistics — 13KULTURE" },
      { property: "og:description", content: "Travel and logistics support for artists, productions and cultural events." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/travel" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/travel" }],
  }),
  component: Travel,
});

function Travel() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[440px]">
        <img src={heroJet} alt="Aircraft above the clouds at sunset" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy/95" />
        <div className="absolute inset-0 container-x flex flex-col justify-end pb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">Supporting capability</p>
          <h1 className="font-display text-cream text-5xl md:text-7xl max-w-4xl text-balance">Travel & <span className="italic text-accent">Logistics</span></h1>
          <p className="mt-6 text-cream/80 text-lg max-w-2xl">
            Strategic travel and logistics support for artists, executives, productions and cultural events.
          </p>
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-3 gap-8">
        {[
          { icon: Users, t: "Artist & Crew Movement", d: "Tour routing, crew travel and accommodation for artists on the road." },
          { icon: Truck, t: "Production Logistics", d: "Equipment movement, shoot schedules and on-ground coordination for productions." },
          { icon: Plane, t: "Executive & Event Travel", d: "Flights and transfers for executives, delegations and cultural event partners." },
        ].map((s) => (
          <div key={s.t} className="p-8 rounded-2xl border border-border bg-card">
            <s.icon className="w-7 h-7 text-accent mb-4" />
            <h2 className="font-display text-2xl mb-2">{s.t}</h2>
            <p className="text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-navy text-cream py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={jetInterior} alt="Aircraft cabin interior" loading="lazy" className="rounded-2xl aspect-[4/3] object-cover w-full" />
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Logistics that keep the work moving.</h2>
            <p className="text-cream/80 mb-8 text-lg">Travel is a supporting capability inside our ecosystem — it exists so campaigns, tours and shoots land on time.</p>
            <ul className="space-y-3">
              {["Tour and festival routing", "Crew and talent travel management", "Production equipment logistics", "Ground transfers and on-site coordination", "Visa and documentation support"].map((b) => (
                <li key={b} className="flex gap-3 items-start"><Check className="w-5 h-5 text-accent shrink-0 mt-1" /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Plan a movement</h2>
          <p className="text-muted-foreground">Tell us about the tour, shoot or event and we'll build the logistics around it.</p>
        </div>
        <InquiryForm defaultService="Travel & Logistics" />
      </section>
    </div>
  );
}

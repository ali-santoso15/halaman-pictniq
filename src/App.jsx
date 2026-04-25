import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  ChevronDown,
  Compass,
  ExternalLink,
  Instagram,
  MapPin,
  Sparkles,
  Ticket,
  Timer,
  WandSparkles,
} from "lucide-react";
import { heroSpoilerVideo, heroVideo, spots, visitInfo } from "@/data/spots";
import { MetaRow } from "@/components/meta-row";
import { SpotCard } from "@/components/spot-card";
import { SpotDialog } from "@/components/spot-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const experienceCards = [
  {
    icon: Camera,
    title: "Keluarga",
    description: "Nikmati waktu bersama keluarga dengan nuansa senang.",
  },
  {
    icon: Sparkles,
    title: "Teman Teman",
    description: "Nikmati semua game yang ada dan sensasi asiknya.",
  },
  {
    icon: WandSparkles,
    title: "Semua Event",
    description: "Semua acara jadi satu tempat. Mudah, cepat, dan menyenangkan.",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/pictniq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "@pictniq",
    Icon: InstagramIcon,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@pictniq?is_from_webapp=1&sender_device=pc",
    label: "@pictniq",
    Icon: TikTokIcon,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me",
    label: "Chat via WhatsApp",
    Icon: WhatsAppIcon,
  },
  {
    name: "X",
    href: "https://x.com/pictniq?s=20",
    label: "@pictniq",
    Icon: XSocialIcon,
  },
];

const wahanaCards = [
  {
    id: "wahana-1",
    accent: "from-cyan-400/40 via-sky-500/20 to-transparent",
  },
  {
    id: "wahana-2",
    accent: "from-amber-300/35 via-yellow-500/20 to-transparent",
  },
  {
    id: "wahana-3",
    accent: "from-orange-300/30 via-rose-400/20 to-transparent",
  },
  {
    id: "wahana-4",
    accent: "from-blue-400/35 via-fuchsia-400/15 to-transparent",
  },
  {
    id: "wahana-5",
    accent: "from-red-400/35 via-orange-500/15 to-transparent",
  },
];

function App() {
  const [selectedSpot, setSelectedSpot] = useState(spots[0]);
  const [selectedWahana, setSelectedWahana] = useState(wahanaCards[0]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeCaptionLang, setActiveCaptionLang] = useState("id");
  const [copiedCaption, setCopiedCaption] = useState("");
  const [whatsAppMenuOpen, setWhatsAppMenuOpen] = useState(false);

  const selectSpot = (spot) => {
    setSelectedSpot(spot);
    setActiveCaptionLang("id");
  };

  const openSpotDialog = (spot) => {
    setSelectedSpot(spot);
    setDialogOpen(true);
    setActiveCaptionLang("id");
  };

  const copyCaption = async (caption) => {
    try {
      await navigator.clipboard.writeText(caption);
      setCopiedCaption(caption);
      window.setTimeout(() => setCopiedCaption(""), 1800);
    } catch {
      setCopiedCaption("");
    }
  };

  const shareSpot = async (spot) => {
    const shareData = {
      title: `${spot.name} - PICTNIQ`,
      text: `${spot.name} | ${spot.description}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
      setCopiedCaption("share");
      window.setTimeout(() => setCopiedCaption(""), 1800);
    } catch {
      setCopiedCaption("");
    }
  };

  return (
    <div className="min-h-screen bg-[#050608] text-white">
      <header className="fixed inset-x-0 top-0 z-40 bg-transparent">
        <div className="container flex items-start justify-between py-3 md:py-4">
          <a href="#journey" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center overflow-hidden rounded-full border border-cyan-300/30 bg-white shadow-glow md:size-11">
              <img
                src="/logo-pictniq.jpg"
                alt="PICTNIQ logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-display text-lg font-bold uppercase tracking-[0.28em] text-white">
                PICTNIQ
              </p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/55 sm:text-xs">
                #KELILING DUNIA SATU HARI
              </p>
            </div>
          </a>
        </div>
      </header>

      <main>
        <section
          id="journey"
          className="relative isolate overflow-hidden pb-16 pt-16 md:pb-20 md:pt-[72px]"
        >
          <div className="absolute inset-0 bg-grain opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(93,201,255,0.16),transparent_35%),radial-gradient(circle_at_bottom,rgba(214,180,102,0.18),transparent_30%)]" />
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.35),rgba(5,6,8,0.75)_55%,#050608_100%)]" />

          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-full overflow-hidden border-y border-white/10 bg-black/30 shadow-glow">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={heroSpoilerVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,12,0.22),rgba(4,8,12,0.68)_45%,rgba(5,6,8,0.96)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(93,201,255,0.26),transparent_24%),radial-gradient(circle_at_bottom,rgba(214,180,102,0.18),transparent_24%)]" />

                <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-12 sm:px-10 md:min-h-[560px] md:px-12">
                  <div className="max-w-5xl space-y-4">
                    <h1 className="mx-auto max-w-4xl font-body text-xl font-medium leading-[1.35] tracking-[0.02em] text-white sm:text-2xl md:text-[2.1rem] lg:text-[2.35rem]">
                      Step into a world of pictorial wonder
                      <br />
                      where every corner feels unique.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container pb-20 md:pb-24">
          <div className="grid gap-5 lg:grid-cols-3">
            {experienceCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className="h-full border-white/10 bg-white/[0.03]">
                    <CardContent className="p-5">
                      <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="size-5 text-cyan-200" />
                      </div>
                      <h3 className="font-display text-[1.6rem] font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/66">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="spots" className="container pb-20 md:pb-24">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl space-y-4">
              <Badge>Explore Spots</Badge>
              <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                Spot spot yang harus kamu tahu
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] xl:grid-cols-[0.74fr_1.26fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {spots.map((spot, index) => (
                <SpotCard
                  key={spot.id}
                  spot={spot}
                  index={index}
                  selected={selectedSpot.id === spot.id}
                  prototype
                  onOpen={() => selectSpot(spot)}
                />
              ))}
            </div>

            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090b10] shadow-glow lg:aspect-[4/5]">
                <div className={cn("absolute inset-0 bg-gradient-to-br", selectedSpot.accent)} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_25%),linear-gradient(180deg,rgba(4,8,12,0.18),rgba(4,8,12,0.96))]" />

                <div className="relative flex h-full items-center justify-center p-4 md:p-5">
                  <p className="font-display text-3xl font-bold text-white md:text-4xl">
                    View Spot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="wahana" className="container pb-20 md:pb-24">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl space-y-4">
              <Badge>List Wahana</Badge>
              <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                Wahana yang bisa kamu tampilkan
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.78fr_1.22fr] xl:grid-cols-[0.74fr_1.26fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {wahanaCards.map((wahana, index) => (
                <SpotCard
                  key={wahana.id}
                  spot={wahana}
                  index={index}
                  selected={selectedWahana.id === wahana.id}
                  prototype
                  prototypeText="Yours Wahana"
                  onOpen={() => setSelectedWahana(wahana)}
                />
              ))}
            </div>

            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090b10] shadow-glow lg:aspect-[4/5]">
                <div className={cn("absolute inset-0 bg-gradient-to-br", selectedWahana.accent)} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_25%),linear-gradient(180deg,rgba(4,8,12,0.18),rgba(4,8,12,0.96))]" />

                <div className="relative flex h-full items-center justify-center p-4 md:p-5">
                  <p className="font-display text-3xl font-bold text-white md:text-4xl">
                    View Wahana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="container pb-20 md:pb-24">
          <div className="mb-10 max-w-3xl space-y-4">
            <Badge>Visit Info</Badge>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Intip jam buka kami
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="border-white/10 bg-white/[0.03]">
              <CardContent className="space-y-5 p-6">
                <MetaRow icon={Timer} label="Jam operasional" value={visitInfo.hours} />
                <MetaRow icon={Ticket} label="Tiket masuk" value={visitInfo.tickets} />
                <MetaRow icon={MapPin} label="Lokasi" value={visitInfo.locationLabel} />
                <Button
                  variant="gold"
                  className="w-full"
                  onClick={() => window.open(visitInfo.mapUrl, "_blank")}
                >
                  Buka di Google Maps
                  <ExternalLink className="size-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-cyan-300/10 bg-white/[0.03]">
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0c1116] p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,201,255,0.2),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />
                  <div className="relative">
                    <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(160deg,#0a1320,#06090d)] p-5">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">Social Info</p>
                      <div className="mt-5 space-y-4">
                        {socialLinks.map((item) => {
                          const Icon = item.Icon;
                          if (item.name === "WhatsApp") {
                            return (
                              <div key={item.name} className="space-y-3">
                                <button
                                  type="button"
                                  onClick={() => setWhatsAppMenuOpen((value) => !value)}
                                  className="flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-cyan-300/20 hover:bg-white/[0.05]"
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                                      <Icon className="size-5 text-cyan-200" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-white">{item.name}</p>
                                      <p className="text-xs text-white/55">Pilih nomor yang ingin dihubungi</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-cyan-200">
                                    <span>Open options</span>
                                    <ChevronDown
                                      className={cn(
                                        "size-4 transition-transform duration-300",
                                        whatsAppMenuOpen ? "rotate-180" : "",
                                      )}
                                    />
                                  </div>
                                </button>

                                {whatsAppMenuOpen ? (
                                  <div className="grid gap-3 pl-2">
                                    <a
                                      href="https://wa.me/6282311118807"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-cyan-300/20 hover:bg-white/[0.05]"
                                    >
                                      <div>
                                        <p className="text-sm font-semibold text-white">Customer Service</p>
                                        <p className="text-xs text-white/55">+62 823-1111-8807</p>
                                      </div>
                                      <ExternalLink className="size-4 text-cyan-200" />
                                    </a>
                                    <a
                                      href="https://wa.me/6283857965627"
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-cyan-300/20 hover:bg-white/[0.05]"
                                    >
                                      <div>
                                        <p className="text-sm font-semibold text-white">
                                          Agen & Rombongan
                                        </p>
                                        <p className="text-xs text-white/55">+62 838-5796-5627</p>
                                      </div>
                                      <ExternalLink className="size-4 text-cyan-200" />
                                    </a>
                                  </div>
                                ) : null}
                              </div>
                            );
                          }

                          return (
                            <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/20 hover:bg-white/[0.05]"
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                                  <Icon className="size-5 text-cyan-200" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-white">{item.name}</p>
                                  <p className="text-xs text-white/55">{item.label}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-cyan-200">
                                <span>Open link</span>
                                <ExternalLink className="size-4" />
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>PICTNIQ frontend concept built with React, Tailwind CSS, and shadcn-style UI.</p>
          <p>Ready for real assets, API hookup, and SEO layer if you want to continue.</p>
        </div>
      </footer>

      <SpotDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        selectedSpot={selectedSpot}
        activeCaptionLang={activeCaptionLang}
        setActiveCaptionLang={setActiveCaptionLang}
        copiedCaption={copiedCaption}
        copyCaption={copyCaption}
        shareSpot={shareSpot}
      />
    </div>
  );
}

export default App;

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M14 4v8.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 4c1 1.8 2.3 3 4.5 3.3" />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M20 11.5A8.5 8.5 0 0 1 7.6 19l-3.6 1 1.1-3.4A8.5 8.5 0 1 1 20 11.5Z" />
      <path d="M9.2 8.8c.3-.6.6-.6.9-.6h.4c.2 0 .4 0 .6.5l.6 1.5c.1.3.1.5-.1.8l-.4.5c-.1.1-.2.3 0 .5.3.6.9 1.3 1.6 1.8.8.6 1.4.8 1.9.9.2.1.4 0 .5-.1l.6-.7c.2-.2.5-.3.8-.2l1.5.7c.2.1.4.2.4.5v.5c0 .4-.2.7-.5.9-.4.3-.9.5-1.5.5-.9 0-2.1-.3-3.6-1.2-1.3-.8-2.5-2-3.2-3.3-.9-1.5-1.2-2.8-1.2-3.7 0-.6.2-1.1.5-1.5Z" />
    </svg>
  );
}

function XSocialIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 4l16 16" />
      <path d="M16.5 4H20l-5.5 6.3L20 20h-4l-4.2-5.3L7.2 20H4l6-6.8L4 4h4l3.9 4.9L16.5 4Z" />
    </svg>
  );
}

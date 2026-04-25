import { Copy, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function SpotDialog({
  open,
  onOpenChange,
  selectedSpot,
  activeCaptionLang,
  setActiveCaptionLang,
  copiedCaption,
  copyCaption,
  shareSpot,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div className="grid max-h-[90vh] overflow-auto lg:grid-cols-[1fr_0.95fr]">
        <div className="relative min-h-[320px] border-b border-white/10 p-6 lg:min-h-full lg:border-b-0 lg:border-r">
          <div className={cn("absolute inset-0 bg-gradient-to-br", selectedSpot.accent)} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,rgba(3,7,12,0.15),rgba(3,7,12,0.94))]" />
          <div className="relative flex h-full flex-col justify-between gap-8">
            <div>
              <Badge>{selectedSpot.label}</Badge>
              <h3 className="mt-4 max-w-lg font-display text-4xl font-bold text-white md:text-5xl">
                {selectedSpot.name}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/72">
                {selectedSpot.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {selectedSpot.angles.map((angle) => (
                <div key={angle.title} className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-white/42">{angle.format}</p>
                  <p className="mt-3 font-display text-lg font-bold text-white">{angle.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{angle.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-white/10 bg-white/[0.03]">
                <CardContent className="p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">Lighting info</p>
                  <p className="mt-3 font-display text-xl font-bold text-white">{selectedSpot.bestTime}</p>
                  <p className="mt-2 text-sm leading-7 text-white/65">{selectedSpot.lighting}</p>
                </CardContent>
              </Card>

              <Card className="border-white/10 bg-white/[0.03]">
                <CardContent className="p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">Mood</p>
                  <p className="mt-3 font-display text-xl font-bold text-white">{selectedSpot.mood}</p>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Pakai blok ini untuk memperjelas tone visual sebelum pengguna datang.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-cyan-300/10 bg-white/[0.03]">
              <CardHeader className="pb-4">
                <CardTitle>Quick-copy captions</CardTitle>
                <CardDescription>
                  Satu klik untuk menyalin caption dalam bahasa Indonesia atau Inggris.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <button
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition",
                      activeCaptionLang === "id"
                        ? "bg-white text-black"
                        : "bg-white/5 text-white/65 hover:bg-white/10",
                    )}
                    onClick={() => setActiveCaptionLang("id")}
                  >
                    Bahasa Indonesia
                  </button>
                  <button
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition",
                      activeCaptionLang === "en"
                        ? "bg-white text-black"
                        : "bg-white/5 text-white/65 hover:bg-white/10",
                    )}
                    onClick={() => setActiveCaptionLang("en")}
                  >
                    English
                  </button>
                </div>

                <div className="grid gap-3">
                  {selectedSpot.captions[activeCaptionLang].map((caption) => (
                    <button
                      key={caption}
                      className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-white/20 hover:bg-white/[0.06]"
                      onClick={() => copyCaption(caption)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm leading-7 text-white/78">{caption}</p>
                        <Copy className="mt-1 size-4 shrink-0 text-white/45" />
                      </div>
                    </button>
                  ))}
                </div>

                {copiedCaption ? (
                  <p className="text-sm text-cyan-200">
                    {copiedCaption === "share" ? "Link spot berhasil disalin." : "Caption berhasil disalin."}
                  </p>
                ) : null}
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/[0.03]">
              <CardHeader className="pb-4">
                <CardTitle>Creator notes</CardTitle>
                <CardDescription>
                  Rekomendasi singkat yang bisa dipakai sebagai konten helper atau checklist.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {selectedSpot.tips.map((tip) => (
                  <div key={tip} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <p className="text-sm leading-7 text-white/68">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="flex-1" onClick={() => shareSpot(selectedSpot)}>
                <Instagram className="size-4" />
                Share to Story
              </Button>
              <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
                Continue Exploring
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SpotCard({
  spot,
  onOpen,
  index,
  selected = false,
  prototype = false,
  prototypeText = "Yours Spot",
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className={cn(
        "group relative min-h-[112px] overflow-hidden rounded-[22px] border text-left transition duration-300 sm:min-h-[132px] sm:rounded-[26px] md:min-h-[140px] lg:min-h-[158px]",
        selected
          ? "border-cyan-300/35 shadow-glow"
          : "border-white/10 hover:border-white/20",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]",
      )}
      onClick={onOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition duration-500 group-hover:scale-105",
          spot.accent,
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_22%),linear-gradient(180deg,rgba(3,7,12,0.2),rgba(3,7,12,0.9))]" />
      <div className="relative flex h-full flex-col justify-between p-3.5 sm:p-4 lg:p-[18px]">
        {prototype ? (
          <div className="flex h-full items-center justify-center">
            <p className="font-display text-[1.05rem] font-bold text-white sm:text-[1.3rem] md:text-[1.45rem] lg:text-[1.6rem]">
              {prototypeText}
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-4">
              <Badge className="bg-white/10 text-white/75">{spot.label}</Badge>
              <span className="text-xs uppercase tracking-[0.26em] text-white/38">{spot.bestTime}</span>
            </div>

            <div className="space-y-3">
              <div
                className={cn(
                  "inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/75",
                  selected ? spot.glow : "",
                )}
              >
                {selected ? "Selected Spot" : "Spot Detail"}
              </div>
              <div>
                <h3 className="font-display text-[1.3rem] font-bold text-white md:text-[1.4rem] lg:text-[1.55rem]">
                  {spot.name}
                </h3>
                <p className="mt-2 max-w-sm text-[11px] leading-5 text-white/66 md:text-[12px]">
                  {spot.description}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.button>
  );
}

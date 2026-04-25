import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Dialog({ open, onOpenChange, children }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 backdrop-blur-md md:items-center"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0f] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute right-4 top-4 z-10">
              <Button variant="outline" size="icon" onClick={() => onOpenChange(false)}>
                <X className="size-4" />
              </Button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

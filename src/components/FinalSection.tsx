import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Bouquet3D from "@/components/Bouquet3D";

const FinalSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-32 md:py-44 px-6 flex items-center justify-center overflow-hidden">
      {/* Animated glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px] animate-glow-pulse" />
      </div>

      <div className="relative text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif-alt text-2xl md:text-4xl lg:text-5xl text-foreground/90 leading-snug italic"
        >
          Almost 4 years…
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-display text-3xl md:text-5xl lg:text-6xl text-primary rose-glow mt-4 md:mt-6"
        >
          and I still choose you every day.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10"
        >
          <span className="text-4xl">❤️</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12"
        >
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-serif-alt rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Open it My Love,
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle className="text-2xl font-display text-primary">
                  For You, My Love 💖
                </DialogTitle>
                <DialogDescription className="text-base">
                  A bouquet that never wilts, just like my love for you
                </DialogDescription>
              </DialogHeader>
              <div className="w-full" style={{ height: '500px' }}>
                <Bouquet3D />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;

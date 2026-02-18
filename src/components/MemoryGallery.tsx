import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import image7 from "@/assets/image7.jpg";

const images = [
  { src: image1, alt: "Night walks together", span: "row-span-2" },
  { src: image2, alt: "Candlelit moments", span: "" },
  { src: image3, alt: "Watching sunsets", span: "" },
  { src: image4, alt: "Dancing under lights", span: "row-span-2" },
  { src: image5, alt: "Coffee and rain", span: "" },
  { src: image6, alt: "Under the blossoms", span: "" },
  { src: image7, alt: "Together always", span: "" },
];

const MemoryGallery = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-display text-center mb-16 text-foreground"
      >
        Moments We Made
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`relative rounded-lg overflow-hidden group cursor-pointer ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover gallery-image"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGallery;

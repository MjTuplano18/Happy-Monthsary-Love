import { motion } from "framer-motion";
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";
import video3 from "@/assets/video3.mp4";
import video4 from "@/assets/video4.mp4";
import video5 from "@/assets/video5.mp4";
import video6 from "@/assets/video6.mp4";
import video7 from "@/assets/video7.mp4";

const moments = [
  {
    date: "Most Happy Moment",
    title: "So Happy with you",
    description: "The universe conspired to bring two souls together. A moment that would change everything.",
    video: video1,
  },
  {
    date: "The First Year",
    title: "Learning Each Other's Language",
    description: "Every laugh, every silence, every stolen glance — we were writing our own love story.",
    video: video2,
  },
  {
    date: "Through the Years",
    title: "Growing Together",
    description: "We danced through storms and sunsets. Every chapter made us stronger, deeper, more us.",
    video: video3,
  },
  {
    date: "Ramen with Mochi",
    title: "Our Monthsary eating with Ramen",
    description: "Half a hundred months. Thousands of moments. One infinite love.",
    video: video4,
  },
  {
    date: "Our Adventures",
    title: "Places We Explored",
    description: "Every road we took, every place we visited — it was always better because you were there.",
    video: video6,
  },
  {
    date: "Little Things",
    title: "The Everyday Magic",
    description: "It wasn't the grand gestures — it was the quiet, ordinary moments that meant everything.",
    video: video5,
  },
  {
    date: "Always & Forever",
    title: "Us, Endlessly",
    description: "No matter what comes next, I know one thing for certain — I choose you, every single time.",
    video: video7,
  },
];

const StoryTimeline = () => {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-display text-center mb-20 text-foreground"
      >
        Our Moments
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />

        {moments.map((moment, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`relative flex items-start mb-16 md:mb-20 ${
              i % 2 === 0
                ? "md:flex-row md:text-right"
                : "md:flex-row-reverse md:text-left"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full timeline-dot z-10 mt-2" />

            {/* Content */}
            <div
              className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:pr-12" : "md:pl-12"
              }`}
            >
              <span className="text-sm font-serif-alt text-primary/80 tracking-wider uppercase">
                {moment.date}
              </span>
              <h3 className="text-xl md:text-2xl font-display text-foreground mt-1 mb-3">
                {moment.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {moment.description}
              </p>

              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 rounded-lg overflow-hidden"
              >
                <video
                  src={moment.video}
                  className="w-full h-48 md:h-56 object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StoryTimeline;

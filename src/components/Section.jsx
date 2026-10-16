import { motion } from "motion/react";

// Shared wrapper: anchor id, numbered mono label, heading, fade-in on scroll.
const Section = ({ id, index, label, title, intro, children }) => (
  <section id={id} className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10 max-w-2xl"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        {index} / {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted leading-relaxed">{intro}</p>}
    </motion.div>
    {children}
  </section>
);

export default Section;

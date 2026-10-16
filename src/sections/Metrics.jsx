import { motion } from "motion/react";
import { metrics } from "@/data/profile";

const Metrics = () => (
  <div className="border-y border-line bg-surface">
    <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-5">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          className={`py-7 md:px-4 ${i === metrics.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
        >
          <dt className="sr-only">{m.label}</dt>
          <dd className="font-mono text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{m.value}</dd>
          <dd className="mt-1.5 text-sm leading-snug text-muted">{m.label}</dd>
        </motion.div>
      ))}
    </dl>
  </div>
);

export default Metrics;

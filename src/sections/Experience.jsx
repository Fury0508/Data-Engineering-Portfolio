import { motion } from "motion/react";
import Chip from "@/components/Chip";
import Section from "@/components/Section";
import { experience } from "@/data/profile";

const Experience = () => (
  <Section
    id="experience"
    index="02"
    label="Experience"
    title="Where I've built pipelines"
    intro="4+ years across retail, finance, telecoms and enterprise data migration."
  >
    <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
      {experience.map((job, i) => (
        <motion.li
          key={job.company}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: i * 0.03 }}
          className="relative"
        >
          <span
            className={`absolute -left-[31px] top-6 size-3 rounded-full border-2 border-bg sm:-left-[39px] ${
              job.current ? "bg-accent ring-4 ring-accent-soft" : "bg-line"
            }`}
            aria-hidden
          />
          <article className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">
                  {job.role} <span className="text-muted">·</span>{" "}
                  <span className="text-accent">{job.company}</span>
                </h3>
                {job.client && <p className="text-sm text-muted">Client: {job.client}</p>}
              </div>
              <p className="shrink-0 font-mono text-xs text-muted">
                {job.period} · {job.location}
              </p>
            </header>
            <ul className="mt-4 space-y-2.5">
              {job.points.map((pt) => (
                <li key={pt.slice(0, 32)} className="relative pl-4 text-[15px] leading-relaxed text-fg/80">
                  <span className="absolute left-0 top-[0.7em] size-1.5 rounded-full bg-accent/70" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {job.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </article>
        </motion.li>
      ))}
    </ol>
  </Section>
);

export default Experience;

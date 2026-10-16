import { motion } from "motion/react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import Chip from "@/components/Chip";
import FlowStrip from "@/components/FlowStrip";
import Section from "@/components/Section";
import { featuredProject as fp, projects } from "@/data/profile";

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const Projects = () => (
  <Section
    id="projects"
    index="03"
    label="Projects"
    title="Selected projects"
    intro="Personal and open-source work, with the architecture and the engineering decisions behind it."
  >
    <motion.article
      {...reveal}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl border border-line bg-surface"
    >
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Chip tone="accent">Featured · Lakehouse</Chip>
          <h3 className="mt-4 text-2xl font-bold tracking-tight">{fp.title}</h3>
          <p className="mt-3 leading-relaxed text-muted">{fp.tagline}</p>
          <div className="mt-6">
            <FlowStrip steps={fp.flow} />
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {fp.stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
          <a
            href={fp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            <FaGithub size={15} /> View the code
          </a>
        </div>
        <div className="rounded-xl border border-line bg-bg p-5">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">Design decisions</p>
          <ul className="space-y-3">
            {fp.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed text-fg/85">
                <FiCheck className="mt-1 shrink-0 text-accent" size={14} aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>

    <div className="mt-6 grid gap-6 md:grid-cols-3">
      {projects.map((p, i) => {
        const Wrapper = p.link ? "a" : "div";
        return (
          <motion.div key={p.title} {...reveal} transition={{ duration: 0.45, delay: i * 0.06 }}>
            <Wrapper
              {...(p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-fg/25"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{p.category}</p>
                {p.link && (
                  <FiArrowUpRight className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
              <div className="mt-5">
                <FlowStrip steps={p.flow} />
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </Wrapper>
          </motion.div>
        );
      })}
    </div>
  </Section>
);

export default Projects;

import { motion } from "motion/react";
import Section from "@/components/Section";
import { skills } from "@/data/profile";

const Skills = () => (
  <Section id="skills" index="04" label="Skills" title="Toolkit">
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((s, i) => (
        <motion.div
          key={s.group}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="bg-surface p-6"
        >
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">{s.group}</h3>
          <ul className="flex flex-wrap gap-2">
            {s.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line bg-bg px-2.5 py-1 text-sm text-fg/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Skills;

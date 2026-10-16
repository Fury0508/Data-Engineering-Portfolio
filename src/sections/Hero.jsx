import { motion } from "motion/react";
import { FiArrowDown, FiAward, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import PipelineDiagram from "@/components/PipelineDiagram";
import { profile } from "@/data/profile";

const fade = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
    <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:pb-24">
      <div>
        <motion.p {...fade(0)} className="mb-5 inline-flex items-center gap-2 font-mono text-xs text-muted">
          <FiMapPin size={12} className="text-accent" /> {profile.location}
        </motion.p>

        <motion.h1 {...fade(0.05)} className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {profile.name}
        </motion.h1>
        <motion.p {...fade(0.1)} className="mt-3 text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
          {profile.role}
        </motion.p>

        <motion.p {...fade(0.15)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {profile.headline}
        </motion.p>

        <motion.ul {...fade(0.2)} className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
          {profile.credentials.map((c) => (
            <li key={c} className="flex items-center gap-2 text-sm font-medium">
              <FiAward className="shrink-0 text-gold" size={15} /> {c}
            </li>
          ))}
        </motion.ul>

        <motion.div {...fade(0.25)} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
          >
            See my work <FiArrowDown size={15} />
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-fg/30"
          >
            <FiDownload size={15} /> Résumé
          </a>
          <div className="ml-1 flex items-center gap-1">
            {[
              { href: profile.links.github, label: "GitHub", Icon: FaGithub },
              { href: profile.links.linkedin, label: "LinkedIn", Icon: FaLinkedin },
              { href: `mailto:${profile.email}`, label: "Email", Icon: FiMail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div {...fade(0.15)}>
        <PipelineDiagram />
      </motion.div>
    </div>
  </section>
);

export default Hero;

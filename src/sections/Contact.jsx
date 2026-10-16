import { useState } from "react";
import { FiCalendar, FiCheck, FiCopy, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    { label: "LinkedIn", href: profile.links.linkedin, Icon: FaLinkedin },
    { label: "GitHub", href: profile.links.github, Icon: FaGithub },
    { label: "Book a 30-min call", href: profile.links.calendly, Icon: FiCalendar },
  ];

  return (
    <Section id="contact" index="06" label="Contact" title="Let's talk data.">
      <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Hiring for a data engineering role, or want to compare notes on Databricks, streaming or
          lakehouse design? I'd be glad to hear from you.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-w-0 items-center gap-3 rounded-lg bg-accent px-5 py-3 font-semibold text-accent-fg transition-opacity hover:opacity-90"
          >
            <FiMail className="shrink-0" size={17} />
            <span className="truncate">{profile.email}</span>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-3 text-sm font-medium transition-colors hover:border-fg/30"
          >
            {copied ? <FiCheck className="text-accent" /> : <FiCopy />}
            {copied ? "Copied" : "Copy email"}
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-6">
          {channels.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;

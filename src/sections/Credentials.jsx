import { FiAward, FiBookOpen } from "react-icons/fi";
import Section from "@/components/Section";
import { certifications, education } from "@/data/profile";

const Credentials = () => (
  <Section id="credentials" index="05" label="Credentials" title="Certifications & education">
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-muted">
          <FiAward className="text-gold" /> Certifications
        </h3>
        <ul className="space-y-3">
          {certifications.map((c) => (
            <li
              key={c.name}
              className="flex items-center justify-between gap-4 rounded-xl border border-line bg-surface p-4"
            >
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-muted">{c.issuer}</p>
              </div>
              {c.date && <span className="shrink-0 font-mono text-xs text-muted">{c.date}</span>}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-muted">
          <FiBookOpen className="text-accent" /> Education
        </h3>
        <ul className="space-y-3">
          {education.map((e) => (
            <li
              key={e.degree}
              className="flex items-center justify-between gap-4 rounded-xl border border-line bg-surface p-4"
            >
              <div>
                <p className="font-semibold">{e.degree}</p>
                <p className="text-sm text-muted">
                  {e.school}, {e.location}
                </p>
              </div>
              <span className="shrink-0 text-right font-mono text-xs text-muted">{e.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Credentials;

import Section from "@/components/Section";
import { profile } from "@/data/profile";

const About = () => (
  <Section id="about" index="01" label="About" title="Reliable data, delivered on time.">
    <div className="grid gap-10 md:grid-cols-[1fr_220px] md:items-start">
      <div className="max-w-2xl space-y-5 text-[17px] leading-relaxed text-fg/85">
        {profile.about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <figure className="order-first w-40 md:order-none md:w-full">
        <img
          src={profile.avatar}
          alt={`Illustrated portrait of ${profile.name}`}
          width="480"
          height="720"
          loading="lazy"
          className="aspect-[4/5] w-full rounded-2xl border border-line object-cover object-top"
        />
      </figure>
    </div>
  </Section>
);

export default About;

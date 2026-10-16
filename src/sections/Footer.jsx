import { profile } from "@/data/profile";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p>Built with React, Vite and Tailwind · deployed on Vercel</p>
    </div>
  </footer>
);

export default Footer;

const Chip = ({ children, tone = "default" }) => (
  <span
    className={
      tone === "accent"
        ? "inline-flex items-center rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] font-medium text-accent"
        : "inline-flex items-center rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
    }
  >
    {children}
  </span>
);

export default Chip;

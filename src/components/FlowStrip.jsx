import { FiArrowRight } from "react-icons/fi";

// Compact "a → b → c" architecture line used on project cards.
const FlowStrip = ({ steps }) => (
  <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-muted">
    {steps.map((step, i) => (
      <span key={step} className="flex items-center gap-1.5">
        <span className="rounded border border-line bg-bg px-1.5 py-0.5 text-fg/80">{step}</span>
        {i < steps.length - 1 && <FiArrowRight className="text-accent" size={11} aria-hidden />}
      </span>
    ))}
  </div>
);

export default FlowStrip;

import { motion } from "motion/react";
import { FiCheck, FiDatabase, FiDownload, FiLayers, FiBarChart2 } from "react-icons/fi";
import { pipelineStages } from "@/data/profile";

const stageStyle = {
  sources: { color: "var(--muted)", Icon: FiDatabase },
  ingest: { color: "var(--accent)", Icon: FiDownload },
  bronze: { color: "var(--bronze)", Icon: FiLayers },
  silver: { color: "var(--silver)", Icon: FiLayers },
  gold: { color: "var(--gold)", Icon: FiLayers },
  serve: { color: "var(--accent)", Icon: FiBarChart2 },
};

// A job-run style view of a medallion pipeline, with packets moving between stages.
const PipelineDiagram = () => (
  <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_40px_-24px_rgba(15,23,42,0.25)]">
    <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-xs">
      <span className="flex items-center gap-2 text-fg/80">
        <span className="pulse-dot size-2 rounded-full bg-accent" />
        lakehouse_pipeline
      </span>
      <span className="text-muted">medallion · incremental</span>
    </div>

    <ol className="px-4 py-3">
      {pipelineStages.map((stage, i) => {
        const { color, Icon } = stageStyle[stage.key];
        const last = i === pipelineStages.length - 1;
        return (
          <motion.li
            key={stage.key}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
            className="relative flex gap-3"
          >
            <div className="flex flex-col items-center">
              <span
                className="grid size-8 shrink-0 place-items-center rounded-lg border"
                style={{ color, borderColor: color, background: `color-mix(in srgb, ${color} 10%, transparent)` }}
              >
                <Icon size={14} />
              </span>
              {!last && (
                <span className="relative my-1 w-px flex-1 overflow-hidden bg-line">
                  <span
                    className="packet-y absolute left-0 top-0 h-1/4 w-px"
                    style={{ background: color, animationDelay: `${i * 0.4}s` }}
                  />
                </span>
              )}
            </div>
            <div className={`flex flex-1 items-start justify-between gap-3 ${last ? "" : "pb-3"}`}>
              <div className="pt-1">
                <p className="text-sm font-semibold leading-tight">{stage.label}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted">{stage.tools.join(" · ")}</p>
              </div>
              <FiCheck className="mt-1.5 shrink-0 text-accent" size={14} aria-hidden />
            </div>
          </motion.li>
        );
      })}
    </ol>
  </div>
);

export default PipelineDiagram;

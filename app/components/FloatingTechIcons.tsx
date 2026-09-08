import { LaravelIcon, NextIcon, NodeIcon, ReactIcon, TypeScriptIcon, VueIcon } from "./TechIcons";

const ICONS = [
  { Icon: VueIcon, className: "left-[4%] top-[12%] h-10 w-10 text-emerald-400/20", duration: "9s", delay: "0s", drift: "10px, -16px, -8deg" },
  { Icon: ReactIcon, className: "right-[6%] top-[18%] h-14 w-14 text-white/15", duration: "11s", delay: "1s", drift: "-14px, -10px, 10deg" },
  { Icon: NodeIcon, className: "left-[42%] top-[6%] h-8 w-8 text-emerald-400/15", duration: "8s", delay: "2s", drift: "8px, 14px, 6deg" },
  { Icon: NextIcon, className: "left-[8%] bottom-[10%] h-11 w-11 text-white/15", duration: "10s", delay: "0.5s", drift: "-10px, -14px, -6deg" },
  { Icon: LaravelIcon, className: "right-[8%] bottom-[14%] h-10 w-10 text-emerald-400/20", duration: "12s", delay: "1.5s", drift: "12px, 12px, 8deg" },
  { Icon: TypeScriptIcon, className: "right-[24%] top-[8%] h-8 w-8 text-white/10", duration: "9.5s", delay: "2.5s", drift: "-8px, 16px, -10deg" },
];

export default function FloatingTechIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {ICONS.map(({ Icon, className, duration, delay, drift }, index) => {
        const [x, y, rot] = drift.split(",").map((v) => v.trim());
        return (
          <div
            key={index}
            className={`floating-icon absolute hidden sm:block ${className}`}
            style={{
              animationDuration: duration,
              animationDelay: delay,
              ["--drift-x" as string]: x,
              ["--drift-y" as string]: y,
              ["--drift-rot" as string]: rot,
            }}
          >
            <Icon className="h-full w-full" />
          </div>
        );
      })}
    </div>
  );
}

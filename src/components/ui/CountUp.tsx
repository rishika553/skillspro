"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

type CountUpProps = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Number of decimal places (e.g. 1 for 6.5) */
  decimals?: number;
  className?: string;
};

export function CountUp({
  end,
  duration = 1.25,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    let frame = 0;
    const from = 0;

    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - (1 - p) ** 3;
      const raw = from + (end - from) * eased;
      const next =
        decimals > 0
          ? Math.round(raw * 10 ** decimals) / 10 ** decimals
          : Math.round(raw);
      setDisplay(next);
      if (p < 1) frame = requestAnimationFrame(tick);
      else setDisplay(end);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end, duration, decimals]);

  const numStr = decimals > 0 ? display.toFixed(decimals) : String(display);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {numStr}
      {suffix}
    </span>
  );
}

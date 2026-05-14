"use client";

import { useEffect, useRef } from "react";

/* Flowing multi-line index graph.
   Smooth curves (Catmull-Rom → cubic Bézier), faint vertical gridlines,
   a year axis, and one S&P-red "live" curve with a glowing pulse-dot.
   Lines draw themselves in on mount. Pure SVG + CSS. Deterministic. */

const W = 1000;
const H = 460;
const PAD_X = 40;
const PAD_TOP = 40;
const PLOT_H = 300; // drawing area height for curves
const YEARS = ["2012", "2013", "2014", "2015", "2016", "2017"];

// each series: normalized values 0..1 (top=1). 6 points across the years.
const SERIES = [
  { key: "a", cls: "fg__line--mute1", vals: [0.55, 0.74, 0.30, 0.52, 0.40, 0.46] },
  { key: "b", cls: "fg__line--mute2", vals: [0.34, 0.62, 0.40, 0.30, 0.58, 0.70] },
  { key: "c", cls: "fg__line--live", vals: [0.40, 0.30, 0.55, 0.86, 0.74, 0.60], live: true },
];

const colX = (i) => PAD_X + (i / (YEARS.length - 1)) * (W - PAD_X * 2);
const valY = (v) => PAD_TOP + (1 - v) * PLOT_H;

// Catmull-Rom to smooth cubic Bézier path
function smoothPath(pts) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

export default function FlowGraph({ className = "" }) {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((p, i) => {
      if (!p) return;
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      requestAnimationFrame(() => {
        p.style.transition = `stroke-dashoffset 1.8s cubic-bezier(0.16,1,0.3,1) ${i * 220 + 200}ms`;
        p.style.strokeDashoffset = "0";
      });
    });
  }, []);

  // live curve peak point for the pulse dot (its highest value)
  const live = SERIES.find((s) => s.live);
  const peakIdx = live.vals.indexOf(Math.max(...live.vals));
  const dotX = colX(peakIdx);
  const dotY = valY(live.vals[peakIdx]);

  return (
    <svg className={`fg ${className}`} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" aria-hidden>
      <defs>
        <linearGradient id="fgMute1" x1="0" x2="1">
          <stop offset="0" stopColor="var(--ink)" stopOpacity="0" />
          <stop offset="0.12" stopColor="var(--ink)" stopOpacity="0.55" />
          <stop offset="0.88" stopColor="var(--ink)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--ink)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fgMute2" x1="0" x2="1">
          <stop offset="0" stopColor="var(--ink-soft)" stopOpacity="0" />
          <stop offset="0.12" stopColor="var(--ink-soft)" stopOpacity="0.45" />
          <stop offset="0.88" stopColor="var(--ink-soft)" stopOpacity="0.45" />
          <stop offset="1" stopColor="var(--ink-soft)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fgLive" x1="0" x2="1">
          <stop offset="0" stopColor="var(--red)" stopOpacity="0" />
          <stop offset="0.14" stopColor="var(--red)" stopOpacity="1" />
          <stop offset="0.9" stopColor="var(--red)" stopOpacity="1" />
          <stop offset="1" stopColor="var(--red)" stopOpacity="0.15" />
        </linearGradient>
        <filter id="fgGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* faint vertical gridlines at each year */}
      {YEARS.map((_, i) => (
        <line key={i} x1={colX(i)} x2={colX(i)} y1={PAD_TOP - 8} y2={PAD_TOP + PLOT_H + 18} className="fg__grid" />
      ))}

      {/* curves */}
      {SERIES.map((s, i) => {
        const pts = s.vals.map((v, j) => ({ x: colX(j), y: valY(v) }));
        return (
          <path
            key={s.key}
            ref={(el) => (refs.current[i] = el)}
            d={smoothPath(pts)}
            className={`fg__line ${s.cls}`}
            fill="none"
            filter={s.live ? "url(#fgGlow)" : undefined}
          />
        );
      })}

      {/* pulse dot on the live curve */}
      <circle cx={dotX} cy={dotY} r="9" className="fg__dot-halo" />
      <circle cx={dotX} cy={dotY} r="5.5" className="fg__dot" />

      {/* year axis */}
      {YEARS.map((y, i) => (
        <text
          key={y}
          x={colX(i)}
          y={PAD_TOP + PLOT_H + 50}
          className={`fg__year ${i === YEARS.length - 1 ? "fg__year--live" : ""}`}
          textAnchor="middle"
        >
          {y}
        </text>
      ))}
    </svg>
  );
}

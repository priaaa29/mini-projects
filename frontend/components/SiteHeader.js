"use client";

import { useState, useEffect } from "react";
import { NAV, DIVISIONS } from "@/lib/content";

export default function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="mast">
      {/* edition strip — like a volume header */}
      <div className="mast__edition data">
        <div className="shell mast__edition-row">
          <span className="mast__edition-left">
            <span className="live-dot" aria-hidden /> MARKETS OPEN
          </span>
          <span className="mast__edition-mid">VOL. CLXVI — ESSENTIAL INTELLIGENCE SINCE 1860</span>
          <span className="mast__edition-right">NYSE: SPGI</span>
        </div>
      </div>

      <div className="shell mast__bar">
        <a href="#top" className="mast__brand" aria-label="S&P Global home">
          <span className="mast__brandmark mono-display">S&amp;P</span>
          <span className="mast__brandword">
            <span className="mast__brandname">Global</span>
            <span className="mast__brandsub data">THE INDEX OF RECORD</span>
          </span>
        </a>

        <nav className="mast__nav" aria-label="Primary">
          {NAV.map((item) =>
            item.mega ? (
              <div
                key={item.label}
                className="mast__navitem"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  className={`mast__navlink ${megaOpen ? "is-open" : ""}`}
                  aria-expanded={megaOpen}
                  onClick={() => setMegaOpen((v) => !v)}
                >
                  {item.label}
                  <span className="mast__navlink-idx data">5</span>
                </button>

                <div className={`mega ${megaOpen ? "mega--open" : ""}`} role="menu">
                  <div className="mega__inner shell">
                    <div className="mega__lead">
                      <span className="gauge gauge--red">Contents</span>
                      <p className="serif-display mega__leadtitle">
                        One enterprise.<br />Five benchmarks the<br />world is scored by.
                      </p>
                      <a href="#divisions" className="ulink">See the full index</a>
                    </div>
                    <ul className="mega__list">
                      {DIVISIONS.map((d) => (
                        <li key={d.id} role="none">
                          <a href={`#${d.id}`} role="menuitem" className="mega__entry">
                            <span className="data mega__entry-no">{d.no}</span>
                            <span className="mono-display mega__entry-mon">{d.monument}</span>
                            <span className="mega__entry-body">
                              <span className="mega__entry-name">{d.name}</span>
                              <span className="mega__entry-blurb">{d.blurb}</span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div key={item.label} className="mast__navitem">
                <a href="#" className="mast__navlink">{item.label}</a>
              </div>
            )
          )}
        </nav>

        <div className="mast__actions">
          <button className="mast__search" aria-label="Search the index">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <circle cx="7" cy="7" r="4.8" stroke="currentColor" strokeWidth="1.4" fill="none" />
              <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <span className="data">SEARCH</span>
          </button>
          <a href="#" className="btn btn--solid mast__login">Log In</a>
          <button
            className={`mast__burger ${mobileOpen ? "is-open" : ""}`}
            aria-label="Menu" aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div className={`drawer ${mobileOpen ? "drawer--open" : ""}`}>
        <nav className="drawer__nav" aria-label="Mobile">
          <span className="gauge gauge--red">Contents</span>
          {DIVISIONS.map((d) => (
            <a key={d.id} href={`#${d.id}`} className="drawer__link" onClick={() => setMobileOpen(false)}>
              <span className="data drawer__no">{d.no}</span>
              <span>{d.name}</span>
              <span className="mono-display drawer__mon">{d.monument}</span>
            </a>
          ))}
          <span className="gauge drawer__sep">Sections</span>
          {NAV.filter((n) => !n.mega).map((n) => (
            <a key={n.label} href="#" className="drawer__link drawer__link--plain" onClick={() => setMobileOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#" className="btn btn--red drawer__cta">Request a demo</a>
        </nav>
      </div>
    </header>
  );
}

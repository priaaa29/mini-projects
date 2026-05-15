import SiteHeader from "@/components/SiteHeader";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import FlowGraph from "@/components/FlowGraph";
import { DIVISIONS, INSIGHTS, STATS, FOOTER, FIGURES_IMG } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <span id="top" />

      <main>
        {/* ============ HERO — centered statement over a flowing index graph ============ */}
        <section className="hero" aria-labelledby="hero-h">
          <div className="shell hero__center">
            <span className="gauge gauge--red rise hero__eyebrow" style={{ animationDelay: "100ms" }}>
              Essential Intelligence since 1860
            </span>
            <h1 id="hero-h" className="serif-display hero__title">
              <span className="hero__line hero__line--muted rise" style={{ animationDelay: "200ms" }}>
                The world keeps its score
              </span>
              <span className="hero__line hero__line--em rise" style={{ animationDelay: "320ms" }}>
                with our numbers.
              </span>
            </h1>
            <p className="hero__sub rise" style={{ animationDelay: "460ms" }}>
              The ratings, indices and reference prices behind the
              decisions that move the world&rsquo;s markets.
            </p>
            <div className="hero__cta rise" style={{ animationDelay: "600ms" }}>
              <a href="#divisions" className="btn btn--pill">Open the index</a>
            </div>
          </div>

          {/* the flowing graph sits below the statement */}
          <div className="hero__graph rise" style={{ animationDelay: "520ms" }}>
            <FlowGraph />
          </div>
        </section>

        {/* trust strip */}
        <section className="trust" aria-label="Trusted by">
          <div className="shell trust__inner">
            {["Bloomberg", "Reuters", "NYSE", "Nasdaq", "BlackRock", "Vanguard", "Goldman Sachs", "Fidelity", "Moody's", "MSCI"].map((b) => (
              <span key={b} className="trust__logo">{b}</span>
            ))}
          </div>
        </section>

        <Ticker />

        {/* ============ DIVISIONS — table of contents ============ */}
        <section id="divisions" className="idx shell" aria-labelledby="idx-h">
          <Reveal className="idx__head">
            <span className="gauge">§ I — Contents</span>
            <h2 id="idx-h" className="serif-display idx__title">
              Five divisions. Each one a benchmark of record.
            </h2>
          </Reveal>

          <div className="idx__table">
            <div className="idx__cols data" aria-hidden>
              <span>No.</span><span>Benchmark</span><span>Division</span><span>Established</span><span></span>
            </div>
            {DIVISIONS.map((d, i) => (
              <Reveal as="article" key={d.id} id={d.id} className="entry" delay={i * 60}>
                <a href="#" className="entry__row">
                  <span className="data entry__no">{d.no}</span>
                  <span className="entry__thumb duo">
                    <img src={d.img} alt={`${d.name}`} className="duo__img" loading="lazy" />
                    <span className="duo__wash" aria-hidden />
                    <span className="mono-display entry__monument">{d.monument}</span>
                  </span>
                  <span className="entry__main">
                    <span className="serif-display entry__name">{d.name}</span>
                    <span className="entry__blurb">{d.blurb}</span>
                    <span className="entry__links">
                      {d.links.map((l) => (
                        <span key={l} className="data entry__tag">{l}</span>
                      ))}
                    </span>
                  </span>
                  <span className="data entry__est">
                    {d.est}
                    <span className="entry__metric">{d.metric}</span>
                  </span>
                  <span className="entry__go" aria-hidden>
                    <svg width="26" height="26" viewBox="0 0 26 26">
                      <path d="M6 13h13M14 8l5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                    </svg>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ STATS — the masthead figures (dark) ============ */}
        <section className="figures" aria-labelledby="fig-h">
          <img src={FIGURES_IMG} alt="" aria-hidden className="figures__bg" loading="lazy" />
          <div className="shell">
            <Reveal className="figures__head">
              <span className="gauge gauge--ondark">§ II — The Record</span>
              <h2 id="fig-h" className="serif-display figures__title">
                Numbers that have compounded since 1860.
              </h2>
            </Reveal>
            <div className="figures__grid">
              {STATS.map((s, i) => (
                <Reveal as="div" key={s.k} className="figure" delay={i * 80}>
                  <span className="mono-display figure__k">{s.k}</span>
                  <span className="figure__v">{s.v}</span>
                  <span className="data figure__note">{s.note}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ INSIGHTS — the bulletin ============ */}
        <section id="insights" className="bulletin shell" aria-labelledby="bul-h">
          <Reveal className="bulletin__head">
            <div>
              <span className="gauge">§ III — Bulletin</span>
              <h2 id="bul-h" className="serif-display bulletin__title">Essential reading</h2>
            </div>
            <a href="#" className="ulink">All insights</a>
          </Reveal>

          <div className="bulletin__grid">
            {INSIGHTS.map((a, i) => (
              <Reveal
                as="article"
                key={a.title}
                className={`note ${a.feature ? "note--lead" : ""}`}
                delay={i * 70}
              >
                <a href="#" className="note__inner">
                  <span className="data note__no">{a.no}</span>
                  <span className="data note__tag">{a.tag}</span>
                  <h3 className="serif-display note__title">{a.title}</h3>
                  <span className="data note__meta">
                    {a.meta} <span className="note__dot">·</span> {a.read}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ CTA — the subscription line ============ */}
        <section className="enroll" aria-labelledby="enr-h">
          <div className="shell enroll__inner">
            <Reveal>
              <span className="gauge gauge--red">Subscribe</span>
              <h2 id="enr-h" className="serif-display enroll__title">
                Put the index to work for you.
              </h2>
            </Reveal>
            <Reveal className="enroll__actions" delay={100}>
              <a href="#" className="btn btn--red">Request a demo</a>
              <a href="#" className="btn btn--ghost">Talk to an expert</a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ============ FOOTER — the colophon ============ */}
      <footer className="colophon">
        <div className="shell">
          <div className="colophon__top">
            <div className="colophon__brand">
              <span className="mono-display colophon__mark">S&amp;P GLOBAL</span>
              <p className="serif-display colophon__tag">
                Essential intelligence for the world&rsquo;s decision-makers.
              </p>
              <span className="data colophon__ticker">NYSE: SPGI</span>
            </div>
            <nav className="colophon__cols" aria-label="Footer">
              {FOOTER.map((col) => (
                <div className="colophon__col" key={col.h}>
                  <h4 className="data colophon__h">{col.h}</h4>
                  <ul>
                    {col.links.map((l) => (
                      <li key={l}><a href="#" className="colophon__link">{l}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
          <div className="colophon__rule" aria-hidden>
            {Array.from({ length: 60 }).map((_, i) => (
              <span key={i} style={{ height: i % 5 === 0 ? "10px" : "5px" }} />
            ))}
          </div>
          <div className="colophon__bottom data">
            <span>© 1860–2026 S&amp;P GLOBAL INC.</span>
            <span className="colophon__legal">
              <a href="#">Terms</a><a href="#">Privacy</a><a href="#">Cookies</a><a href="#">Do Not Sell My Info</a>
            </span>
          </div>
          <p className="colophon__note data">
            Redesign concept for demonstration — not affiliated with or endorsed by
            S&amp;P Global Inc. Market figures shown are illustrative.
          </p>
        </div>
      </footer>
    </>
  );
}

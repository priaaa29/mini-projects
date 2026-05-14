import { TICKERS } from "@/lib/content";

export default function Ticker() {
  const row = [...TICKERS, ...TICKERS];
  return (
    <div className="tape" role="region" aria-label="Market tape">
      <span className="tape__label data">
        <span className="live-dot" aria-hidden /> TAPE
      </span>
      <div className="tape__viewport">
        <div className="tape__track">
          {row.map((t, i) => (
            <span className="tape__item data" key={i} aria-hidden={i >= TICKERS.length}>
              <span className="tape__sym">{t.sym}</span>
              <span className="tape__val">{t.val}</span>
              <span className={`tape__chg ${t.up ? "is-up" : "is-down"}`}>
                {t.up ? "+" : ""}{t.chg}
              </span>
              <span className="tape__div">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

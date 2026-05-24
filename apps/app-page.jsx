// Shared layout for app subpages — locked to the Studio aesthetic of the
// home page (light mode, blue accent, JetBrains Mono labels, sharp edges).
//
// Supports multi-language content via `data.langs` + `data.i18n[lang]`.
// Apps with langs.length > 1 get a language picker in the top bar.

const { useState, useMemo, useEffect } = React;

const ICONS = {
  'katachi-quiz': window.PrefectureIcon,
  'gout-tracker':  window.GoutIcon,
};

const ACCENT = '#3aaaff';
const BG = '#fafaf7';
const FG = '#0d0d0e';
const MUTED = 'rgba(13,13,14,0.55)';
const LINE = 'rgba(13,13,14,0.13)';

const LANG_LABELS = {
  ja: '日本語',
  en: 'English',
  zh: '中文',
};

// ─────────────────────────────────────────────────────────────────
// Building blocks
// ─────────────────────────────────────────────────────────────────
const RichText = ({ item }) => {
  if (typeof item === 'string') return <>{item}</>;
  if (item && item.html) return <span dangerouslySetInnerHTML={{ __html: item.html }} />;
  return null;
};

const Para = ({ children, html }) => {
  if (html) return <p className="sp-p" dangerouslySetInnerHTML={{ __html: html }} />;
  return <p className="sp-p">{children}</p>;
};

const LegalSection = ({ section }) => (
  <div className="sp-legal-row">
    <div className="sp-legal-num">{section.n}</div>
    <div className="sp-legal-body">
      <h3 className="sp-legal-title">{section.title}</h3>
      {(section.body || []).map((b, i) =>
        typeof b === 'string'
          ? <Para key={i}>{b}</Para>
          : <Para key={i} html={b.html} />
      )}
      {section.list && (
        <ul className="sp-legal-list">
          {section.list.map((item, i) => (
            <li key={i}><RichText item={item} /></li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const SectionHeader = ({ idx, eyebrow, title, meta }) => (
  <div className="sp-section-header">
    <div className="sp-section-num">({idx})</div>
    <div>
      <div className="sp-section-eyebrow">{eyebrow}</div>
      <h2 className="sp-section-title">{title}</h2>
    </div>
    <div className="sp-section-meta">{meta}</div>
  </div>
);

// ─────────────────────────────────────────────────────────────────
// Sections
// ─────────────────────────────────────────────────────────────────
const AboutSection = ({ data, lang, idx, ui }) => {
  const c = data.i18n[lang].about;
  return (
    <section id="about" className="sp-section">
      <SectionHeader idx={idx} eyebrow={ui.section_about.toUpperCase()} title={c.heading} meta={`/ ${String(idx).padStart(2,'0')}`} />
      <div className="sp-grid">
        <div className="sp-col-side" />
        <div className="sp-col-main">
          {c.body.map((b, i) => <Para key={i}>{b}</Para>)}
          {c.features && (
            <>
              <div className="sp-mono-label" style={{ marginTop: 32, marginBottom: 12 }}>{ui.features_label}</div>
              <ul className="sp-features">
                {c.features.map((f, i) => (
                  <li key={i}>
                    <span className="sp-features-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="sp-col-side sp-right" />
      </div>
    </section>
  );
};

const SupportSection = ({ data, lang, idx, ui }) => {
  const c = data.i18n[lang].support;
  return (
    <section id="support" className="sp-section">
      <SectionHeader idx={idx} eyebrow={ui.section_support.toUpperCase()} title={c.heading} meta={`/ ${String(idx).padStart(2,'0')}`} />
      <div className="sp-grid">
        <div className="sp-col-side" />
        <div className="sp-col-main">
          {c.intro && c.intro.map((b, i) => <Para key={i}>{b}</Para>)}

          {c.cta && (
            <a href={c.cta.url} className="sp-cta-line" target="_blank" rel="noopener">
              → {c.cta.label}
            </a>
          )}

          {c.faqs && (
            <>
              <div className="sp-mono-label" style={{ marginTop: 40, marginBottom: 12 }}>{ui.section_faq.toUpperCase()}</div>
              <div className="sp-faq">
                {c.faqs.map((f, i) => (
                  <details key={i} className="sp-faq-item">
                    <summary>
                      <span className="sp-faq-num">Q{String(i + 1).padStart(2, '0')}</span>
                      <span className="sp-faq-q">{f.q}</span>
                      <span className="sp-faq-chev">+</span>
                    </summary>
                    <div className="sp-faq-a">{f.a}</div>
                  </details>
                ))}
              </div>
            </>
          )}

          {c.version && (
            <>
              <div className="sp-mono-label" style={{ marginTop: 40, marginBottom: 12 }}>{ui.versionInfo.toUpperCase()}</div>
              <dl className="sp-meta-list">
                <div><dt>{c.version.label}</dt><dd>{c.version.value}</dd></div>
                <div><dt>{ui.updated}</dt><dd>{c.version.updated}</dd></div>
                <div><dt>{ui.platforms}</dt><dd>{c.version.platforms}</dd></div>
              </dl>
            </>
          )}
        </div>
        <div className="sp-col-side sp-right" />
      </div>
    </section>
  );
};

const LegalBlock = ({ id, content, idx, eyebrow, ui }) => (
  <section id={id} className="sp-section">
    <SectionHeader idx={idx} eyebrow={eyebrow.toUpperCase()} title={content.heading} meta={`/ ${String(idx).padStart(2,'0')}`} />
    <div className="sp-grid">
      <div className="sp-col-side sp-effective">
        {content.effective && <div className="sp-mono-label">{content.effective}</div>}
        {content.note && <div className="sp-note">{content.note}</div>}
      </div>
      <div className="sp-col-main">
        {content.sections.map((s, i) => (
          <LegalSection key={i} section={s} />
        ))}
      </div>
      <div className="sp-col-side sp-right" />
    </div>
  </section>
);

const CreditsSection = ({ data, lang, idx, ui }) => {
  const c = data.i18n[lang].credits;
  return (
    <section id="credits" className="sp-section">
      <SectionHeader idx={idx} eyebrow={ui.section_credits.toUpperCase()} title={c.heading} meta={`/ ${String(idx).padStart(2,'0')}`} />
      <div className="sp-grid">
        <div className="sp-col-side" />
        <div className="sp-col-main">
          {c.sections.map((s, i) => (
            <div key={i} className="sp-credit-block">
              <div className="sp-mono-label">{s.title}</div>
              <ul className="sp-credit-list">
                {s.list.map((item, j) => (
                  <li key={j}><RichText item={item} /></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="sp-col-side sp-right" />
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// Page shell
// ─────────────────────────────────────────────────────────────────
function AppPage({ appId }) {
  const data = window.APP_CONTENT[appId];
  const [lang, setLang] = useState(data.defaultLang);

  // Initialise from URL hash so the picker is shareable
  useEffect(() => {
    const m = location.hash.match(/lang=([a-z]{2})/i);
    if (m && data.langs.includes(m[1])) setLang(m[1]);
  }, [data.langs]);

  const setLangAnd = (l) => {
    setLang(l);
    // Preserve any current #section by stripping/replacing lang= param only
    const hash = location.hash.replace(/[#&]?lang=[a-z]{2}/i, '');
    history.replaceState(null, '', `${location.pathname}${location.search}${hash}${hash ? '&' : '#'}lang=${l}`);
  };

  if (!data) return <div style={{padding: 80}}>App not found.</div>;
  const Icon = ICONS[appId];
  const accent = data.accent || ACCENT;
  const ui = window.UI_STRINGS[lang] || window.UI_STRINGS.ja;
  const t = data.i18n[lang];

  // Build section list in order
  const sections = [];
  if (t.about)   sections.push({ id: 'about',   key: 'about'   });
  if (t.support) sections.push({ id: 'support', key: 'support' });
  if (t.privacy) sections.push({ id: 'privacy', key: 'privacy' });
  if (t.terms)   sections.push({ id: 'terms',   key: 'terms'   });
  if (t.credits) sections.push({ id: 'credits', key: 'credits' });

  return (
    <div className="sp-page" style={{ '--accent': accent }}>
      <style>{`
        :root { --accent: ${accent}; }
        .sp-page { background: ${BG}; color: ${FG}; min-height: 100vh;
          font-family: "Inter Tight", "Noto Sans JP", -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased; }
        .sp-page * { box-sizing: border-box; }
        .sp-page a { color: var(--accent); text-decoration: none; }
        .sp-page a:hover { text-decoration: underline; text-underline-offset: 3px; }

        /* Top metadata bar */
        .sp-topbar { border-bottom: 1px solid ${LINE};
          font-family: "JetBrains Mono", monospace;
          font-size: 11px; letter-spacing: 0.06em; color: ${MUTED}; }
        .sp-topbar-inner { max-width: 1280px; margin: 0 auto; padding: 12px 32px;
          display: flex; justify-content: space-between; align-items: center; gap: 24px; }
        .sp-topbar a { color: inherit; }
        .sp-brand { color: ${FG} !important; font-weight: 500; }
        .sp-topbar-links { display: flex; gap: 24px; }
        .sp-lang { display: flex; gap: 0; border: 1px solid ${LINE}; }
        .sp-lang button { background: transparent; border: 0;
          font-family: "JetBrains Mono", monospace; font-size: 11px;
          letter-spacing: 0.06em; color: ${MUTED};
          padding: 4px 10px; cursor: pointer; text-transform: uppercase; }
        .sp-lang button + button { border-left: 1px solid ${LINE}; }
        .sp-lang button[data-on="1"] { background: ${FG}; color: ${BG}; }

        /* Hero */
        .sp-hero { max-width: 1280px; margin: 0 auto; padding: 80px 32px 56px; }
        .sp-hero-meta { display: flex; justify-content: space-between;
          font-family: "JetBrains Mono", monospace; font-size: 11px;
          color: ${MUTED}; letterSpacing: 0.16em; margin-bottom: 32px;
          text-transform: uppercase; letter-spacing: 0.16em; }
        .sp-hero-row { display: grid; grid-template-columns: 1fr 2fr; gap: 32px;
          align-items: end; }
        .sp-hero-icon { padding-bottom: 4px; }
        .sp-hero h1 { font-size: clamp(56px, 9vw, 128px); font-weight: 500;
          letter-spacing: -0.045em; line-height: 0.9; margin: 0 0 18px;
          color: ${FG}; }
        .sp-hero h1 .accent { color: var(--accent); }
        .sp-hero .sp-tagline { font-size: clamp(18px, 1.8vw, 22px);
          line-height: 1.5; margin: 0 0 28px; max-width: 640px;
          letter-spacing: -0.005em; }
        .sp-hero .sp-cta { font-family: "JetBrains Mono", monospace;
          font-size: 13px; letter-spacing: 0.04em;
          border: 1px solid ${FG}; color: ${FG} !important;
          padding: 12px 20px; display: inline-block; }
        .sp-hero .sp-cta:hover { background: ${FG}; color: ${BG} !important; text-decoration: none; }

        /* Section nav */
        .sp-sec-nav-wrap { border-top: 1px solid ${LINE}; border-bottom: 1px solid ${LINE};
          background: ${BG}; position: sticky; top: 0; z-index: 5;
          backdrop-filter: blur(8px); background: rgba(250,250,247,0.92); }
        .sp-sec-nav { max-width: 1280px; margin: 0 auto; padding: 0 32px;
          display: flex; gap: 0; font-family: "JetBrains Mono", monospace;
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          overflow-x: auto; }
        .sp-sec-nav a { color: ${MUTED}; padding: 14px 20px; display: inline-block;
          white-space: nowrap; border-right: 1px solid ${LINE}; }
        .sp-sec-nav a:first-child { border-left: 1px solid ${LINE}; }
        .sp-sec-nav a:hover { color: ${FG}; text-decoration: none; background: rgba(13,13,14,0.04); }

        /* Sections */
        .sp-section { max-width: 1280px; margin: 0 auto; padding: 64px 32px;
          border-top: 1px solid ${LINE}; scroll-margin-top: 60px; }
        .sp-section:first-of-type { border-top: none; }

        .sp-section-header { display: grid; grid-template-columns: 1fr 4fr 1fr;
          gap: 32px; padding-bottom: 32px; border-bottom: 1px solid ${LINE};
          margin-bottom: 32px; align-items: baseline; }
        .sp-section-num { font-family: "JetBrains Mono", monospace; font-size: 11px;
          color: ${MUTED}; letter-spacing: 0.16em; }
        .sp-section-eyebrow { font-family: "JetBrains Mono", monospace;
          font-size: 11px; color: ${MUTED}; letter-spacing: 0.16em; margin-bottom: 10px; }
        .sp-section-title { font-size: clamp(28px, 3.4vw, 44px); font-weight: 500;
          letter-spacing: -0.025em; line-height: 1.1; margin: 0; }
        .sp-section-meta { font-family: "JetBrains Mono", monospace; font-size: 11px;
          color: ${MUTED}; letter-spacing: 0.16em; text-align: right; }

        .sp-grid { display: grid; grid-template-columns: 1fr 4fr 1fr; gap: 32px; }
        .sp-col-side { font-family: "JetBrains Mono", monospace; font-size: 11px;
          color: ${MUTED}; letter-spacing: 0.06em; }
        .sp-col-side.sp-right { text-align: right; }

        .sp-p { font-size: 16px; line-height: 1.7; margin: 0 0 16px; color: ${FG}; }
        .sp-p:last-child { margin-bottom: 0; }

        .sp-mono-label { font-family: "JetBrains Mono", monospace; font-size: 11px;
          letter-spacing: 0.16em; text-transform: uppercase; color: ${MUTED}; }

        .sp-features { list-style: none; padding: 0; margin: 0; }
        .sp-features li { display: flex; gap: 20px; padding: 14px 0;
          border-top: 1px solid ${LINE}; font-size: 16px; align-items: baseline; }
        .sp-features li:first-child { border-top: none; }
        .sp-features-num { font-family: "JetBrains Mono", monospace; font-size: 11px;
          color: ${MUTED}; letter-spacing: 0.06em; min-width: 28px; }

        .sp-faq { border-top: 1px solid ${LINE}; }
        .sp-faq-item { border-bottom: 1px solid ${LINE}; }
        .sp-faq-item summary { display: flex; gap: 20px; align-items: baseline;
          padding: 18px 0; cursor: pointer; list-style: none;
          font-size: 16px; }
        .sp-faq-item summary::-webkit-details-marker { display: none; }
        .sp-faq-num { font-family: "JetBrains Mono", monospace; font-size: 11px;
          color: ${MUTED}; letter-spacing: 0.06em; min-width: 32px; }
        .sp-faq-q { flex: 1; font-weight: 500; }
        .sp-faq-chev { font-family: "JetBrains Mono", monospace; color: ${MUTED};
          transition: transform 0.2s; }
        .sp-faq-item[open] .sp-faq-chev { transform: rotate(45deg); color: var(--accent); }
        .sp-faq-a { font-size: 15px; line-height: 1.7; padding: 0 0 24px 52px;
          color: ${FG}; opacity: 0.85; }

        .sp-meta-list { margin: 0; padding: 0; border-top: 1px solid ${LINE}; }
        .sp-meta-list > div { display: grid; grid-template-columns: 200px 1fr;
          gap: 24px; padding: 12px 0; border-bottom: 1px solid ${LINE};
          font-family: "JetBrains Mono", monospace; font-size: 13px; }
        .sp-meta-list dt { color: ${MUTED}; letter-spacing: 0.06em;
          text-transform: uppercase; font-size: 11px; }
        .sp-meta-list dd { margin: 0; color: ${FG}; }

        .sp-cta-line { font-family: "JetBrains Mono", monospace;
          font-size: 13px; letter-spacing: 0.04em;
          border-bottom: 1px solid var(--accent);
          color: var(--accent) !important; padding-bottom: 2px;
          display: inline-block; margin-top: 8px; }
        .sp-cta-line:hover { text-decoration: none; }

        /* Legal */
        .sp-effective { padding-top: 4px; }
        .sp-note { font-size: 12px; color: ${MUTED}; line-height: 1.55;
          margin-top: 12px; font-style: italic; }
        .sp-legal-row { display: grid; grid-template-columns: 64px 1fr; gap: 24px;
          padding: 28px 0; border-top: 1px solid ${LINE}; }
        .sp-legal-row:first-child { border-top: none; padding-top: 0; }
        .sp-legal-num { font-family: "JetBrains Mono", monospace; font-size: 11px;
          color: ${MUTED}; letter-spacing: 0.06em; padding-top: 4px; }
        .sp-legal-title { font-size: 18px; font-weight: 600; margin: 0 0 12px;
          letter-spacing: -0.005em; }
        .sp-legal-list { margin: 8px 0 0; padding-left: 20px; }
        .sp-legal-list li { font-size: 15px; line-height: 1.7; padding: 3px 0; }

        .sp-credit-block { padding: 24px 0; border-top: 1px solid ${LINE}; }
        .sp-credit-block:first-child { border-top: none; padding-top: 0; }
        .sp-credit-list { margin: 12px 0 0; padding-left: 20px; }
        .sp-credit-list li { font-size: 14px; line-height: 1.75; }

        /* Footer */
        .sp-foot { max-width: 1280px; margin: 0 auto;
          padding: 40px 32px 60px; border-top: 1px solid ${LINE};
          display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px;
          font-family: "JetBrains Mono", monospace; font-size: 11px;
          letter-spacing: 0.16em; text-transform: uppercase; color: ${MUTED}; }
        .sp-foot a { color: inherit; }

        @media (max-width: 760px) {
          .sp-hero-row { grid-template-columns: 1fr; gap: 24px; }
          .sp-section-header { grid-template-columns: auto 1fr; }
          .sp-section-meta { display: none; }
          .sp-grid { grid-template-columns: 1fr; gap: 0; }
          .sp-col-side.sp-right { display: none; }
          .sp-meta-list > div { grid-template-columns: 1fr; gap: 4px; }
          .sp-legal-row { grid-template-columns: 1fr; gap: 8px; }
          .sp-topbar-links { display: none; }
        }
      `}</style>

      {/* Top metadata bar */}
      <div className="sp-topbar">
        <div className="sp-topbar-inner">
          <a href="../index.html" className="sp-brand">← YLAB</a>
          <span className="sp-topbar-links">
            <a href="../index.html#apps">[{ui.nav_apps.toUpperCase()}]</a>
            <a href={data.appStoreUrl} target="_blank" rel="noopener">[{ui.nav_appstore.toUpperCase()}]</a>
          </span>
          {data.langs.length > 1 ? (
            <span className="sp-lang">
              {data.langs.map(l => (
                <button key={l} data-on={l === lang ? '1' : '0'} onClick={() => setLangAnd(l)}>
                  {l.toUpperCase()}
                </button>
              ))}
            </span>
          ) : (
            <span>{LANG_LABELS[lang]?.toUpperCase() || lang.toUpperCase()}</span>
          )}
        </div>
      </div>

      {/* Hero */}
      <header className="sp-hero">
        <div className="sp-hero-meta">
          <span>(01) — {data.titleEn.toUpperCase()}</span>
          <span>iOS · APP STORE · {data.appStoreId}</span>
        </div>
        <div className="sp-hero-row">
          <div className="sp-hero-icon">
            <Icon size={120} radius={0.22} />
          </div>
          <div>
            <h1>{lang === 'ja' ? data.titleJa : data.titleEn}</h1>
            <p className="sp-tagline">{t.tagline}</p>
            <a href={data.appStoreUrl} className="sp-cta" target="_blank" rel="noopener">
              → {ui.open_appstore}
            </a>
          </div>
        </div>
      </header>

      {/* Section nav */}
      <div className="sp-sec-nav-wrap">
        <nav className="sp-sec-nav">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`}>[{ui[`section_${s.key}`].toUpperCase()}]</a>
          ))}
        </nav>
      </div>

      {/* Sections */}
      <main>
        {sections.map((s, i) => {
          const idx = i + 2; // hero is (01)
          const idxStr = String(idx).padStart(2, '0');
          if (s.key === 'about')   return <AboutSection   key="about"   data={data} lang={lang} idx={idxStr} ui={ui} />;
          if (s.key === 'support') return <SupportSection key="support" data={data} lang={lang} idx={idxStr} ui={ui} />;
          if (s.key === 'privacy') return <LegalBlock     key="privacy" id="privacy" content={t.privacy} idx={idxStr} eyebrow={ui.section_privacy} ui={ui} />;
          if (s.key === 'terms')   return <LegalBlock     key="terms"   id="terms"   content={t.terms}   idx={idxStr} eyebrow={ui.section_terms}   ui={ui} />;
          if (s.key === 'credits') return <CreditsSection key="credits" data={data} lang={lang} idx={idxStr} ui={ui} />;
          return null;
        })}
      </main>

      <footer className="sp-foot">
        <div>© 2026 YLAB</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="../index.html">[YLAB.DEV]</a>
          <a href={data.appStoreUrl} target="_blank" rel="noopener">[APP STORE ↗]</a>
        </div>
      </footer>
    </div>
  );
}

window.AppPage = AppPage;

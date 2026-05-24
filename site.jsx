// Aesthetic presets for ylab developer site.
// Three distinct layouts; tweaks adjust palette, font, density, card style.

const APPS = [
  {
    id: 'kanji-prefecture',
    titleJa: '都道府県クイズ',
    titleEn: 'Prefecture Quiz',
    taglineJa: '漢字でおぼえる、都道府県シルエット手書きクイズ。',
    taglineEn: 'Learn prefectures by drawing kanji over their silhouettes.',
    appStoreId: '6762039667',
    url: 'apps/katachi.html',
    appStoreUrl: 'https://apps.apple.com/us/app/id6762039667',
    accent: '#d94e3a',
    accentSoft: '#fce8e4',
    Icon: window.PrefectureIcon,
    Screenshot: window.PrefectureScreenshot,
    metaJa: 'iOS · 無料 · 教育',
    metaEn: 'iOS · Free · Education',
  },
  {
    id: 'gout-tracker',
    titleJa: 'Gout Tracker',
    titleEn: 'Gout Tracker',
    taglineJa: '水分・服薬・通知で、痛風と毎日付き合う。',
    taglineEn: 'A quiet companion for managing gout — hydration, medication, reminders.',
    appStoreId: '6756119584',
    url: 'apps/gout.html',
    appStoreUrl: 'https://apps.apple.com/us/app/id6756119584',
    accent: '#3a7bd5',
    accentSoft: '#e2ecf9',
    Icon: window.GoutIcon,
    Screenshot: window.GoutScreenshot,
    metaJa: 'iOS · 無料 · ヘルスケア',
    metaEn: 'iOS · Free · Health',
  },
];

const BIO = {
  ja: '個人開発でそのとき使いたいアプリを作っています。',
  en: 'I build small iOS apps — usually the one I happen to want that month.',
};

// ─────────────────────────────────────────────────────────────────
// Density helpers — scale paddings + section gaps
// ─────────────────────────────────────────────────────────────────
const DENSITIES = {
  compact:  { pad: 56,  gap: 56,  hero: 80  },
  regular:  { pad: 96,  gap: 96,  hero: 140 },
  spacious: { pad: 140, gap: 140, hero: 200 },
};


// ─────────────────────────────────────────────────────────────────
// Preset A — "Mono" : Apple-style centered minimal
// ─────────────────────────────────────────────────────────────────
const MonoPreset = ({ t }) => {
  const d = DENSITIES[t.density] || DENSITIES.regular;
  const accent = t.monoAccent;
  const fontSerifMode = t.monoFont === 'serif';

  const wrapStyle = {
    background: '#f5f5f7',
    color: '#1d1d1f',
    minHeight: '100vh',
    fontFamily: fontSerifMode
      ? '"Source Serif 4", "Noto Serif JP", Georgia, serif'
      : '"Inter Tight", "Noto Sans JP", -apple-system, sans-serif',
  };

  return (
    <div style={wrapStyle}>
      {/* nav */}
      <nav style={{
        maxWidth: 1080, margin: '0 auto',
        padding: `28px ${d.pad / 2}px`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 14, letterSpacing: '0.02em',
      }}>
        <div style={{ fontWeight: 600, letterSpacing: '-0.01em', fontSize: 17 }}>ylab</div>
        <div style={{ display: 'flex', gap: 28, opacity: 0.7 }}>
          <a href="#apps" style={{ textDecoration: 'none' }}>Apps</a>
          <a href="apps/katachi.html" style={{ textDecoration: 'none' }}>都道府クイズ</a>
          <a href="apps/gout.html" style={{ textDecoration: 'none' }}>Gout Tracker</a>
        </div>
      </nav>

      {/* hero */}
      <header style={{
        maxWidth: 880, margin: '0 auto',
        padding: `${d.hero}px ${d.pad / 2}px ${d.gap}px`,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 24 }}>
          Independent iOS developer
        </div>
        <h1 style={{
          fontSize: 'clamp(48px, 7vw, 88px)',
          fontWeight: fontSerifMode ? 400 : 500,
          letterSpacing: '-0.035em',
          lineHeight: 1.04,
          margin: '0 0 28px',
          fontStyle: fontSerifMode ? 'italic' : 'normal',
        }}>
          ylab
        </h1>
        <p style={{
          fontSize: 'clamp(18px, 1.8vw, 22px)',
          lineHeight: 1.5,
          maxWidth: 560,
          margin: '0 auto',
          opacity: 0.7,
          fontFamily: '"Inter Tight", "Noto Sans JP", sans-serif',
        }}>
          {BIO.ja}<br />
          <span style={{ opacity: 0.7 }}>{BIO.en}</span>
        </p>
      </header>

      {/* apps */}
      <section id="apps" style={{
        maxWidth: 1080, margin: '0 auto',
        padding: `0 ${d.pad / 2}px ${d.gap}px`,
      }}>
        <SectionLabel mode="mono">Apps · アプリ</SectionLabel>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 24,
          marginTop: 32,
        }}>
          {APPS.map(app => (
            <MonoAppCard key={app.id} app={app} cardStyle={t.cardStyle} accent={accent} />
          ))}
        </div>
      </section>

      <FooterRow d={d} mode="mono" />
    </div>
  );
};

const MonoAppCard = ({ app, cardStyle, accent }) => {
  const { Icon, Screenshot } = app;
  if (cardStyle === 'screenshot') {
    return (
      <a href={app.url} style={{
        background: '#fff',
        borderRadius: 24,
        padding: 32,
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        minHeight: 460,
        transition: 'transform 0.35s cubic-bezier(.2,.7,.2,1), box-shadow 0.35s',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 30px 60px -30px rgba(0,0,0,0.18)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
      >
        <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
          <Screenshot width={170} accent={app.accent} />
        </div>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
          <Icon size={52} />
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.2 }}>{app.titleJa}</div>
            <div style={{ fontSize: 13, opacity: 0.55, marginTop: 3 }}>{app.titleEn}</div>
          </div>
        </div>
      </a>
    );
  }
  if (cardStyle === 'compact') {
    return (
      <a href={app.url} style={{
        background: '#fff',
        borderRadius: 20,
        padding: '24px 28px',
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        gap: 20,
        alignItems: 'center',
      }}>
        <Icon size={68} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.25 }}>{app.titleJa}</div>
          <div style={{ fontSize: 13, opacity: 0.55, marginTop: 4 }}>{app.taglineEn}</div>
        </div>
        <div style={{ fontSize: 18, opacity: 0.3 }}>→</div>
      </a>
    );
  }
  // default: icon-led with tagline
  return (
    <a href={app.url} style={{
      background: '#fff',
      borderRadius: 24,
      padding: '40px 36px',
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      minHeight: 320,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Icon size={92} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.45, marginBottom: 10, fontFamily: '"Inter Tight", sans-serif' }}>
          {app.metaEn}
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 8px', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
          {app.titleJa}
        </h3>
        <p style={{ margin: 0, fontSize: 15, opacity: 0.65, lineHeight: 1.5 }}>{app.taglineJa}</p>
      </div>
      <div style={{ fontSize: 14, color: accent, fontFamily: '"Inter Tight", sans-serif', fontWeight: 500 }}>
        詳細を見る · Read more →
      </div>
    </a>
  );
};


// ─────────────────────────────────────────────────────────────────
// Preset B — "Paper" : Warm editorial serif
// ─────────────────────────────────────────────────────────────────
const PaperPreset = ({ t }) => {
  const d = DENSITIES[t.density] || DENSITIES.regular;
  const palette = t.paperPalette; // {bg, fg, accent}
  const fontSans = t.paperFont === 'humanist'
    ? '"Inter Tight", "Noto Sans JP", sans-serif'
    : '"JetBrains Mono", "Noto Sans JP", monospace';

  return (
    <div style={{
      background: palette.bg,
      color: palette.fg,
      minHeight: '100vh',
      fontFamily: '"Source Serif 4", "Noto Serif JP", Georgia, serif',
    }}>
      {/* top rule */}
      <nav style={{
        maxWidth: 1180, margin: '0 auto',
        padding: `28px ${d.pad / 2}px`,
        borderBottom: `1px solid ${palette.fg}22`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        fontFamily: fontSans,
        fontSize: 13,
        letterSpacing: '0.02em',
      }}>
        <div style={{
          fontFamily: '"Instrument Serif", "Source Serif 4", serif',
          fontSize: 26, fontStyle: 'italic', fontWeight: 400,
        }}>ylab</div>
        <div style={{ display: 'flex', gap: 28, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.14em', fontSize: 11 }}>
          <a href="#apps" style={{ textDecoration: 'none' }}>Apps</a>
          <a href="apps/katachi.html" style={{ textDecoration: 'none' }}>Prefecture</a>
          <a href="apps/gout.html" style={{ textDecoration: 'none' }}>Gout</a>
        </div>
      </nav>

      {/* hero — asymmetric */}
      <header style={{
        maxWidth: 1180, margin: '0 auto',
        padding: `${d.hero}px ${d.pad / 2}px ${d.gap}px`,
        display: 'grid', gridTemplateColumns: '5fr 4fr', gap: 64, alignItems: 'end',
      }}>
        <div>
          <div style={{ fontFamily: fontSans, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 28 }}>
            № 001 · An independent iOS developer
          </div>
          <h1 style={{
            fontSize: 'clamp(64px, 10vw, 140px)',
            fontWeight: 400,
            fontStyle: 'italic',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            margin: 0,
            fontFamily: '"Instrument Serif", "Source Serif 4", serif',
            color: palette.accent,
          }}>ylab</h1>
        </div>
        <div style={{ paddingBottom: 12 }}>
          <p style={{
            fontSize: 'clamp(19px, 1.6vw, 23px)',
            lineHeight: 1.55,
            margin: '0 0 14px',
            fontFamily: '"Noto Serif JP", "Source Serif 4", serif',
          }}>{BIO.ja}</p>
          <p style={{
            fontSize: 15,
            lineHeight: 1.55,
            margin: 0,
            opacity: 0.65,
            fontFamily: fontSans,
            fontStyle: 'normal',
          }}>{BIO.en}</p>
        </div>
      </header>

      {/* apps */}
      <section id="apps" style={{
        maxWidth: 1180, margin: '0 auto',
        padding: `0 ${d.pad / 2}px ${d.gap}px`,
        borderTop: `1px solid ${palette.fg}22`,
        paddingTop: 48,
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 48,
          fontFamily: fontSans,
        }}>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.55 }}>
            Selected works
          </div>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.55 }}>
            2025 ─ 2026
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          {APPS.map((app, i) => (
            <PaperAppRow key={app.id} app={app} index={i} cardStyle={t.cardStyle} palette={palette} fontSans={fontSans} />
          ))}
        </div>
      </section>

      <FooterRow d={d} mode="paper" palette={palette} fontSans={fontSans} />
    </div>
  );
};

const PaperAppRow = ({ app, index, cardStyle, palette, fontSans }) => {
  const { Icon, Screenshot } = app;
  const flip = index % 2 === 1;
  const showScreenshot = cardStyle !== 'compact';

  return (
    <a href={app.url} style={{
      textDecoration: 'none', color: 'inherit',
      display: 'grid',
      gridTemplateColumns: showScreenshot ? (flip ? '1fr 5fr' : '5fr 1fr') : '1fr',
      gap: 56,
      alignItems: 'center',
      paddingBottom: 48,
      borderBottom: `1px solid ${palette.fg}15`,
    }}>
      {showScreenshot && flip && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Screenshot width={170} accent={app.accent} />
        </div>
      )}
      <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
        <Icon size={86} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: fontSans, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 12 }}>
            № 00{index + 1} · {app.metaEn}
          </div>
          <h3 style={{
            fontFamily: '"Noto Serif JP", "Source Serif 4", serif',
            fontSize: 'clamp(26px, 2.6vw, 36px)',
            fontWeight: 500,
            letterSpacing: '-0.015em',
            lineHeight: 1.15,
            margin: '0 0 14px',
          }}>{app.titleJa}</h3>
          <p style={{
            fontFamily: '"Source Serif 4", serif',
            fontStyle: 'italic',
            fontSize: 19,
            lineHeight: 1.5,
            margin: '0 0 10px',
            color: palette.accent,
          }}>{app.taglineEn}</p>
          <p style={{ fontSize: 15, opacity: 0.65, margin: 0, lineHeight: 1.6, fontFamily: '"Noto Serif JP", serif' }}>
            {app.taglineJa}
          </p>
          <div style={{
            marginTop: 24,
            fontFamily: fontSans,
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            opacity: 0.7,
          }}>Read more →</div>
        </div>
      </div>
      {showScreenshot && !flip && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Screenshot width={170} accent={app.accent} />
        </div>
      )}
    </a>
  );
};


// ─────────────────────────────────────────────────────────────────
// Preset C — "Studio" : Typographic, monospace developer-portfolio
// ─────────────────────────────────────────────────────────────────
const StudioPreset = ({ t }) => {
  const d = DENSITIES[t.density] || DENSITIES.regular;
  const dark = t.studioMode === 'dark';
  const bg = dark ? '#0d0d0e' : '#fafaf7';
  const fg = dark ? '#f5f5f0' : '#0d0d0e';
  const muted = dark ? 'rgba(245,245,240,0.55)' : 'rgba(13,13,14,0.55)';
  const line = dark ? 'rgba(245,245,240,0.13)' : 'rgba(13,13,14,0.13)';
  const accent = t.studioAccent;

  return (
    <div style={{
      background: bg, color: fg, minHeight: '100vh',
      fontFamily: '"Inter Tight", "Noto Sans JP", sans-serif',
    }}>
      {/* dense top metadata bar */}
      <div style={{
        borderBottom: `1px solid ${line}`,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 11,
        letterSpacing: '0.06em',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: `12px ${d.pad / 2}px`,
          display: 'flex', justifyContent: 'space-between',
          color: muted,
        }}>
          <span>YLAB / IOS DEVELOPER</span>
          <span style={{ display: 'flex', gap: 24 }}>
            <a href="#apps" style={{ textDecoration: 'none', color: 'inherit' }}>[APPS]</a>
            <a href="apps/katachi.html" style={{ textDecoration: 'none', color: 'inherit' }}>[PREFECTURE]</a>
            <a href="apps/gout.html" style={{ textDecoration: 'none', color: 'inherit' }}>[GOUT]</a>
          </span>
          <span>TOKYO · JST</span>
        </div>
      </div>

      {/* hero — huge type, asymmetric */}
      <header style={{
        maxWidth: 1280, margin: '0 auto',
        padding: `${d.hero}px ${d.pad / 2}px ${d.gap}px`,
      }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 12, color: muted, letterSpacing: '0.16em',
          marginBottom: 32,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>(01) — INDEX</span>
          <span>2026.05</span>
        </div>
        <h1 style={{
          fontSize: 'clamp(96px, 18vw, 280px)',
          fontWeight: 500,
          letterSpacing: '-0.05em',
          lineHeight: 0.85,
          margin: '0 0 48px',
          fontFamily: '"Inter Tight", sans-serif',
        }}>
          y<span style={{ color: accent }}>lab</span><span style={{ color: accent }}>.</span>
        </h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gap: 32,
          borderTop: `1px solid ${line}`,
          paddingTop: 28,
        }}>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: muted, letterSpacing: '0.16em' }}>
            ABOUT
          </div>
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 20, lineHeight: 1.45, letterSpacing: '-0.005em' }}>
              {BIO.ja}
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: muted }}>
              {BIO.en}
            </p>
          </div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: muted, letterSpacing: '0.16em', textAlign: 'right' }}>
            EST. 2025
          </div>
        </div>
      </header>

      {/* apps — long rows with mono metadata */}
      <section id="apps" style={{
        maxWidth: 1280, margin: '0 auto',
        padding: `${d.gap}px ${d.pad / 2}px ${d.gap}px`,
      }}>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11, color: muted, letterSpacing: '0.18em',
          display: 'grid',
          gridTemplateColumns: '60px 1fr 1fr 120px',
          gap: 32,
          paddingBottom: 16,
          borderBottom: `1px solid ${line}`,
        }}>
          <span>IDX</span><span>TITLE</span><span>SUMMARY</span><span style={{ textAlign: 'right' }}>STORE</span>
        </div>

        {APPS.map((app, i) => (
          <StudioAppRow key={app.id} app={app} index={i} cardStyle={t.cardStyle} accent={accent} line={line} muted={muted} fg={fg} />
        ))}
      </section>

      <FooterRow d={d} mode="studio" muted={muted} line={line} />
    </div>
  );
};

const StudioAppRow = ({ app, index, cardStyle, accent, line, muted, fg }) => {
  const { Icon, Screenshot } = app;
  const showScreenshot = cardStyle === 'screenshot';

  return (
    <a href={app.url} style={{
      textDecoration: 'none', color: 'inherit',
      display: 'grid',
      gridTemplateColumns: '60px 1fr 1fr 120px',
      gap: 32,
      padding: '40px 0',
      borderBottom: `1px solid ${line}`,
      alignItems: showScreenshot ? 'start' : 'center',
    }}>
      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, color: muted, paddingTop: 6 }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
        <Icon size={cardStyle === 'compact' ? 56 : 72} radius={0.22} />
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: cardStyle === 'compact' ? 22 : 28,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            lineHeight: 1.2,
            margin: '0 0 6px',
          }}>{app.titleJa}</h3>
          <div style={{ fontSize: 14, color: muted, fontFamily: '"JetBrains Mono", monospace', letterSpacing: '0.04em' }}>
            {app.titleEn}
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 4 }}>
        <p style={{ margin: '0 0 6px', fontSize: 16, lineHeight: 1.5 }}>{app.taglineJa}</p>
        <p style={{ margin: 0, fontSize: 13, color: muted, lineHeight: 1.5 }}>{app.taglineEn}</p>
        {showScreenshot && (
          <div style={{ marginTop: 28 }}>
            <Screenshot width={150} accent={app.accent} />
          </div>
        )}
      </div>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 12,
        letterSpacing: '0.06em',
        color: accent,
        textAlign: 'right',
        paddingTop: 8,
      }}>
        VIEW →
      </div>
    </a>
  );
};


// ─────────────────────────────────────────────────────────────────
// Shared bits
// ─────────────────────────────────────────────────────────────────
const SectionLabel = ({ children, mode }) => (
  <div style={{
    fontSize: 11,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    opacity: 0.5,
    fontFamily: '"Inter Tight", sans-serif',
    fontWeight: 500,
  }}>{children}</div>
);

const FooterRow = ({ d, mode, palette, fontSans, muted, line }) => {
  let bg = 'transparent', fg = 'inherit', border = 'rgba(0,0,0,0.08)';
  if (mode === 'paper') { border = `${palette.fg}22`; }
  if (mode === 'studio') { border = line; fg = muted; }

  return (
    <footer style={{
      maxWidth: mode === 'studio' ? 1280 : 1180,
      margin: '0 auto',
      padding: `40px ${d.pad / 2}px 60px`,
      borderTop: `1px solid ${border}`,
      display: 'flex', flexWrap: 'wrap', gap: 24,
      justifyContent: 'space-between', alignItems: 'baseline',
      fontFamily: mode === 'studio' ? '"JetBrains Mono", monospace' : (mode === 'paper' ? fontSans : '"Inter Tight", sans-serif'),
      fontSize: mode === 'studio' ? 11 : 13,
      color: mode === 'studio' ? muted : 'inherit',
      letterSpacing: mode === 'studio' ? '0.16em' : 'normal',
      textTransform: mode === 'studio' ? 'uppercase' : 'none',
      opacity: mode === 'studio' ? 1 : 0.6,
    }}>
      <div>© 2026 ylab</div>
      <div style={{ display: 'flex', gap: 24 }}>
        <a href="apps/katachi.html" style={{ textDecoration: 'none', color: 'inherit' }}>
          {mode === 'studio' ? '[PREFECTURE]' : '都道府クイズ'}
        </a>
        <a href="apps/gout.html" style={{ textDecoration: 'none', color: 'inherit' }}>
          {mode === 'studio' ? '[GOUT TRACKER]' : 'Gout Tracker'}
        </a>
      </div>
    </footer>
  );
};


// ─────────────────────────────────────────────────────────────────
// Root
// ─────────────────────────────────────────────────────────────────
const Site = ({ tweaks }) => {
  switch (tweaks.preset) {
    case 'paper':  return <PaperPreset t={tweaks} />;
    case 'studio': return <StudioPreset t={tweaks} />;
    default:       return <MonoPreset t={tweaks} />;
  }
};

Object.assign(window, { Site, APPS, BIO });

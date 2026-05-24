// Placeholder app icons rendered as SVG.
// These stand in for the real App Store icons — drop the real PNGs in later.

// Real icon images live in ./assets/. We render them as <img> and let the
// caller pass a size + a radius (fraction of size, iOS standard ~22.37%).
//
// Screenshots stay as SVG mocks until real screenshots are provided.

const PrefectureIcon = ({ size = 120, radius = 0.2237, src = 'assets/katachi-icon.png' }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size * radius,
      overflow: 'hidden',
      boxShadow: '0 0 0 1px rgba(0,0,0,0.06)',
      display: 'inline-block',
      verticalAlign: 'top',
    }}
  >
    <img
      src={src}
      alt="Prefecture Quiz icon"
      style={{
        display: 'block',
        width: '108%',
        height: '108%',
        marginLeft: '-4%',
        marginTop: '-4%',
        objectFit: 'cover',
      }}
    />
  </div>
);

const GoutIcon = ({ size = 120, radius = 0.2237, src = 'assets/gout-icon.png' }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size * radius,
      overflow: 'hidden',
      boxShadow: '0 0 0 1px rgba(0,0,0,0.06)',
      display: 'inline-block',
      verticalAlign: 'top',
    }}
  >
    <img
      src={src}
      alt="Gout Tracker icon"
      style={{
        display: 'block',
        width: '108%',
        height: '108%',
        marginLeft: '-4%',
        marginTop: '-4%',
        objectFit: 'cover',
      }}
    />
  </div>
);

// Phone-frame screenshot placeholder
const PhoneScreenshot = ({ width = 180, accent = '#e85d4a', children, tone = 'light' }) => {
  const bg = tone === 'light' ? '#fbf7f1' : '#1c1c1e';
  const fg = tone === 'light' ? '#1a1a1a' : '#f5f5f7';
  const height = width * (19.5 / 9);
  const radius = width * 0.14;
  return (
    <div style={{
      width, height,
      background: '#0a0a0a',
      borderRadius: radius,
      padding: width * 0.022,
      boxShadow: '0 30px 60px -20px rgba(0,0,0,0.25), 0 12px 24px -12px rgba(0,0,0,0.2)',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%',
        background: bg,
        color: fg,
        borderRadius: radius - width * 0.022,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Status bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: `${width * 0.035}px ${width * 0.08}px ${width * 0.015}px`,
          fontSize: width * 0.055,
          fontWeight: 600,
          fontFamily: '"Inter Tight", sans-serif',
        }}>
          <span>9:41</span>
          <span style={{ width: width * 0.18, height: width * 0.06, background: '#0a0a0a', borderRadius: width * 0.04 }} />
          <span style={{ opacity: 0.6, fontSize: width * 0.045 }}>●●●</span>
        </div>
        {children}
      </div>
    </div>
  );
};

const PrefectureScreenshot = ({ width = 180, accent = '#e85d4a' }) => (
  <PhoneScreenshot width={width} accent={accent}>
    <div style={{ flex: 1, padding: `${width * 0.05}px ${width * 0.06}px`, display: 'flex', flexDirection: 'column', gap: width * 0.04 }}>
      <div style={{ fontSize: width * 0.05, opacity: 0.5, fontFamily: '"Noto Sans JP", sans-serif' }}>第 12 問 / 47</div>
      <div style={{
        fontSize: width * 0.16,
        fontFamily: '"Noto Serif JP", serif',
        fontWeight: 600,
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}>京</div>
      <div style={{
        background: '#fff',
        borderRadius: width * 0.04,
        padding: width * 0.05,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(0,0,0,0.06)',
      }}>
        {/* simplified prefecture silhouette */}
        <svg width={width * 0.55} height={width * 0.55} viewBox="0 0 100 100">
          <path d="M 30 25 L 70 20 L 78 45 L 72 70 L 50 78 L 28 70 L 22 50 Z" fill={accent} opacity="0.85" />
        </svg>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: width * 0.025 }}>
        {['東京都', '京都府', '大阪府', '奈良県'].map((c, i) => (
          <div key={i} style={{
            background: i === 1 ? accent : '#fff',
            color: i === 1 ? '#fff' : '#1a1a1a',
            padding: `${width * 0.035}px`,
            borderRadius: width * 0.025,
            fontSize: width * 0.05,
            textAlign: 'center',
            fontFamily: '"Noto Sans JP", sans-serif',
            border: '1px solid rgba(0,0,0,0.06)',
            fontWeight: 500,
          }}>{c}</div>
        ))}
      </div>
    </div>
  </PhoneScreenshot>
);

const GoutScreenshot = ({ width = 180, accent = '#3a7bd5' }) => (
  <PhoneScreenshot width={width} accent={accent}>
    <div style={{ flex: 1, padding: `${width * 0.05}px ${width * 0.06}px`, display: 'flex', flexDirection: 'column', gap: width * 0.045 }}>
      <div style={{ fontSize: width * 0.055, opacity: 0.5 }}>Today</div>
      <div style={{ fontSize: width * 0.09, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Hydration</div>
      {/* Ring */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: `${width * 0.02}px 0` }}>
        <svg width={width * 0.55} height={width * 0.55} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="rgba(0,0,0,0.06)" strokeWidth="9" fill="none" />
          <circle cx="50" cy="50" r="40" stroke={accent} strokeWidth="9" fill="none"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={`${2 * Math.PI * 40 * 0.32}`}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          <text x="50" y="48" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1a1a1a" fontFamily='"Inter Tight", sans-serif'>1.7</text>
          <text x="50" y="62" textAnchor="middle" fontSize="6" opacity="0.5" fontFamily='"Inter Tight", sans-serif'>of 2.5 L</text>
        </svg>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: width * 0.02 }}>
        {[250, 350, 500, 750].map((ml, i) => (
          <div key={i} style={{
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: width * 0.025,
            padding: `${width * 0.03}px ${width * 0.01}px`,
            fontSize: width * 0.045,
            textAlign: 'center',
            fontWeight: 500,
          }}>{ml}<span style={{ opacity: 0.5, fontSize: width * 0.035 }}>ml</span></div>
        ))}
      </div>
    </div>
  </PhoneScreenshot>
);

Object.assign(window, {
  PrefectureIcon,
  GoutIcon,
  PhoneScreenshot,
  PrefectureScreenshot,
  GoutScreenshot,
});

// Root mount — design locked to Studio preset (compact density, blue accent).

const LOCKED_TWEAKS = {
  preset: 'studio',
  density: 'compact',
  cardStyle: 'icon',
  studioMode: 'light',
  studioAccent: '#3aaaff',
  // unused by studio preset but kept for completeness
  monoFont: 'sans',
  monoAccent: '#3aaaff',
  paperPalette: { bg: '#f3ede2', fg: '#2b2620', accent: '#b8492c' },
  paperFont: 'humanist',
};

ReactDOM.createRoot(document.getElementById('root'))
  .render(<window.Site tweaks={LOCKED_TWEAKS} />);

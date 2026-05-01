/* Site Tweaks — uses tweaks-panel.jsx primitives */

const SITE_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "rust",
  "font": "serif",
  "density": "default"
}/*EDITMODE-END*/;

function applySiteTweaks(t) {
  document.body.dataset.theme = t.theme;
  document.body.dataset.accent = t.accent;
  document.body.dataset.font = t.font;
  document.body.dataset.density = t.density;
}

function SiteTweaks() {
  const [t, setTweak] = useTweaks(SITE_TWEAK_DEFAULTS);
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme">
        <TweakRadio
          value={t.theme}
          options={[{value:'light',label:'Light'},{value:'dark',label:'Dark'}]}
          onChange={v => setTweak('theme', v)}
        />
      </TweakSection>
      <TweakSection label="Accent">
        <TweakRadio
          value={t.accent}
          options={[
            {value:'rust',label:'Rust'},
            {value:'ochre',label:'Ochre'},
            {value:'forest',label:'Forest'},
            {value:'ink',label:'Ink'},
          ]}
          onChange={v => setTweak('accent', v)}
        />
      </TweakSection>
      <TweakSection label="Headline font">
        <TweakRadio
          value={t.font}
          options={[
            {value:'serif',label:'Serif'},
            {value:'sans',label:'Sans'},
            {value:'mono',label:'Mono'},
          ]}
          onChange={v => setTweak('font', v)}
        />
      </TweakSection>
      <TweakSection label="Density">
        <TweakRadio
          value={t.density}
          options={[
            {value:'compact',label:'Compact'},
            {value:'default',label:'Default'},
            {value:'cozy',label:'Cozy'},
          ]}
          onChange={v => setTweak('density', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// Apply on first load
applySiteTweaks(SITE_TWEAK_DEFAULTS);

window.SiteTweaks = SiteTweaks;
window.SITE_TWEAK_DEFAULTS = SITE_TWEAK_DEFAULTS;
window.applySiteTweaks = applySiteTweaks;

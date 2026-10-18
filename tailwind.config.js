const config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "error-container": "#ffdad6",
            "on-secondary": "#ffffff",
            "inverse-surface": "#003734",
            "outline": "#6e7977",
            "on-tertiary-fixed": "#00201b",
            "inverse-on-surface": "#c3fcf5",
            "on-tertiary-fixed-variant": "#005046",
            "tertiary-fixed-dim": "#7ad7c6",
            "surface-container-lowest": "#ffffff",
            "primary-container": "#0f766e",
            "inverse-primary": "#80d5cb",
            "on-tertiary": "#ffffff",
            "on-primary-container": "#a3faef",
            "on-primary-fixed-variant": "#00504a",
            "tertiary-container": "#007769",
            "on-surface": "#00201e",
            "tertiary-fixed": "#96f3e1",
            "surface-dim": "#ade5df",
            "on-background": "#00201e",
            "secondary-fixed": "#cde5ff",
            "on-secondary-fixed-variant": "#004b74",
            "secondary": "#006399",
            "primary": "#005c55",
            "on-secondary-fixed": "#001d32",
            "on-secondary-container": "#004f7b",
            "background": "#e4fffb",
            "secondary-container": "#7bc2ff",
            "outline-variant": "#bdc9c6",
            "surface-container-highest": "#b5ede7",
            "on-primary-fixed": "#00201d",
            "surface-container": "#c1f9f3",
            "on-primary": "#ffffff",
            "tertiary": "#005c51",
            "on-surface-variant": "#3e4947",
            "surface-bright": "#e4fffb",
            "surface-variant": "#b5ede7",
            "surface-tint": "#006a63",
            "primary-fixed": "#9cf2e8",
            "primary-fixed-dim": "#80d5cb",
            "error": "#ba1a1a",
            "on-tertiary-container": "#9efbe9",
            "on-error-container": "#93000a",
            "surface": "#e4fffb",
            "secondary-fixed-dim": "#94ccff",
            "on-error": "#ffffff",
            "surface-container-low": "#c6fef8",
            "surface-container-high": "#bbf3ed"
          },
          "borderRadius": {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          "spacing": {
            "space-3xl": "6rem",
            "margin-desktop": "5rem",
            "space-md": "1rem",
            "gutter": "1.5rem",
            "space-sm": "0.5rem",
            "margin": "1.5rem",
            "space-lg": "1.5rem",
            "space-xl": "2.5rem",
            "space-xs": "0.25rem",
            "gutter-desktop": "2rem",
            "space-2xl": "4rem"
          },
          "fontFamily": {
            "label-lg": ["Inter", "sans-serif"],
            "body-sm": ["Inter", "sans-serif"],
            "price-headline": ["Inter", "sans-serif"],
            "headline-sm": ["Playfair Display", "serif"],
            "body-md": ["Inter", "sans-serif"],
            "headline-md": ["Playfair Display", "serif"],
            "body-xl": ["Inter", "sans-serif"],
            "headline-lg-mobile": ["Playfair Display", "serif"],
            "display-hero": ["Playfair Display", "serif"],
            "label-md": ["Inter", "sans-serif"],
            "headline-lg": ["Playfair Display", "serif"],
            "display-hero-mobile": ["Playfair Display", "serif"]
          },
          "fontSize": {
            "label-lg": ["14px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "600" }],
            "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
            "price-headline": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
            "headline-sm": ["22px", { "lineHeight": "30px", "fontWeight": "600" }],
            "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
            "headline-md": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
            "body-xl": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
            "headline-lg-mobile": ["28px", { "lineHeight": "36px", "fontWeight": "600" }],
            "display-hero": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "700" }],
            "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.03em", "fontWeight": "600" }],
            "headline-lg": ["40px", { "lineHeight": "48px", "letterSpacing": "-0.015em", "fontWeight": "600" }],
            "display-hero-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.01em", "fontWeight": "700" }]
          }
        }
      }
    };
config.content = ['./index.html'];
// <<< otimizar-plugin
config.plugins = [function ({ addUtilities }) {
  addUtilities({
      '.glass-panel': { 'background': 'rgba(255, 255, 255, 0.85)', 'backdropFilter': 'blur(16px)', 'WebkitBackdropFilter': 'blur(16px)', 'border': '1px solid rgba(153, 246, 228, 0.4)', 'boxShadow': '0 20px 40px -15px rgba(15, 118, 110, 0.12)' },
      '.custom-card-shadow': { 'boxShadow': '0 4px 6px -1px rgba(15, 118, 110, 0.04), 0 2px 4px -2px rgba(15, 118, 110, 0.03)' },
      '.custom-card-hover': { 'transition': 'all 0.25s ease-in-out' },
  });
}];
// >>> otimizar-plugin
module.exports = config;

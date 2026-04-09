import { create } from 'twrnc';

const config = {
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#ff9190",
        "error-container": "#b92902",
        "on-error-container": "#ffd2c8",
        "on-surface": "#ffffff",
        "primary-fixed": "#cafd00",
        "secondary-fixed": "#00f4fe",
        "inverse-on-surface": "#565555",
        "surface-variant": "#262626",
        "surface-bright": "#2c2c2c",
        "on-primary-fixed": "#3a4a00",
        "on-secondary-fixed": "#004346",
        "on-secondary-container": "#dffdff",
        "on-primary-container": "#4a5e00",
        "background": "#0e0e0e",
        "error-dim": "#d53d18",
        "inverse-primary": "#516700",
        "surface-container-high": "#20201f",
        "surface": "#0e0e0e",
        "on-surface-variant": "#adaaaa",
        "on-primary-fixed-variant": "#526900",
        "primary": "#f3ffca",
        "on-primary": "#516700",
        "secondary-dim": "#00e5ee",
        "surface-dim": "#0e0e0e",
        "tertiary-fixed-dim": "#fc7c7d",
        "on-tertiary-fixed": "#3a0006",
        "inverse-surface": "#fcf9f8",
        "tertiary-container": "#ff7f7f",
        "on-tertiary-container": "#58000d",
        "outline": "#767575",
        "on-secondary-fixed-variant": "#006266",
        "surface-container-highest": "#262626",
        "on-background": "#ffffff",
        "primary-container": "#cafd00",
        "on-error": "#450900",
        "primary-dim": "#beee00",
        "surface-container-lowest": "#000000",
        "tertiary": "#ff9694",
        "secondary": "#00f4fe",
        "surface-container": "#1a1a1a",
        "surface-container-low": "#131313",
        "tertiary-dim": "#f57778",
        "primary-fixed-dim": "#beee00",
        "outline-variant": "#484847",
        "on-secondary": "#00575b",
        "on-tertiary-fixed-variant": "#71141c",
        "error": "#ff7351",
        "secondary-fixed-dim": "#00e5ee",
        "secondary-container": "#00696e",
        "on-tertiary": "#680c16",
        "surface-tint": "#f3ffca"
      },
      fontFamily: {
        headline: ['SpaceGrotesk'],
        body: ['Manrope'],
        label: ['Inter'],
      }
    }
  }
};

const tw = create(config);
export default tw;

import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    dark: false,
    options: { customProperties: true },
    themes: {
      light: {
        primary: "#491AA6",
        secondary: "#306579",
        accent: "#794AC9",
        error: "#AC1B11",
        info: "#44A1C1",
        success: "#0AAEA0",
        warning: "#F2B853",
        background: "#F5F8FA",
        "ui-background": "#FFFFFF",
        "primary-link": "#0050c7",
        "primary-text": "#12313A",
        "primary-border": "#D9E4E8",
      },
      dark: {
        primary: "#9F70E4",
        secondary: "#89CCD6",
        accent: "#794AC9",
        error: "#E68669",
        info: "#90E1EC",
        success: "#64E6C3",
        warning: "#FBDE98",
        background: "#0f0f0f",
        "ui-background": "#272727",
        "primary-link": "#5FA4EE",
        "primary-text": "#72BDC3",
        "primary-border": "#D9E4E8",
      },
    },
  },
});

export default vuetify;

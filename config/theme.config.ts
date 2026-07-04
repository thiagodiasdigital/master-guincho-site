export type ThemeConfigTemplate = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  buttons: {
    primary: string;
    secondary: string;
  };
  overlay: {
    hero: string;
  };
};

export const themeConfigTemplate: ThemeConfigTemplate = {
  colors: {
    primary: "#d12b1f",
    secondary: "#f2b705",
    background: "#08111d",
    text: "#f7fafc"
  },
  fonts: {
    heading: 'Arial Black, Arial, sans-serif',
    body: 'Arial, Helvetica, sans-serif'
  },
  buttons: {
    primary: "rounded-md px-6 py-3 font-bold",
    secondary: "rounded-md border px-6 py-3 font-bold"
  },
  overlay: {
    hero: "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.62) 100%)"
  }
};

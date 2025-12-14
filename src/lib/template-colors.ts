// Template VSU Official Colors from Brand Book
export const VSU_COLORS = {
  // Green Variants
  darkGreen: {
    hex: "#17321A",
    rgb: "rgb(23, 50, 26)",
    pantone: "5535 C",
  },
  green: {
    hex: "#146939",
    rgb: "rgb(20, 105, 57)",
    pantone: "349 C",
  },
  lightGreen: {
    hex: "#00954f",
    rgb: "rgb(0, 149, 79)",
    pantone: "355 C",
  },
  // Yellow/Gold Variants
  goldenYellow: {
    hex: "#FDC530",
    rgb: "rgb(253, 197, 48)",
    pantone: "7548 C",
  },
  cornYellow: {
    hex: "#FCD83D",
    rgb: "rgb(252, 216, 61)",
    pantone: "115 C",
  },
  yellow: {
    hex: "#FFE800",
    rgb: "rgb(255, 232, 0)",
    pantone: "803 C",
  },
} as const;

// Tailwind CSS custom colors
export const tailwindVSUColors = {
  "vsu-dark-green": VSU_COLORS.darkGreen.hex,
  "vsu-green": VSU_COLORS.green.hex,
  "vsu-light-green": VSU_COLORS.lightGreen.hex,
  "vsu-golden": VSU_COLORS.goldenYellow.hex,
  "vsu-corn": VSU_COLORS.cornYellow.hex,
  "vsu-yellow": VSU_COLORS.yellow.hex,
};

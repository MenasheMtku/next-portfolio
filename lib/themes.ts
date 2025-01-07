// In /lib/themes.ts
export type ThemeMode = "light" | "dark";

export type ThemeColors = {
  background: string;
  text: string;
  secondaryText: string;
  border: string;
  hover: string;
};

export const themes: Record<ThemeMode, ThemeColors> = {
  light: {
    background: "bg-white",
    text: "text-[#24292f]",
    secondaryText: "text-[#57606a]",
    border: "border-[#d0d7de]",
    hover: "hover:bg-[#f6f8fa]",
  },
  dark: {
    background: "bg-[#0d1117]",
    text: "text-[#c9d1d9]",
    secondaryText: "text-[#8b949e]",
    border: "border-[#30363d]",
    hover: "hover:bg-[#21262d]",
  },
};

import { useEffect } from "react";
import { useThemeStore } from "@/utils/theme";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";
// import { ThemeMode } from "@/lib/themes";

// interface ThemeContextType {
//   theme: ThemeMode;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType>({
//   theme: "light",
//   toggleTheme: () => {},
// });

// export const useTheme = () => useContext(ThemeContext);

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// export default function ThemeProvider({ children }: ThemeProviderProps) {
//   const [theme, setTheme] = useState<ThemeMode>("light");

//   useEffect(() => {
//     const savedTheme = (localStorage.getItem("theme") as ThemeMode) || "light";
//     setTheme(savedTheme);
//     document.documentElement.classList.toggle("dark", savedTheme === "dark");
//   }, []);

//   const toggleTheme = () => {
//     const newTheme: ThemeMode = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark");
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

import { useThemeStore, Theme } from "@/utils/theme";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa"; // Import icons

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();
  const themes: Theme[] = ["light", "dark", "system"];

  const getIcon = (theme: Theme) => {
    switch (theme) {
      case "light":
        return <FaSun />;
      case "dark":
        return <FaMoon />;
      case "system":
        return <FaDesktop />;
      default:
        return null;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild className="rounded">
        <Button className="bg-secondary text-muted">{getIcon(theme)}</Button>
      </PopoverTrigger>
      <PopoverContent
        side="left"
        align="end"
        className="mt-2 w-auto border-0 p-2"
      >
        <div className="flex flex-col gap-2">
          {themes.map((t) => (
            <Button
              key={t}
              onClick={() => setTheme(t)}
              className={`w-full rounded px-2 py-0 ${
                theme === t
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {getIcon(t)} {t.charAt(0).toUpperCase() + t.slice(1)}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeToggle;

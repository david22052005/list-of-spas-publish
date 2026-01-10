import useDarkMode from '../hooks/useDarkMode';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="rounded-full p-2 bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}

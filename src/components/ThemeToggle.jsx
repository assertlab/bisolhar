import useTheme from '../hooks/useTheme';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="bg-white hover:bg-gray-100 text-shark border border-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm p-2.5 inline-flex items-center transition-colors"
      title={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;

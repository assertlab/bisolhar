import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => handleLanguageChange('pt')}
        className={`px-2 py-1 text-xs font-medium rounded ${
          i18n.language === 'pt'
            ? 'bg-ocean text-white'
            : 'bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-500'
        } transition-colors`}
        title={t('language.pt')}
      >
        {t('language.pt')}
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 text-xs font-medium rounded ${
          i18n.language === 'en'
            ? 'bg-ocean text-white'
            : 'bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-500'
        } transition-colors`}
        title={t('language.en')}
      >
        {t('language.en')}
      </button>
    </div>
  );
}

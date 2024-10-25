import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import useDarkMode from '../hooks/useDarkMode';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDark, setIsDark] = useDarkMode();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="p-4 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">{t('welcome')}</h1>
      <div className="flex space-x-4 items-center">
        <button onClick={toggleLanguage} className="p-2 bg-gray-200 rounded-md dark:bg-gray-600">
          {i18n.language === 'en' ? 'FR' : 'EN'}
        </button>
        <button onClick={toggleDarkMode} className="p-2 bg-gray-200 rounded-md dark:bg-gray-600">
          {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/context';
import LanguageSwitcher from './LanguageSwitcher';

export default function NavBar() {
  const { t } = useI18n();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-18 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/20 shadow-md">
              <img
                src="/IMG_2951.jpg"
                alt={t('nav.logo.alt')}
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.1) brightness(1.05)' }}
              />
            </div>
            <span className="hidden sm:inline text-white font-semibold tracking-wide">BiOrtino</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-4 gap-y-2">
              <Link to="/" className="text-white hover:text-gray-200 uppercase tracking-wide text-xs sm:text-sm">{t('nav.home')}</Link>
              <Link to="/storia" className="text-white hover:text-gray-200 uppercase tracking-wide text-xs sm:text-sm">{t('nav.story')}</Link>
              <Link to="/shop" className="text-white hover:text-gray-200 uppercase tracking-wide text-xs sm:text-sm">{t('nav.shop')}</Link>
              <Link to="/contatti" className="text-white hover:text-gray-200 uppercase tracking-wide text-xs sm:text-sm">{t('nav.contacts')}</Link>
            </div>
            <div className="mt-1 sm:mt-0 w-full flex justify-end sm:w-auto">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

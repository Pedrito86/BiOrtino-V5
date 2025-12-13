import { useI18n } from '../i18n/context';

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center gap-1 sm:gap-2 shrink-0">
      <button
        onClick={() => setLang('it')}
        aria-label="Italiano"
        className={`rounded-md text-xs sm:text-sm leading-none px-1 py-px sm:px-2 sm:py-1 ${lang === 'it' ? 'bg-white text-gray-900' : 'bg-white/10 text-white border border-white/20'}`}
      >
        🇮🇹
      </button>
      <button
        onClick={() => setLang('en')}
        aria-label="English"
        className={`rounded-md text-xs sm:text-sm leading-none px-1 py-px sm:px-2 sm:py-1 ${lang === 'en' ? 'bg-white text-gray-900' : 'bg-white/10 text-white border border-white/20'}`}
      >
        🇬🇧
      </button>
    </div>
  );
}

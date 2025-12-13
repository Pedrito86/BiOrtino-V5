import { useEffect, useMemo, useState } from 'react';
import { translations, Lang } from './translations';
import { I18nContext } from './context';
const STORAGE_KEY = 'lang';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('it');

  useEffect(() => {
    const v = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (v === 'it' || v === 'en') setLang(v);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const t = useMemo(() => {
    const dict = translations[lang];
    return (key: string) => dict[key] ?? key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  );
}

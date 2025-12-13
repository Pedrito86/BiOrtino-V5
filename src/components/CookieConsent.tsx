import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/context';

type ConsentDecision = 'accepted_all' | 'rejected_all' | 'custom';

interface Consent {
  necessary: boolean;
  preference: boolean;
  analytics: boolean;
  marketing: boolean;
  decision: ConsentDecision;
  timestamp: number;
}

const STORAGE_KEY = 'cookie-consent';

export default function CookieConsent() {
  const { t } = useI18n();
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consent, setConsent] = useState<Consent | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v) {
        const parsed = JSON.parse(v) as Consent;
        setConsent(parsed);
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      setShowPreferences(true);
      setShowBanner(false);
    };
    window.addEventListener('open-cookie-preferences', handler);
    return () => window.removeEventListener('open-cookie-preferences', handler);
  }, []);

  const saveConsent = (c: Consent) => {
    setConsent(c);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, preference: true, analytics: true, marketing: true, decision: 'accepted_all', timestamp: Date.now() });
  };

  const rejectAll = () => {
    saveConsent({ necessary: true, preference: false, analytics: false, marketing: false, decision: 'rejected_all', timestamp: Date.now() });
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const [prefPreference, setPrefPreference] = useState(false);
  const [prefAnalytics, setPrefAnalytics] = useState(false);
  const [prefMarketing, setPrefMarketing] = useState(false);

  useEffect(() => {
    if (consent) {
      setPrefPreference(consent.preference ?? false);
      setPrefAnalytics(consent.analytics ?? false);
      setPrefMarketing(consent.marketing ?? false);
    }
  }, [consent]);

  if (!showBanner && !showPreferences) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {showBanner && (
        <div className="pointer-events-auto fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 bg-black/60 backdrop-blur rounded-2xl border border-white/10 shadow-2xl p-5 sm:p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-sm sm:text-base">
              <p className="text-white font-semibold uppercase tracking-wide">{t('cookies.banner.title')}</p>
              <p className="text-gray-200 mt-1">{t('cookies.banner.text1')}</p>
              <p className="text-gray-200 mt-2">{t('cookies.banner.text2')}</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={rejectAll} className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold">{t('cookies.reject')}</button>
              <button onClick={acceptAll} className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold">{t('cookies.accept')}</button>
              <button onClick={openPreferences} className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold">{t('cookies.customize')}</button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="pointer-events-auto fixed inset-0 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowPreferences(false)} />
          <div className="relative w-full max-w-2xl bg-black/70 text-white rounded-2xl border border-white/10 shadow-2xl">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{t('cookies.prefs.title')}</h2>
              <p className="text-gray-300 text-sm mb-6">{t('cookies.prefs.desc')}</p>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div>
                    <p className="font-semibold">{t('cookies.type.necessary')}</p>
                    <p className="text-gray-300 text-sm">{t('cookies.type.necessary.desc')}</p>
                  </div>
                  <label className="inline-flex items-center cursor-not-allowed">
                    <input type="checkbox" checked readOnly className="w-5 h-5 accent-white" />
                  </label>
                </div>
                <div className="flex items-start justify-between gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div>
                    <p className="font-semibold">{t('cookies.type.preference')}</p>
                    <p className="text-gray-300 text-sm">{t('cookies.type.preference.desc')}</p>
                  </div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={prefPreference}
                      onChange={(e) => setPrefPreference(e.target.checked)}
                      className="w-5 h-5 accent-white"
                    />
                  </label>
                </div>
                <div className="flex items-start justify-between gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div>
                    <p className="font-semibold">{t('cookies.type.analytics')}</p>
                    <p className="text-gray-300 text-sm">{t('cookies.type.analytics.desc')}</p>
                  </div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={prefAnalytics}
                      onChange={(e) => setPrefAnalytics(e.target.checked)}
                      className="w-5 h-5 accent-white"
                    />
                  </label>
                </div>
                <div className="flex items-start justify-between gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div>
                    <p className="font-semibold">{t('cookies.type.marketing')}</p>
                    <p className="text-gray-300 text-sm">{t('cookies.type.marketing.desc')}</p>
                  </div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={prefMarketing}
                      onChange={(e) => setPrefMarketing(e.target.checked)}
                      className="w-5 h-5 accent-white"
                    />
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button onClick={() => setShowPreferences(false)} className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold">{t('cookies.close')}</button>
                <button
                  onClick={() => saveConsent({ necessary: true, preference: prefPreference, analytics: prefAnalytics, marketing: prefMarketing, decision: 'custom', timestamp: Date.now() })}
                  className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold"
                >
                  {t('cookies.save')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

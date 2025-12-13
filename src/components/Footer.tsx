import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useI18n } from '../i18n/context';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[#1a1d1e] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">BiOrtino Società Agricola srl</h3>
          <p className="text-gray-400 mb-6">{t('footer.tagline')}</p>
          <div className="border-t border-white pt-8">
            <div className="flex flex-col items-center gap-4">
              <p className="text-gray-300">
                Via Fiorentina 19/b 50063 Figline e Incisa Valdarno (FI) P.IVA 06880710485<br />
                biortinofficinalis@gmail.com<br />
                biortino@pec.it<br />
                +39 3357629767
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link to="/privacy" className="text-gray-300 hover:text-white">{t('footer.privacy')}</Link>
                <button
                  onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
                  className="text-gray-300 hover:text-white"
                >
                  {t('footer.cookies')}
                </button>
              </div>
              <a
                href="https://www.instagram.com/biortino/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profilo Instagram BiOrtino"
                className="text-gray-300 hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <div className="w-full border-t border-white"></div>
              <p className="text-gray-500">©2025 All rights reserved • BiOrtino Società Agricola srl</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

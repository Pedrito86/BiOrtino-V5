import { ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n/context';

export default function Hero() {
  const { t } = useI18n();
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#2b2f30] to-[#1a1d1e]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-full opacity-40"
        style={{
          backgroundImage: `url('/IMG_2952.jpg')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-8">
          <div className="mb-8 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative w-[18.2rem] h-[18.2rem] sm:w-[20.8rem] sm:h-[20.8rem] rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent blur-xl opacity-60" />
              <img
                src="/IMG_2951.jpg"
                alt={t('nav.logo.alt')}
                className="relative w-full h-full object-cover grayscale-full contrast-enhance opacity-90 radial-fade"
                style={{
                  filter: 'grayscale(100%) contrast(1.1) brightness(1.05)',
                  objectPosition: '50% 52%',
                  transform: 'scale(1.28)',
                }}
              />
              <div className="absolute inset-0 rounded-full border-4 border-white/60 shadow-[0_0_0_8px_rgba(255,255,255,0.08)] pointer-events-none" />
            </div>
          </div>

          <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="text-sm sm:text-base uppercase tracking-widest font-light text-gray-300 letter-spacing-wider">
              {t('hero.tagline')}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('prodotti')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 opacity-0 animate-fade-in bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 uppercase tracking-wide"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          {t('hero.cta')}
        </button>

        <div className="mt-6 flex justify-center animate-bounce opacity-0" style={{ animation: 'bounce 2s infinite, fadeInDelay 1.2s forwards' }}>
          <ChevronDown className="w-10 h-10 text-white opacity-70" />
        </div>
      </div>

      <style>{`
        @keyframes fadeInDelay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

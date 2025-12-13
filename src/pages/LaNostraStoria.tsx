import { Leaf, Sparkles, Heart, Sprout } from 'lucide-react';
import Footer from '../components/Footer';
import { useI18n } from '../i18n/context';

export default function LaNostraStoria() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b2f30] to-[#1a1d1e] text-white pt-20">
      <section className="relative h-[360px] sm:h-[420px] overflow-hidden">
        <img
          src="/le%20nostre%20colline.jpg"
          alt={t('story.hero.alt')}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('story.title')}</h1>
            <div className="h-1 w-24 bg-white mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">{t('story.intro')}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg h-full">
            <h2 className="text-3xl font-bold mb-4">{t('story.roots.title')}</h2>
            <div className="h-1 w-20 bg-white mb-6"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('story.roots.lead')}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <Leaf className="w-8 h-8 text-white mb-2" />
                <h3 className="text-white font-semibold mb-1">{t('story.roots.regen')}</h3>
                <p className="text-gray-300 text-sm">{t('story.roots.regen.desc')}</p>
              </div>
              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <Sparkles className="w-8 h-8 text-white mb-2" />
                <h3 className="text-white font-semibold mb-1">{t('story.roots.craft')}</h3>
                <p className="text-gray-300 text-sm">{t('story.roots.craft.desc')}</p>
              </div>
              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <Heart className="w-8 h-8 text-white mb-2" />
                <h3 className="text-white font-semibold mb-1">{t('story.roots.passion')}</h3>
                <p className="text-gray-300 text-sm">{t('story.roots.passion.desc')}</p>
              </div>
              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <Sprout className="w-8 h-8 text-white mb-2" />
                <h3 className="text-white font-semibold mb-1">{t('story.roots.future')}</h3>
                <p className="text-gray-300 text-sm">{t('story.roots.future.desc')}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-full">
            <img src="/IMG_2952.jpg" alt={t('story.image.alt')} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

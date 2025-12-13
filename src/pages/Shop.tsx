import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { Droplet, Award, Truck } from 'lucide-react';
import { useI18n } from '../i18n/context';

export default function Shop() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b2f30] to-[#1a1d1e] text-white pt-20">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('shop.title')}</h1>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">{t('shop.lead')}</p>
        </div>
      </section>

      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img src="/le%20nostre%20colline.jpg" alt={t('shop.banner.alt')} className="absolute inset-0 w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />
            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <p className="text-white text-lg">{t('shop.banner.text')}</p>
                <a href="mailto:biortinofficinalis@gmail.com?subject=Richiesta%20disponibilita%20prodotti" className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-2 rounded-lg font-semibold">{t('shop.banner.cta')}</a>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Droplet className="w-8 h-8 text-white mx-auto mb-2" />
                  <h3 className="text-white font-semibold mb-1">{t('fresh.benefit.1')}</h3>
                  <p className="text-gray-300 text-sm">{t('fresh.benefit.1.desc')}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Award className="w-8 h-8 text-white mx-auto mb-2" />
                  <h3 className="text-white font-semibold mb-1">{t('fresh.benefit.3')}</h3>
                  <p className="text-gray-300 text-sm">{t('organic.feature.cycles.desc')}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Truck className="w-8 h-8 text-white mx-auto mb-2" />
                  <h3 className="text-white font-semibold mb-1">{t('shop.info.shipping')}</h3>
                  <p className="text-gray-300 text-sm">{t('shop.info.shipping.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="bg-black/40 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">{t('shop.info.harvest')}</h3>
            <p className="text-gray-300 text-sm">{t('shop.info.harvest.desc')}</p>
          </div>
          <div className="bg-black/40 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">{t('shop.info.storage')}</h3>
            <p className="text-gray-300 text-sm">{t('shop.info.storage.desc')}</p>
          </div>
          <div className="bg-black/40 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">{t('shop.info.shipping')}</h3>
            <p className="text-gray-300 text-sm">{t('shop.info.shipping.desc')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

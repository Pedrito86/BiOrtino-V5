import { Leaf, Sprout, Wind, Heart } from 'lucide-react';
import { useI18n } from '../i18n/context';

export default function OrganicFarming() {
  const { t } = useI18n();
  const features = [
    {
      icon: Sprout,
      title: t('organic.feature.soil'),
      description: t('organic.feature.soil.desc')
    },
    {
      icon: Leaf,
      title: t('organic.feature.bio'),
      description: t('organic.feature.bio.desc')
    },
    {
      icon: Wind,
      title: t('organic.feature.comp'),
      description: t('organic.feature.comp.desc')
    },
    {
      icon: Heart,
      title: t('organic.feature.cycles'),
      description: t('organic.feature.cycles.desc')
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('organic.title')}
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('organic.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-white/20 shadow-sm">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-black/40 text-white rounded-2xl p-8 sm:p-12 shadow-2xl border border-white/10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            {t('organic.commitment')}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="border-r border-white/10 last:border-r-0 px-4">
              <p className="text-4xl font-bold mb-2">0</p>
              <p className="text-gray-300">{t('organic.metrics.pesticidi')}</p>
            </div>
            <div className="border-r border-white/10 last:border-r-0 px-4">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-gray-300">{t('organic.metrics.metodi')}</p>
            </div>
            <div className="px-4">
              <p className="text-4xl font-bold mb-2">∞</p>
              <p className="text-gray-300">{t('organic.metrics.rispetto')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

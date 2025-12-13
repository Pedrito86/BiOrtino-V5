import { Clock, Droplet, Award, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/context';

export default function FreshOil() {
  const { t } = useI18n();
  const benefits = [
    {
      icon: Clock,
      title: t('fresh.benefit.1'),
      description: t('fresh.benefit.1.desc')
    },
    {
      icon: Droplet,
      title: t('fresh.benefit.2'),
      description: t('fresh.benefit.2.desc')
    },
    {
      icon: Award,
      title: t('fresh.benefit.3'),
      description: t('fresh.benefit.3.desc')
    },
    {
      icon: Sparkles,
      title: t('fresh.benefit.4'),
      description: t('fresh.benefit.4.desc')
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('fresh.title')}
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] justify-between">
            <p className="text-2xl sm:text-3xl text-gray-300 mb-6 leading-relaxed max-w-2xl">
              {t('fresh.lead')}
            </p>
            <ul className="space-y-4 mb-8 max-w-xl text-left">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 mt-1 border border-white/30">
                  <span className="text-gray-900 text-lg">✓</span>
                </span>
                <span className="text-gray-300 text-xl sm:text-2xl">{t('fresh.b1')}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 mt-1 border border-white/30">
                  <span className="text-gray-900 text-lg">✓</span>
                </span>
                <span className="text-gray-300 text-xl sm:text-2xl">{t('fresh.b2')}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 mt-1 border border-white/30">
                  <span className="text-gray-900 text-lg">✓</span>
                </span>
                <span className="text-gray-300 text-xl sm:text-2xl">{t('fresh.b3')}</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 mt-1 border border-white/30">
                  <span className="text-gray-900 text-lg">✓</span>
                </span>
                <span className="text-gray-300 text-xl sm:text-2xl">{t('fresh.b4')}</span>
              </li>
            </ul>

            <div className="bg-white/10 border-l-4 border-white/30 p-7 rounded-r-xl shadow-md max-w-2xl text-center">
              <p className="text-white italic font-semibold text-2xl sm:text-3xl leading-relaxed">
                {t('fresh.guarantee.full')}
              </p>
            </div>
          </div>

          <div className="relative max-w-xl w-full ml-auto flex flex-col h-full justify-between min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/olio-extravergine.jpg"
                alt={t('fresh.image.alt')}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 mt-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white/5 p-6 sm:p-6 rounded-xl border border-white/10 shadow-md min-h-36 flex flex-col">
                    <Icon className="w-9 h-9 text-white mb-3" />
                    <h4 className="font-semibold text-white text-sm sm:text-base mb-2">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

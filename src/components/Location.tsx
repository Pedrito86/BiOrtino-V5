import { MapPin, Phone, Clock, MessageCircle, Instagram } from 'lucide-react';
import { useI18n } from '../i18n/context';

export default function Location() {
  const { t } = useI18n();
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('location.title')}
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col gap-6 min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] justify-between">
            <div className="bg-white/5 p-5 rounded-2xl shadow-lg border border-white/10">
              <div className="flex items-start space-x-4 mb-3">
                <div className="bg-white p-2 rounded-full border border-white/20 shadow-sm">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{t('location.where')}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {t('location.address.line1')}<br />
                    {t('location.address.line2')}
                  </p>
                  <div className="mt-3">
                    <a
                      href="https://www.google.com/maps/search/Le+Corti+Firenze"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-900 px-4 py-2 rounded-lg text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {t('location.openMaps')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl shadow-lg border border-white/10">
              <div className="flex items-start space-x-4 mb-3">
                <div className="bg-white p-2 rounded-full border border-white/20 shadow-sm">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('location.hours')}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {t('location.hours.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl shadow-lg border border-white/10">
              <div className="flex items-start space-x-4 mb-3">
                <div className="bg-white p-2 rounded-full border border-white/20 shadow-sm">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('location.contacts')}</h3>
                  <a
                    href="tel:+39 3357629767"
                    className="text-gray-300 text-lg hover:text-white transition-colors mb-3 block"
                  >
                    +39 335 7629767
                  </a>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="https://wa.me/393357629767"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-900 px-4 py-2 rounded-lg text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      aria-label="Chat WhatsApp BiOrtino"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </a>
                    <a
                      href="https://www.instagram.com/biortino/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-900 px-4 py-2 rounded-lg text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      aria-label="Profilo Instagram BiOrtino"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/le%20nostre%20colline.jpg"
              alt={t('location.hills.alt')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2">{t('location.hills')}</h3>
                <p className="text-lg text-gray-200">
                  {t('location.hills.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

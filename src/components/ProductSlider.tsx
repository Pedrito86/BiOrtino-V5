import { useState } from 'react';
import { useI18n } from '../i18n/context';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  size: string;
  description: string;
  image: string;
  color: string;
}

export default function ProductSlider() {
  const { t, lang } = useI18n();
  
  const products: Product[] = [
    {
      size: '100 ml',
      description: t('slider.product.100.desc'),
      image: '/100ml.jpg',
      color: 'from-gray-50 to-gray-100'
    },
    {
      size: '250 ml',
      description: t('slider.product.250.desc'),
      image: '/250ml.jpg',
      color: 'from-gray-50 to-gray-100'
    },
    {
      size: '500 ml',
      description: t('slider.product.500.desc') ,
      image: '/500ml.jpg',
      color: 'from-gray-50 to-gray-100'
    },
    {
      size: '750 ml',
      description: t('slider.product.750.desc'),
      image: '/750ml.jpg',
      color: 'from-gray-50 to-gray-100'
    },
    {
      size: t('slider.size.3l'),
      description: t('slider.product.3l.desc'),
      image: '/3lt.jpg',
      color: 'from-gray-50 to-gray-100'
    },
    {
      size: t('slider.size.5l'),
      description: t('slider.product.5l.desc'),
      image: '/5lt.jpg',
      color: 'from-gray-50 to-gray-100'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="prodotti" className="py-20 bg-gradient-to-b from-[#2b2f30] to-[#1a1d1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('slider.title')}
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            {t('slider.subtitle')}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#2b2f30] to-[#1a1d1e] p-6 sm:p-10 lg:p-12 min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] flex flex-col items-center justify-center">
                    <div className="bg-white/5 rounded-xl shadow-lg p-6 max-w-lg w-full border border-white/10 overflow-hidden">
                      <div className="mb-6 flex justify-center">
                        <img
                          src={product.image}
                          alt={`${lang === 'it' ? 'Bottiglia' : 'Bottle'} ${product.size}`}
                          className="h-80 sm:h-96 w-auto object-contain rounded-xl shadow-xl"
                        />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-center">
                        {lang === 'it' ? `L’Olio ${product.size}` : `Olive Oil ${product.size}`}
                      </h3>
                      <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-base">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label={t('slider.prev')}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label={t('slider.next')}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

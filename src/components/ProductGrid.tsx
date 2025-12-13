import { useI18n } from '../i18n/context';

interface Product {
  size: string;
  description: string;
  image: string;
}

export default function ProductGrid() {
  const { t, lang } = useI18n();
  const products: Product[] = [
    { size: '100 ml', description: t('slider.product.100.desc'), image: '/100ml.jpg' },
    { size: '250 ml', description: t('slider.product.250.desc'), image: '/250ml.jpg' },
    { size: '500 ml', description: t('slider.product.500.desc'), image: '/500ml.jpg' },
    { size: '750 ml', description: t('slider.product.750.desc'), image: '/750ml.jpg' },
    { size: t('slider.size.3l'), description: t('slider.product.3l.desc'), image: '/3lt.jpg' },
    { size: t('slider.size.5l'), description: t('slider.product.5l.desc'), image: '/5lt.jpg' }
  ];

  return (
    <section id="prodotti" className="py-20 bg-gradient-to-b from-[#2b2f30] to-[#1a1d1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('slider.title')}</h2>
          <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">{t('slider.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white/5 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-[#2b2f30] to-[#1a1d1e] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={`${lang === 'it' ? 'Prodotto' : 'Product'} ${product.size}`}
                  className="max-h-[70%] max-w-[70%] object-contain rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{lang === 'it' ? `L’Olio ${product.size}` : `Olive Oil ${product.size}`}</h3>
                <p className="text-gray-300 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

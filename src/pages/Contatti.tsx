import Location from '../components/Location';
import Footer from '../components/Footer';
import { useI18n } from '../i18n/context';

export default function Contatti() {
  const { t } = useI18n();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = encodeURIComponent(String(data.get('nome') || ''));
    const email = encodeURIComponent(String(data.get('email') || ''));
    const messaggio = encodeURIComponent(String(data.get('messaggio') || ''));
    const subject = `${t('contacts.mail.subject')} ${nome}`;
    const body = `Email: ${email}%0A%0AMessaggio:%0A${messaggio}`;
    window.location.href = `mailto:biortinofficinalis@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b2f30] to-[#1a1d1e] text-white pt-20">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg h-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('contacts.title')}</h1>
            <div className="h-1 w-24 bg-white mb-6"></div>
            <p className="text-gray-300 mb-6">{t('contacts.lead')}</p>
            <div className="space-y-4">
              <a href="tel:+393357629767" className="block text-lg text-white">+39 335 7629767</a>
              <a href="mailto:biortinofficinalis@gmail.com" className="block text-lg text-white">biortinofficinalis@gmail.com</a>
              <a href="https://www.instagram.com/biortino/" target="_blank" rel="noopener noreferrer" className="block text-lg text-white">Instagram @biortino</a>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="tel:+393357629767" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium border border-white/20">{t('contacts.call')}</a>
              <a href="mailto:biortinofficinalis@gmail.com" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium border border-white/20">{t('contacts.writeEmail')}</a>
              <a href="https://www.instagram.com/biortino/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-medium">{t('contacts.writeIg')}</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-black/30 rounded-2xl p-8 border border-white/10 shadow-lg h-full">
            <h2 className="text-2xl font-bold text-white mb-4">{t('contacts.form.title')}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="nome" type="text" required placeholder={t('contacts.form.name')} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300" />
              <input name="email" type="email" required placeholder={t('contacts.form.email')} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300" />
            </div>
            <textarea name="messaggio" required placeholder={t('contacts.form.message')} className="mt-4 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-300 w-full h-32" />
            <button type="submit" className="mt-4 bg-white hover:bg-gray-100 text-gray-900 px-5 py-3 rounded-lg font-semibold">{t('contacts.form.send')}</button>
          </form>
        </div>
      </section>

      <Location />
      <Footer />
    </div>
  );
}

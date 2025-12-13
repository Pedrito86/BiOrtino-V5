import Hero from '../components/Hero';
import OrganicFarming from '../components/OrganicFarming';
import FreshOil from '../components/FreshOil';
import ProductSlider from '../components/ProductSlider';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2b2f30] to-[#1a1d1e] text-white">
      <Hero />
      <OrganicFarming />
      <FreshOil />
      <ProductSlider />
      <Location />
      <Footer />
    </div>
  );
}

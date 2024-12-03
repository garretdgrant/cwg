import { FeaturesCards } from '@/components/Features/FeaturesCards';
import { FooterSocial } from '@/components/FooterSocial/FooterSocial';
import { HeroBullets } from '@/components/HeroBullets/HeroBullets';

function HomePage() {
  return (
    <>
      <HeroBullets />
      <FeaturesCards />
      <FooterSocial />
    </>
  );
}

export default HomePage;

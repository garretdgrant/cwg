import { FeaturesCards } from '@/components/featuresCards/FeaturesCards';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu.tsx/HeaderMegaMenu';
import { HeroBullets } from '@/components/HeroBullets/HeroBullets';

function HomePage() {
  return (
    <>
      <HeroBullets />
      <FeaturesCards />
    </>
  );
}

export default HomePage;

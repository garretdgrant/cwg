import EmailModal from '@/components/EmailModal/EmailModal';
import { FeaturesCards } from '@/components/featuresCards/FeaturesCards';
import { TestUnder } from '@/components/featuresCards/testUnder';
import { HeaderMegaMenu } from '@/components/HeaderMegaMenu.tsx/HeaderMegaMenu';
import { HeroBullets } from '@/components/HeroBullets/HeroBullets';

function HomePage() {
  return (
    <>
      <HeroBullets />
      <FeaturesCards />
      {/* <TestUnder /> */}
    </>
  );
}

export default HomePage;

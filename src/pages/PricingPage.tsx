import { FooterSocial } from '@/components/FooterSocial/FooterSocial';
import { PricingCards } from '@/components/PricingCards/PricingCards';
import { PricingHeader } from '@/components/PricingHeader/PricingHeader';

function PricingPage() {
  return (
    <>
      <PricingHeader />
      <PricingCards />
      <FooterSocial />
    </>
  );
}

export default PricingPage;

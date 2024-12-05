import { Center, SimpleGrid } from '@mantine/core';
import { FooterSocial } from '@/components/FooterSocial/FooterSocial';
import Service from '@/components/Service/Service';

function ServicesPage() {
  return (
    <>
      <SimpleGrid cols={1} verticalSpacing={'lg'} spacing={'lg'}>
        <Service title="5 Page Business Website" />
        <Service title="Custom Web Application" />
        <Service title="Title1" />
      </SimpleGrid>
      <FooterSocial />
    </>
  );
}

export default ServicesPage;

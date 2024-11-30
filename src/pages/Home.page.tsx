import { HeaderMegaMenu } from '@/components/HeaderMegaMenu.tsx/HeaderMegaMenu';
import { HeroBullets } from '@/components/HeroBullets/HeroBullets';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <HeaderMegaMenu />
      <HeroBullets />
      <ColorSchemeToggle />
    </>
  );
}

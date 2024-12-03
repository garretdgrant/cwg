import { Outlet } from 'react-router-dom';
import { HeaderMegaMenu } from './HeaderMegaMenu';

function HeaderLayout() {
  return (
    <>
      <HeaderMegaMenu />
      <Outlet />
    </>
  );
}

export default HeaderLayout;

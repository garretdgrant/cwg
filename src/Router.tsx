import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderLayout from './components/HeaderMegaMenu.tsx/Layout';
import { NotFoundImage } from './components/NotFoundImage/NotFoundImage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/Home.page';
import PricingPage from './pages/PricingPage';
import SeoPage from './pages/SeoPage';
import ServicesPage from './pages/ServicesPage';
import WebAppPage from './pages/WebAppPage';
import WebDesignPage from './pages/WebDesignPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderLayout />, // Wrap all routes with the Layout
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/pricing', element: <PricingPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/web-design', element: <WebDesignPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/web-app', element: <WebAppPage /> },
      { path: '/seo', element: <SeoPage /> },

      { path: '*', element: <NotFoundImage /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

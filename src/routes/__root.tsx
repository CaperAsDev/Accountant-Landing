import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header, Footer } from '../components/organisms';
import { WhatsappButton } from '../components/atoms';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <WhatsappButton message='Hola' number='+573134451890' />
      <Footer />
    </>
  ),
});

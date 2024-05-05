import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header, Footer } from '../components/organisms';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ),
});

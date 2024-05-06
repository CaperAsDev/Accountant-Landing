import { Link, useRouterState } from '@tanstack/react-router';

interface NavBarItemProps {
  linkTo: string
  title: string
}

function NavBarItem({ linkTo, title }: NavBarItemProps) {
  const state = useRouterState();
  const active = state.location.pathname === linkTo;

  return (
    <Link to={linkTo} className={`text-ligth-0 font-medium p-2 hover:text-dark-1 focus:text-dark-1 hover:bg-contrast focus:bg-contrast ${active ? 'bg-contrast bg-opacity-70' : ''}`}>
      {title}
    </Link>
  );
}

export default NavBarItem;

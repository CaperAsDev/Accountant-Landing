import { Link } from '@tanstack/react-router';

interface NavBarItemProps {
  linkTo: string
  title: string
}

function NavBarItem({ linkTo, title }: NavBarItemProps) {
  return (
    <Link to={linkTo} className='text-ligth-0 font-bold p-2 hover:text-ligth-2 focus:text-ligth-2 hover:bg-dark-1 focus:bg-dark-1'>
      {title}
    </Link>
  );
}

export default NavBarItem;

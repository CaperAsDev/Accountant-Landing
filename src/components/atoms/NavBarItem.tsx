import { Link } from '@tanstack/react-router';

interface NavBarItemProps {
  linkTo: string
  title: string
}

function NavBarItem({ linkTo, title }: NavBarItemProps) {
  return (
    <Link to={linkTo} className='text-white font-bold p-2 hover:bg-purple-400 focus:bg-purple-400'>
      {title}
    </Link>
  );
}

export default NavBarItem;

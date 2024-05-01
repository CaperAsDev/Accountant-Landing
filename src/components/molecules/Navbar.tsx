import { NavBarItem } from '../atoms';

function Navbar() {
  const navbarItems = [
    { linkTo: '/about', title: 'Nosotros' },
    { linkTo: '/', title: 'Inicio' },
    { linkTo: '/blog', title: 'Blog' },
  ];
  return (
    <nav className='w-full h-10 bg-slate-500 flex justify-evenly sticky top-0 bg-opacity-50 backdrop-blur-sm'>
      { navbarItems.map(
        (item) => <NavBarItem key={item.linkTo} linkTo={item.linkTo} title={item.title} />,
      )}
    </nav>
  );
}

export default Navbar;

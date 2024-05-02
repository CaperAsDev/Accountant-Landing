import { NavBarItem } from '../atoms';

function Navbar() {
  const navbarItems = [
    { linkTo: '/about', title: 'Nosotros' },
    { linkTo: '/', title: 'Inicio' },
    { linkTo: '/blog', title: 'Blog' },
  ];
  return (
    <nav className='w-full h-fit py-2 bg-slate-700 flex justify-evenly sticky top-0 bg-opacity-50 backdrop-blur-sm z-20' >
      { navbarItems.map(
        (item) => <NavBarItem key={item.linkTo} linkTo={item.linkTo} title={item.title} />,
      )}
    </nav>
  );
}

export default Navbar;

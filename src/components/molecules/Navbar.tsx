import { NavBarItem } from '../atoms';

function Navbar() {
  const navbarItems = [
    { linkTo: '/', title: 'Inicio' },
    { linkTo: '/services', title: 'Servicios' },
    { linkTo: '/blog', title: 'Blog' },
  ];
  return (
    <nav className='w-full h-fit py-2 bg-dark-1 flex justify-evenly sticky top-0 bg-opacity-50 backdrop-blur-sm z-20 border-t-2 border-ligth-2' >
      { navbarItems.map(
        (item) => <NavBarItem key={item.linkTo} linkTo={item.linkTo} title={item.title} />,
      )}
    </nav>
  );
}

export default Navbar;

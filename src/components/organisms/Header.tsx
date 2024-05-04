import { Logo } from '../atoms';
import { CallToActions, Navbar } from '../molecules';

function Header() {
  return (
    <>
    <header className='w-full h-fit bg-dark-1 p-5 grid place-items-center'>
        <Logo />
        <CallToActions />
    </header>
    <Navbar />
    </>
  );
}

export default Header;

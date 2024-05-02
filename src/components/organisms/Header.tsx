import { Logo } from '../atoms';
import { CallToActions, Navbar } from '../molecules';

function Header() {
  return (
    <>
    <header className='w-full h-fit'>
      <div className='bg-white'>
        <Logo />
        <CallToActions />
      </div>
    </header>
    <Navbar />
    </>
  );
}

export default Header;

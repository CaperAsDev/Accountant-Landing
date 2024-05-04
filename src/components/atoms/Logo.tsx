import { Link } from '@tanstack/react-router';

function Logo() {
  return (
    <Link to='/' className='block w-fit object-contain overflow-hidden h-16'>
      <img src="/Logo-H_Ligth.png" alt="Logo" className='w-full h-full' />
    </Link>
  );
}

export default Logo;

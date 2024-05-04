import { Link } from '@tanstack/react-router';

function Logo() {
  const baseUrl = import.meta.env.BASE_URL || '';
  console.log('baseUrl: ', baseUrl);

  return (
    <Link to='/' className='block w-fit object-contain overflow-hidden h-16'>
      <img src={`${baseUrl}Logo-H_Ligth.png`} alt="Logo" className='w-full h-full' />
    </Link>
  );
}

export default Logo;

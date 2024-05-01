import { Link } from '@tanstack/react-router';

function Logo() {
  return (
    <Link>
      <picture className='w-full'>
        <img src="https://contadoresasociadosjg.com/wp-content/uploads/2022/04/logo-contadores-asociados-512x512px-e1651016096591.png" alt="Logo" />
      </picture>
    </Link>
  );
}

export default Logo;

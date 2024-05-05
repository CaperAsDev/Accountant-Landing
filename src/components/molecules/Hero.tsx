import { Link } from '@tanstack/react-router';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Hero() {
  const baseUrl = import.meta.env.BASE_URL || '';
  // {`${baseUrl}`}
  return (
    <section className="relative w-full h-svh overflow-hidden">
      <div className="absolute top-0 z-10 p-10 w-full h-full grid max-w-xl lg:p-20">
        <header className="text-ligth-0 font-bold text-4xl">Servicios de contabilidad en Bogotá</header>
        <p className="text-ligth-0 font-extralight text-sm">LOGRA controlar MEJOR las finanzas de tu empresa y EVITA fracasar en el intento, con nuestro apoyo podrás obtener información precisa y oportuna sobre las operaciones de tu negocio.</p>
        <Link to='/services' className=' border-b-2  border-contrast flex items-center text-balance justify-center gap-2 w-fit text-ligth-2 self-end p-2'>
          <span className='w-40'>
            Solicita una asesoría contable
          </span>
          <FaLongArrowAltRight className='w-5 h-5' />
        </Link>
      </div>
      <picture className="block brightness-50 w-full h-full">
        <source media="(min-width: 1000px)" srcSet={`${baseUrl}hero-l.jpg`} />
        <source media="(min-width: 700px)" srcSet={`${baseUrl}hero-m.jpg`} />
        <img src={`${baseUrl}hero-s.jpg`} alt="Hero Image" className="w-full h-full object-cover"/>
      </picture>
    </section>
  );
}

export default Hero;

import { Link } from '@tanstack/react-router';
import { IoPersonCircle } from 'react-icons/io5';
import { BsGraphUpArrow, BsBuildingsFill } from 'react-icons/bs';
import { FaShop, FaBuildingUser } from 'react-icons/fa6';

function HomeServiceC() {
  const baseUrl = import.meta.env.BASE_URL || '';
  // {`${baseUrl}`}
  const services = [
    {
      title: 'Servicio de Contabilidad para PYMES',
      image: `${baseUrl}industry-1.jpg`,
      text: 'Personas que estén en el Régimen Común y hagan actividades comerciales.',
      icon: <IoPersonCircle className='w-10 h-10 text-contrast' />,
      link: {
        text: 'Más info',
        to: '/services',
      },
    },
    {
      title: 'Servicio de Outsourcing Contable',
      image: `${baseUrl}industry-2.jpg`,
      text: 'Para microempresas que cuenten con personal NO superior a 10 trabajadores. Pequeñas empresas que tengan personal entre 11 y 50 trabajadores.',
      icon: <BsGraphUpArrow className='w-10 h-10 text-contrast' />,
      link: {
        text: 'Más info',
        to: '/services',
      },
    },
    {
      title: 'Servicio de Contabilidad para emprendedores',
      image: `${baseUrl}industry-3.jpg`,
      text: 'Para nosotros la Clave y ÉXITO del País es aportar Valor a aquellos que están Comenzando su negocio.',
      icon: <FaShop className='w-10 h-10 text-contrast' />,
      link: {
        text: 'Más info',
        to: '/services',
      },
    },
    {
      title: 'Servicio de Contabilidad para Empresas de Servicios',
      image: `${baseUrl}industry-4.jpg`,
      text: 'Ayudamos a empresas en distintos sectores e industrias de forma eficiente y estratégica.',
      icon: <BsBuildingsFill className='w-10 h-10 text-contrast' />,
      link: {
        text: 'Más info',
        to: '/services',
      },
    },
    {
      title: 'Servicio de Contabilidad para Organizaciones sin ánimo de lucro.',
      image: `${baseUrl}industry-5.jpg`,
      text: 'Ayudamos a Organizaciones sin ánimo de lucro.',
      icon: <FaBuildingUser className='w-10 h-10 text-contrast' />,
      link: {
        text: 'Más info',
        to: '/services',
      },
    },
  ];
  return (
    <article className='lg:flex lg:justify-between w-full'>
      <h3 className='font-bold text-3xl text-dark-1 my-4 border-l-2 pl-1 border-contrast lg:self-start'>Elige tu servicio</h3>
      <div
      className="grid place-items-center sm:grid-cols-2 lg:max-w-2xl">
          {services.map((service) => (
              <button key={service.image} className='relative group w-full h-full overflow-hidden sm:last:col-span-2'>
                <div className='grid place-items-center gap-3 group-focus:opacity-0 group-hover:opacity-0 relative z-10 p-5 py-10 transition-opacity duration-300'>
                  {service.icon}
                  <h4 className='text-ligth-0 font-bold text-2xl text-center'>{service.title}</h4>
                </div>
                <div className='translate-x-full grid place-items-center group-hover:translate-x-0 group-focus-visible:translate-x-0 absolute z-10 inset-0 p-5 transition-transform duration-300'>
                  <p className='text-ligth-0 text-center font-extralight'>{service.text}</p>
                  <Link to={service.link.to} className='text-ligth-2 border-2 p-2 border-contrast flex items-center justify-center gap-2 hover:bg-ligth-2 focus:bg-ligth-2 hover:text-dark-1 focus:text-dark-1 hover:bg-opacity-50'>
                    <span className='w-28'>
                      {service.link.text.toUpperCase()}
                    </span>
                  </Link>
                </div>
                <picture className='brightness-50 absolute w-full h-full inset-0'>
                  <img src={service.image} alt="background image" className='object-cover w-full h-full' />
                </picture>
              </button>
          ))}
      </div>
    </article>
  );
}

export default HomeServiceC;

import { Link } from '@tanstack/react-router';
import { FaLongArrowAltRight } from 'react-icons/fa';

function HomeServiceA() {
  const services = [
    {
      title: 'Servicio de Outsourcing Contable',
      text: 'Ofrecemos servicios contables confiables para los dueños de pequeñas y medianas empresas, nos encargamos de revisar, analizar y presentar la información contable al menor PRECIO y aumentes tu rentabilidad.',
      link: {
        text: 'Pide tu asesoría contable hoy!',
        icon: <FaLongArrowAltRight className='w-5 h-5 text-contrast' />,
        to: '/services',
      },
    },
    {
      title: 'Revisorías fiscales para Pymes',
      text: 'Ofrecemos servicios de revisoría fiscal, contamos con un equipo que cuenta con más de 18 años de experiencia, ayudaremos a tu empresa en términos fiscales y más temas que requieran de nuestra ayuda.',
      link: {
        text: 'Contrata un revisor',
        icon: <FaLongArrowAltRight className='w-5 h-5 text-contrast' />,
        to: '/services',
      },
    },
    {
      title: 'Asesoría Tributarias para Pymes',
      text: `Cuando tu empresa o sociedad está obligada a presentar obligaciones tributarias como:

      - Retención de ICA
      - Retención en la FUENTE
      - Retención de IVA`,
      link: {
        text: 'Contrata una revisoría',
        icon: <FaLongArrowAltRight className='w-5 h-5 text-contrast' />,
        to: '/services',
      },
    },

  ];
  return (
    <article className='lg:flex lg:gap-10 lg:justify-between'>
      <h3 className='font-bold text-3xl text-dark-1 my-4 border-l-2 pl-1 border-contrast self-start'>Elige tu servicio</h3>
      <div
      className="rounded-lg border-ligth-1 border bg-dark-1 shadow-sm shadow-dark-1 overflow-hidden grid lg:grid-cols-3 max-w-4xl xl:relative xl:-top-24">
          {services.map((service) => (
              <div className='p-8 sm:p-14 gap-4 grid sm:grid-cols-2 border border-ligth-1 place-items-center lg:flex lg:flex-col justify-between lg:p-8'>
                <h4 className='text-ligth-2 font-bold text-2xl text-center sm:self-start sm:text-start lg:text-center'>{service.title}</h4>
                <p className='text-ligth-0 text-center font-extralight sm:text-start lg:text-pretty'>{service.text}</p>
                <Link to={service.link.to} className='text-ligth-1 border-b-2 p-3 border-contrast flex items-center text-balance justify-center gap-2 w-fit sm:col-span-2 hover:scale-105 focus:scale-105 transition-transform'>
                  <span className='w-40'>
                    {service.link.text.toUpperCase()}
                  </span>
                  {service.link.icon}
                </Link>
              </div>
          ))}
      </div>
    </article>
  );
}

export default HomeServiceA;

import { Link } from '@tanstack/react-router';
import { FaLongArrowAltRight } from 'react-icons/fa';

function HomeServiceA() {
  const services = [
    {
      title: 'Servicio de Outsourcing Contable',
      text: 'Ofrecemos servicios contables confiables para los dueños de pequeñas y medianas empresas, nos encargamos de revisar, analizar y presentar la información contable al menor PRECIO y aumentes tu rentabilidad.',
      link: {
        text: 'Pide tu asesoría contable hoy!',
        icon: <FaLongArrowAltRight className='w-5 h-5' />,
        to: '/services',
      },
    },
    {
      title: 'Revisorías fiscales para Pymes',
      text: 'Ofrecemos servicios de revisoría fiscal, contamos con un equipo que cuenta con más de 18 años de experiencia, ayudaremos a tu empresa en términos fiscales y más temas que requieran de nuestra ayuda.',
      link: {
        text: 'Contrata un revisor',
        icon: <FaLongArrowAltRight className='w-5 h-5' />,
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
        icon: <FaLongArrowAltRight className='w-5 h-5' />,
        to: '/services',
      },
    },

  ];
  return (
    <article>
      <h3>Elige tu servicio contable</h3>
      <div
      className="rounded-lg border-white border bg-blue-950 shadow-sm shadow-cyan-900 overflow-hidden">
          {services.map((service) => (
              <div className='p-10 gap-4 flex-col flex border border-white'>
                <h4 className='text-white font-bold text-2xl text-center'>{service.title}</h4>
                <p className='text-white'>{service.text}</p>
                <Link to={service.link.to} className='text-orange-200 border-b-2 p-3 border-orange-100 flex items-center text-balance justify-center gap-2'>
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

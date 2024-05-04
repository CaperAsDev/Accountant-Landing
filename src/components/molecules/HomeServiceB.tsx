import { Link } from '@tanstack/react-router';

function HomeServiceB() {
  const services = [
    {
      title: 'Asesorías Contables Para Pymes',
      text: 'Soluciones profesionales en contabilidad para mejorar su gestión financiera y reducir costos',
    },
    {
      title: 'Revisorías Fiscales Para Pymes',
      text: 'Soluciones profesionales en revisoría fiscal para optimizar tu negocio y cumplir con la ley',
    },
    {
      title: 'Asesoría Tributaria Para Pymes',
      text: 'Asesoría tributaria personalizada para optimizar la gestión de tributos de su empresa y mejorar su rentabilidad.',
    },
    {
      title: 'Constitución Y Liquidación De Empresas En Colombia',
      text: 'Este 2023 crea tu empresa, nosotros te prestamos todo el acompañamiento en el paso a paso para que no te pierdas en el proceso.',
    },

  ];
  return (
    <article>
      <header className=''>
        <h3 className='font-bold text-3xl text-contrast my-4 border-l-2 pl-2 border-contrast'>Servicios Profesionales de Contabilidad</h3>
        <p className='text-center text-ligth-0 font-extralight'>
        Conoce cuáles son nuestros servicios contables para PYMES en Bogotá y como podemos ayudarte
        , no dudes en COMUNICARTE con nosotros, responderemos en el menor tiempo posible.
        </p>
        <Link to='/services' className='bg-contrast rounded-md p-5 my-3 grid place-items-center'>
          <span className='text-dark-1 text-center'>Conoce nuestras soluciones contables</span>
        </ Link>
      </header>
      <div
      className="grid gap-2 mt-6">
        {services.map((service) => (
          <div className='grid rounded-md p-5 py-10 gap-2 place-content-center place-items-center w-full min-h-20 max-h-fit bg-ligth-0 border-t-4 border-contrast border-opacity-40 hover:border-opacity-100' key={service.title}>
            <h4 className='font-bold text-xl text-center text-contrast'>{service.title}</h4>
            <p className='text-center font-extralight text-dark-0'>{service.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default HomeServiceB;

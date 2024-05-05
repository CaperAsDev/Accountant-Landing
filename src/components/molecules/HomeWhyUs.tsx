/* eslint-disable max-len */
function HomeWhyUs() {
  const baseUrl = import.meta.env.BASE_URL || '';
  // {`${baseUrl}`}
  const reasons = [
    {
      number: '01',
      title: 'Tarifas Que Enamoran "NO Matan"',
      subTitle: 'Económico',
      text: 'Nuestra Promesa de valor es ayudar a emprendedores, A microempresas y PEQUEÑAS empresas (pymes) y grandes empresas, estamos comprometidos en brindar el mejor servicio posible.',
    },
    {
      number: '02',
      title: 'Soluciones Que Te Harán Tomar Mejores Decisiones',
      subTitle: 'Enfocado en el objetivo',
      text: 'Nuestra cultura además de brindarte los mejores precios del mercado es darte una pronta solución, los más de 27 años de experiencia nos da la plena certeza en poder ayudar a cualquier tipo de empresa, sea grande, pequeña o mediana.',
    },
    {
      number: '03',
      title: 'Satisfacción Nuestros Clientes',
      subTitle: 'Comunicacion y servicio al cliente',
      text: '10/10 clientes están felices con nuestros servicios, pero más importante quién lo dice? Dale «Clic Aquí« para ver',
    },
  ];
  return (
    <article>
      <header className='relative w-full h-fit'>
        <div className="relative z-10 py-4">
          <h3 className='font-bold text-3xl text-ligth-0 my-4 border-l-2 pl-2 border-contrast'>
            ¿Por Qué Elegirnos Y Cómo Trabajamos?
          </h3>
          <p className='text-center text-ligth-0 font-extralight'>
            Somos UNO de los mejores Servicios contables para PYMES que existen en Bogotá, también ofrecemos servicios de revisorías fiscales y tributaros.
          </p>
        </div>
        <picture className="absolute z-0 -right-5 top-0  h-full w-screen object-cover overflow-hidden brightness-50">
          <source media="(min-width: 1000px)" srcSet={`${baseUrl}deal-l.jpg`} />
          <source media="(min-width: 700px)" srcSet={`${baseUrl}deal-m.jpg`} />
          <img src={`${baseUrl}deal-s.jpg`} alt="close deal image" className="w-full h-full"/>
        </picture>
      </header>
      <div
        className="grid gap-4 mt-5"
      >
        {reasons.map((reason) => (
          <div
            key={reason.number}
            className="shadow-lg shadow-dark-1 rounded-md bg-ligth-0 border-l-4 border-contrast p-5 py-7"
          >
            <p className="font-extrabold text-3xl text-dark-1 mb-3" >{reason.number}</p>
            <span className="font-extralight text-dark-0 text-opacity-80" >{reason.subTitle}</span>
            <h4 className="font-bold text-xl text-dark-1 mb-3" >{reason.title}</h4>
            <p className="font-extralight text-dark-0 text-opacity-80" >{reason.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default HomeWhyUs;

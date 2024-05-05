function HomeChooseUs() {
  const list: Array<{ id:number, text: string }> = [
    { id: 1, text: 'Conocerá el estado de su empresa por medio de un Diagnóstico de forma Gratuita, luego analizamos cuáles son los distintos problemas, para que puedas solucionar por medio de nuestros Servicios de contables, Fiscales y Tributarias para empresas en Bogotá.' },
    { id: 2, text: 'Cumplirá a tiempo todas sus obligaciones para evitar grandes sanciones.' },
    { id: 3, text: 'Reducirá el pago de sus impuestos mediante la formulación de mejores estrategias.' },
    { id: 4, text: 'Proporcionamos la información financiera que ayudara a tu empresa a tomar mejorares decisiones.' },
    { id: 5, text: 'Te ayudamos a cumplir las obligaciones legales y fiscales.' },
    { id: 5, text: 'Ayudamos a establecer controles internos.' },
  ];
  return (
    <article className="lg:grid lg:grid-cols-3">
      <h3 className='text-2xl font-bold border-contrast border-l-2 pl-2 text-dark-1 my-3 col-span-1 lg:self-start lg:my-0'>¿Por Qué Somos Los Mejores Asesores Contables?</h3>
      <ol className="list-decimal ml-5 col-span-2 md:grid md:gap-2 lg:grid-cols-subgrid lg:grid-flow-row-dense">
        {list.map((item) => <li className="text-dark-0 lg:first:col-span-2" key={item.id} >{item.text}</li>)}
      </ol>
    </article>
  );
}

export default HomeChooseUs;

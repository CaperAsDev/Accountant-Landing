function HomeChooseUs() {
  const list: Array<{ id:number, text: string }> = [
    { id: 1, text: 'Conocerá el estado de su empresa por medio de un Diagnóstico de forma Gratuita, luego analizamos cuáles son los distintos problemas, para que puedas solucionar por medio de nuestros Servicios de contables, Fiscales y Tributarias para empresas en Bogotá.' },
    { id: 2, text: 'Cumplirá a tiempo todas sus obligaciones para evitar grandes sanciones.' },
  ];
  return (
    <article>
      <h3 className='text-2xl font-bold border-contrast border-l-2 pl-2 text-dark-1 my-3'>¿Por Qué Somos Los Mejores Asesores Contables?</h3>
      <ol className="list-decimal ml-5">
        {list.map((item) => <li className="text-dark-0" key={item.id} >{item.text}</li>)}
      </ol>
    </article>
  );
}

export default HomeChooseUs;

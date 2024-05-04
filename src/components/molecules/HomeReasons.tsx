/* eslint-disable max-len */
function HomeReasons() {
  const reasons = [
    {
      item: 'Registro de información Contable',
    },
    {
      item: 'Elaboración de Estados financieros',
    },
    {
      item: 'Elaboración de Balance general',
    },
    {
      item: 'Elaboración de Flujos de efectivo',
    },
    {
      item: 'Presentación de Medios Magnéticos Nacionales y distritales',
    },
    {
      item: 'Estados',
    },
    {
      item: 'Declaración de renta de la sociedad',
    },
    {
      item: 'Controles Internos',
    },
    {
      item: 'Asesoría legal de la empresa',
    },
    {
      item: 'Y demás Trabajos Asociados a la contabilidad de la empresa',
    },

  ];
  return (
    <article>
      <header className=''>
        <h3 className='font-bold text-3xl text-dark-1 my-4 border-l-2 pl-2 border-contrast'>
        Estas Son Las Razones Por La Cual Deberías Trabajar Con Nosotros
        </h3>
      </header>
      <div
      className="grid gap-2 mt-6">
        <ol className="list-decimal list-inside">
          {reasons.map((reason) => (
            <li key={reason.item} className="text-dark-0">{reason.item}  </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

export default HomeReasons;

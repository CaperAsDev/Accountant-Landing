import { Hero, HomeServiceA } from '../molecules';
import { HomeSection } from '../organisms';

function Home() {
  const list: Array<{ id:number, text: string }> = [
    { id: 1, text: 'Conocerá el estado de su empresa por medio de un Diagnóstico de forma Gratuita, luego analizamos cuáles son los distintos problemas, para que puedas solucionar por medio de nuestros Servicios de contables, Fiscales y Tributarias para empresas en Bogotá.' },
    { id: 2, text: 'Cumplirá a tiempo todas sus obligaciones para evitar grandes sanciones.' },

  ];
  return (
    <main>
      <Hero />
      <HomeSection>
        <HomeServiceA />
      </HomeSection>
      <HomeSection>
      <h3 className='text-lg font-bold'>¿Por Qué Somos Los Mejores Asesores Contables?</h3>
      <ol>
        {list.map((item) => <li key={item.id} >{item.id}- {item.text}</li>)}
      </ol>
      </HomeSection>

      HomePage Content
    </main>
  );
}

export default Home;

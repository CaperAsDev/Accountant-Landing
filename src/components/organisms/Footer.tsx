/* eslint-disable max-len */
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

import { Logo, Anchor } from '../atoms';

interface Anchortype {
  href: string
  text: string
  icon: React.ReactNode
}

function Footer() {
  const anchors: Array<Anchortype> = [
    { href: 'tel:+123456789', text: '123456789', icon: <BsFillTelephoneFill /> },
    { href: 'mailto:m.bluth@example.com', text: 'bluth@example.com', icon: <IoMdMail /> },
  ];

  return (
    <footer className="w-full h-fit bg-dark-1 p-5">
      <article className=' grid gap-4'>
        <Logo />
        <p className='text-ligth-0 font-extralight' >
          Ofrecemos servicios de contabilidad para Pymes en Bogotá, ayudamos a tu empresa para que ahorres tiempo y dinero, con más de 18 años de experiencia
        </p>
        <p className='text-ligth-2' >Ponte en contacto, te resolveremos cualquier inquietud</p>
        <li className='list-none'>
          {anchors.map(
            (anchor) => <Anchor
            key={anchor.href}
            href={anchor.href}
            text={anchor.text}
            >
              {anchor.icon}
            </Anchor>,
          )}
        </li>
      </article>
    </footer>
  );
}

export default Footer;

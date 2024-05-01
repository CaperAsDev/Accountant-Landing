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
    <footer className="w-full h-fit bg-white p-5">
      <article>
        <Logo />
        <p>Ofrecemos....</p>
        <p>Ponte en contacto, te resolveremos cualquier inquietud</p>
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
      Mi footer
    </footer>
  );
}

export default Footer;
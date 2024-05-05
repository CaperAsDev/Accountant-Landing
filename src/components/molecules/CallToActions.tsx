import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

import { ContactCTA } from '../atoms';

function CallToActions() {
  return (
    <div className='md:flex justify-evenly hidden'>
      <ContactCTA title="(+57) 323 223 2323" footer="Contador en linea" className='border-r-[1px] pr-2'>
        <BsFillTelephoneFill className='w-5 h-5 text-contrast' />
      </ContactCTA>
      <ContactCTA title="correo@mail.com" footer="Enviar mensaje" className='pl-2' >
      <IoMdMail className='w-5 h-5 text-contrast' />
      </ContactCTA>
    </div>
  );
}

export default CallToActions;

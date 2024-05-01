import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

import { ContactCTA } from '../atoms';

function CallToActions() {
  return (
    <div className='flex justify-evenly'>
      <ContactCTA title="(+57) 323 223 2323" footer="Contador en linea" className='border-r-2'>
        <BsFillTelephoneFill className='w-5 h-5 ' />
      </ContactCTA>
      <ContactCTA title="correo@mail.com" footer="Enviar mensaje" >
      <IoMdMail className='w-5 h-5' />
      </ContactCTA>
    </div>
  );
}

export default CallToActions;

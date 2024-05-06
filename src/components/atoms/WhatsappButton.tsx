import { FaWhatsapp } from 'react-icons/fa';

const URL = 'https://web.whatsapp.com/send';
interface ReactWhatsappProps {
  number: string
  message: string
}

function WhatsappButton({ number, message }: ReactWhatsappProps) {
  const waNumber = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');

  let url = `${URL}?phone=${waNumber}`;

  if (message) {
    url += `&text=${encodeURI(message)}`;
  }

  const eventHandler = () => {
    window.open(url);
  };

  return (
    <button
      onClick={eventHandler}
      className='bg-dark-1 hover:scale-110 transition-transform w-14 h-14 rounded-full grid place-items-center p-2 fixed bottom-14 right-4 z-10'
    >
      <FaWhatsapp className='w-full h-full text-green-700 '/>
    </ button>
  );
}

export default WhatsappButton;

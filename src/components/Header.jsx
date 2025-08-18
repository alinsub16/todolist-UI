import { useEffect, useState } from 'react';
import QuoteWidget from './QuoteWidget';

const Header = () => {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // updates every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const formattedDate = dateTime.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = dateTime.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <header className="bg-blue-100 border border-white/20 shadow-md px-6 py-2 shadow flex justify-between items-center rounded-tl-2xl rounded-tr-2xl gap-2 ">
        <div>
          <QuoteWidget />
        </div>
        <div className="text-right w-full max-w-[210px]">
          <p className="text-md text-gray-800 ">{formattedDate}</p>
          <p className="text-lg text-gray-700 font-semibold ">{formattedTime}</p>
        </div>
      </header>
  )
}

export default Header
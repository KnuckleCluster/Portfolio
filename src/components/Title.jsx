import { useState, useEffect } from 'react';

function Title() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const titles = ['Software Engineer', 'IT Specialist', 'Virtual Assistant'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % titles.length);
    }, 2000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="flex justify-center items-center">
      <span className="text-3xl font-bold text-center relative text-green-400">
        {titles.map((title, idx) => (
          <span
            key={title}
            className={`bg-transparent opacity-0 transition-opacity duration-1000 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              currentIdx === idx ? 'opacity-100' : ''
            }`}
          >
            {title}
          </span>
        ))}
      </span>
    </div>
  );
}

export default Title;

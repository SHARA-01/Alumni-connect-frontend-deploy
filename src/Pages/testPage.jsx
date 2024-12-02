import React, { useState } from 'react';

const FlipCard = ({ cardNumber }) => {
  const [currentBack, setCurrentBack] = useState(0);

  const flip = () => {
    setCurrentBack((prevBack) => (prevBack + 1) % 3);
  };

  return (
    <div className="w-full h-auto perspective mr-8">
      <div className="flip-card-inner w-full h-full transition-transform transform-style font-bold">
        <div className="flip-card-front bg-gray-200 flex items-center justify-center">
          <h2>Front</h2>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={flip}>Flip</button>
        </div>
        {[1, 2, 3].map((index) => (
          <div key={index} className={`flip-card-back bg-blue-500 text-white flex items-center justify-center ${currentBack === (index - 1) ? 'flip' : 'hidden'}`}>
            <h2>Back {index}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex">
      <FlipCard cardNumber={1} />
      <FlipCard cardNumber={2} />
      <FlipCard cardNumber={3} />
    </div>
  );
};

export default App;

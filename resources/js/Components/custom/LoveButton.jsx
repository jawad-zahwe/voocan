import React, { useState } from 'react';

const LoveButton = ({
  onClick,
  initialState = false,
  className = '',
  size = 151,
  alt = 'Love button'
}) => {
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = () => {
    const newState = !isClicked;
    setIsClicked(newState);
    onClick?.(newState);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex -mt-4 items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 sm:w-[6rem] sm:h-[5.5rem] md:w-[7rem] md:h-[6.5rem] lg:w-[8rem] lg:h-[7.5rem] w-[3.5rem] h-[4.5rem] ${className}`}
      type="button"
      aria-label={isClicked ? 'Unlike' : 'Like'}
    >
      <img
        src={isClicked ? "/assets/images/lovebtn/Clicked.svg" : "/assets/images/lovebtn/Default.svg"}
        alt={alt}
        width={size}
        height={size}
        className="w-[100%] h-[100%]"
      />
    </button>
  );
};

export default LoveButton;
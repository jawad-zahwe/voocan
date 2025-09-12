

import { useState } from "react";
import { Link } from '@inertiajs/react';
export default function HeroSection() {
  const [buttonState, setButtonState] = useState("normal");

  const handleMouseDown = () => setButtonState("clicked");
  const handleMouseUp = () => setButtonState("hover");

  return (
    <section className="relative w-full flex items-center justify-center">
      <Link href='/movie/2'>
      <div
        className="relative cursor-pointer select-none sm:w-[8rem] sm:h-[3rem] md:w-[9rem] md:h-[3.5rem] lg:w-[11.5rem] lg:h-[4rem] w-[5rem] h-[1.8rem]"
        onMouseEnter={() => setButtonState("hover")}
        onMouseLeave={() => setButtonState("normal")}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        role="button"
        aria-label="Play Now"
        tabIndex={0}
      >
        <img src="/assets/images/buttonWatchNow.svg" alt="Play Now" width={176}
          height={60}
          className={`w-[100%] absolute top-0 left-0 transition-opacity duration-700 ease-out ${buttonState === "normal" ? "opacity-100" : "opacity-0"}`}
          draggable={false}/>
        <img src="/assets/images/buttonHoverd.svg" alt="Play Now" width={176}
          height={60}
          className={`w-[100%] absolute top-0 left-0 transition-opacity duration-700 ease-out ${buttonState === "hover" ? "opacity-100" : "opacity-0"}`}
          draggable={false}/>
        <img src="/assets/images/buttonClicked.svg" alt="Play Now" width={176}
          height={60}
          className={`w-[100%] absolute top-0 left-0 transition-opacity duration-300 ease-out ${buttonState === "clicked" ? "opacity-100" : "opacity-0"}`}
          draggable={false}/>
      </div>
      </Link>
    </section>
  );
}

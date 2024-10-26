import { useState } from "react";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative w-[34rem] max-w-96 overflow-scroll rounded-lg bg-background-500">
      <button
        className="absolute right-3 top-3 z-50 aspect-square h-10 cursor-pointer rounded-full border-none text-2xl font-bold text-text"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;

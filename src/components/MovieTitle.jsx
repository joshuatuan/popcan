import { useEffect, useRef, useState } from "react";

function MovieTitle({ children }) {
  const titleRef = useRef(null);
  const [textSize, setTextSize] = useState("text-lg"); // Default size for single line

  useEffect(() => {
    const element = titleRef.current;

    if (element) {
      // Check the scrollHeight against line height to approximate line count
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const lineCount = Math.round(element.scrollHeight / lineHeight);

      if (lineCount === 1) setTextSize("text-lg");
      else if (lineCount === 2) setTextSize("text-base");
      else if (lineCount === 3) setTextSize("text-sm");
      else setTextSize("text-xs");
    }
  }, [children]); // Re-run when `children` changes

  return (
    <p ref={titleRef} className={`font-medium text-text ${textSize}`}>
      {children}
    </p>
  );
}

export default MovieTitle;

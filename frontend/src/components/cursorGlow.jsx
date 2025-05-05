import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] w-200 h-200 rounded-full opacity-50 dark:opacity-20 mix-blend-difference"
      style={{
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, var(--cursor-color) 0%, var(--transparent-color) 80%)",
      }}
    ></div>
  );
};

export default CursorGlow;

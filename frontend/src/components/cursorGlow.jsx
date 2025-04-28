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
      className="pointer-events-none fixed z-[9999] w-250 h-250 rounded-full opacity-40 mix-blend-difference"
      style={{
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(98,0,255,0.4) 0%, rgba(0,0,0,0) 80%)",
      }}
    ></div>
  );
};

export default CursorGlow;

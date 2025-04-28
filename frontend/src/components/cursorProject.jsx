import { useState, useEffect } from "react";

const CursorCustom = ({ isHoveringButton }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isInsideSection, setIsInsideSection] = useState(false);
  
    useEffect(() => {
      const section = document.getElementById("projects");
      if (!section) return;
  
      const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      const handleMouseEnter = () => setIsInsideSection(true);
      const handleMouseLeave = () => setIsInsideSection(false);
  
      section.addEventListener("mousemove", moveCursor);
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
  
      return () => {
        section.removeEventListener("mousemove", moveCursor);
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);
  
    if (!isInsideSection) return null;
  
    return (
      <img
        src={isHoveringButton ? "/images/hover-mouse.png" : "/images/mousePointer.png"}
        alt="custom cursor"
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHoveringButton ? "100px" : "80px",
          height: isHoveringButton ? "100px" : "80px",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "width 0.2s ease, height 0.2s ease, border 0.2s ease",
        //   border: isHoveringButton ? "solid 2px white" : "none",
        }}
      />
    );
  };
  
export default CursorCustom;
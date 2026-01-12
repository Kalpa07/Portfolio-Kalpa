import React from "react";
import { useState } from "react";
import CursorCustom from "../components/cursorProject";
import { useNavigate } from "react-router-dom";

const ProjectSection = () => {
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const navigate = useNavigate();

  return (
    <div id="projects" className="flex justify-center relative h-150 mt-20 ">

      <CursorCustom isHoveringButton={isHoveringButton} />
      <div className="absolute inset-0 w-max justify-self-center">
        <img src="/images/uiPhoneBg.png" className="h-120 visible sm:hidden" />
        <img src="/images/uiPaper-bg.png" className="h-150 hidden sm:block" />
      </div>
      <div className="absolute z-10 h-150 flex items-center">
        <button
          type="button"
          onClick={() => { navigate("/projects") }}
          onMouseEnter={() => setIsHoveringButton(true)}
          onMouseLeave={() => setIsHoveringButton(false)}
          className="bg-cta-hover border-[var(--color-cta)] border-6 w-60 h-18 mb-20 sm:mb-0
            font-poppins text-3xl font-medium shadow-2xl rounded-[20px] cursor-none
            transform transition-transform duration-300 hover:scale-110 text-white"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;

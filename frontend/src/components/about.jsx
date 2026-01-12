import React from 'react';

const About = () => {
  return (
    <section className="pt-14 sm:mt-18 sm:ml-36 px-5 sm:px-20 theme-text">
      <div className="max-w-7xl mx-auto">

        <p className="text-[11px] sm:text-[16px] tracking-[0.22em] opacity-60 mb-2 sm:mb-6 text-center sm:text-left">
          A LITTLE MORE ABOUT ME
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20">

          {/* Left column */}
          <div className="text-center sm:text-left">
            <h2 className="theme-primary-color text-3xl sm:text-5xl font-medium leading-tight mb-2 sm:mb-6">
              Exploring where code<br />
              meets human stories.
            </h2>

            <div className="w-20 h-[1px] bg-primary-color/60 mb-2 sm:mb-5 mx-auto sm:mx-0"></div>

            <p className="text-base sm:text-xl opacity-80 leading-relaxed max-w-[32ch] sm:max-w-lg mx-auto sm:mx-0">
              Outside of development, I’m interested in storytelling,
              design, and how technology can preserve human experiences.
            </p>

            <p className="text-base sm:text-xl opacity-80 leading-relaxed mt-4 max-w-[32ch] sm:max-w-lg mx-auto sm:mx-0">
              I enjoy projects that blend emotion, purpose, and usability.
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-8 sm:space-y-16 text-center sm:text-left">

            <div className=''>
              <h3 className="text-lg sm:text-xl font-medium theme-primary-color mb-3">
                Values
              </h3>
              <div className="space-y-1 text-sm sm:text-lg opacity-80">
                <p>Clarity over complexity</p>
                <p>Thoughtful UI over flashy design</p>
                <p>Readable and maintainable code</p>
                <p>Respect for users’ time and attention</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-medium theme-primary-color mb-3">
                Currently
              </h3>
              <div className="space-y-1 text-sm sm:text-lg opacity-80">
                <p>Deepening my skills in React and Next.js</p>
                <p>Exploring scalable frontend architectures</p>
                <p>Building projects combining UX and storytelling</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

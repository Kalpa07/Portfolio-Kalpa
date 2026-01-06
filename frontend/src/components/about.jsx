import React from 'react';

const About = () => {
  return (
    <section className="mt-20 sm:ml-36 px-4 sm:px-20 theme-text">
      <div className="max-w-8xl mx-auto">

        <p className="text-xs tracking-[0.25em] opacity-60 mb-8">
          A LITTLE MORE ABOUT ME
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
          <div>
            <h2 className="theme-primary-color text-4xl sm:text-5xl font-medium leading-tight text-primary-color mb-10">
              Exploring where code<br />
              meets human stories.
            </h2>

            <div className="w-24 h-[1px] bg-primary-color/60 mb-4"></div>

            <p className="text-lg sm:text-xl opacity-80 leading-relaxed max-w-lg">
              Outside of development, I’m interested in storytelling,
              design, and how technology can preserve human experiences.
            </p>

            <p className="text-lg sm:text-xl opacity-80 leading-relaxed mt-6 max-w-lg">
              I enjoy projects that blend emotion, purpose, and usability.
            </p>
          </div>

          <div className="space-y-16 ">
            <div>
              <h3 className="text-xl font-medium theme-primary-color  mb-4">
                Values
              </h3>
              <div className="space-y-2 text-base sm:text-lg opacity-80">
                <p>Clarity over complexity</p>
                <p>Thoughtful UI over flashy design</p>
                <p>Readable and maintainable code</p>
                <p>Respect for users’ time and attention</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium theme-primary-color  mb-4">
                Currently
              </h3>
              <div className="space-y-2 text-base sm:text-lg opacity-80">
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

export default About

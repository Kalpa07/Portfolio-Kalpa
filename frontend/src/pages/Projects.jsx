import { CircleArrowLeft, SendToBack, StepBack } from 'lucide-react';
import { React, useState } from 'react'
const projectData = [
    {
        title: "Kartana",
        description: "Full-stack e-commerce platform built with Next.js, TailwindCSS, GraphQL, Node.js, MongoDB, featuring product browsing, cart management and checkout",
        github: "https://github.com/Kalpa07/Kartana",
        live: "",
        image: "/images/kartanabg.png"
    },
    {
        title: "TerraNest",
        description: "TerraNest is a modern, responsive real estate landing page built with React and GSAP, featuring smooth scroll animations and interactive UI elements. ",
        github: "https://github.com/Kalpa07/Real-estate",
        live: "https://real-estate-one-ecru.vercel.app/",
        image: "/images/terranest.png"
    },
    {
        title: "Nexvent",
        description: "A global event discovery app (excluding personal events), designed in Figma and built using React. Features a clean UI for browsing online and offline events. Backend integration planned.",
        github: "https://github.com/Kalpa07/Nexvent",
        live: "https://nexvent.netlify.app/",
        image: "/images/bgNexvent.png"
    },
    {
        title: "HRMS",
        description: "A training project built with Angular 16, featuring employee list, leave, and attendance modules with reusable components and basic form validation.",
        github: "https://github.com/Kalpa07/Angular-Practice",
        live: "",
        image: "/images/bgHrms.png"
    },
    {
        title: "Personal Portfolio",
        description: "An animated personal portfolio showcasing my skills and projects. Featuring smooth transitions, paper plane animation, and a light/dark theme toggle, built with HTML, CSS, JavaScript, and Tailwind.",
        github: "https://github.com/Kalpa07/Portfolio-Kalpa",
        live: "https://kalpateli07.netlify.app/",
        image: "/images/bgPortfolio.png"
    },
];

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };
    return (
        <div className=''>
            <div className='flex justify-between text-4xl mb-5 mt-5 '>
                <div className="ml-5 sm:ml-15">
                    <a href="/" className="">
                        <CircleArrowLeft className='!w-[40px] !h-[40px] sm:!w-[50px] sm:!h-[50px]' />
                    </a>
                </div>
                <div className="bg-primary-color w-70 sm:w-100 p-2">
                    <h1 className="text-2xl sm:text-4xl">Projects</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:justify-items-center
                overflow-x-hidden sm:overflow-visible
                gap-y-6 sm:gap-x-5
                px-4 sm:px-0'>

                {projectData.map((project, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <div
                            key={index}
                            className="flex flex-col relative
                                mt-10 mb-10 sm:mt-5 sm:mb-0
                                ml-0 sm:ml-10">
                            <h2 className={`
                            text-4xl font-bold z-20 transition-all duration-[2000ms] ease-in-out w-max
                            ${isExpanded || hoveredIndex === index
                                    ? 'self-end mb-[-20px] ml-2 relative'
                                    : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black group-hover:self-end group-hover:mb-1 group-hover:ml-2 group-hover:relative group-hover:top-auto group-hover:left-auto group-hover:translate-x-0 group-hover:translate-y-0'}
                            `}>
                                {project.title}
                            </h2>

                            <div className="flex flex-col">
                                <div className="flex flex-row gap-5 w-120 h-auto">
                                    <div className={`mt-10 rounded-10 h-60 
                                    transition-all ease-in-out duration-[1000ms] relative overflow-hidden group ${isExpanded ? 'w-1/4 sm:w-1/2' : 'w-95 sm:w-120'}`}
                                        style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}>
                                        <div className={`${isExpanded ? 'hidden' : 'visible'} inset-0 z-10 bg-primary-color opacity-80 rounded-10 
                                        h-full w-120 absolute transition-all duration-[500ms] ease-in-out group-hover:-translate-y-full`
                                        } />
                                    </div>
                                    <div className={`${isExpanded ? 'block w-1/2' : 'hidden'} mt-10 transition-all ease-in-out duration-[1000ms]`}>
                                        <p className={`w-3/4 sm:w-full `}>{project.description}</p>
                                        <div className="mt-10 flex gap-4">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="theme-primary-color hover:underline">
                                                    View Code
                                                </a>
                                            )}
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="theme-cta hover:underline">
                                                    View Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row self-end gap-3 mt-4">
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="text-sm hover:underline text-white transition"
                                >
                                    {isExpanded ? 'Less Info ~' : 'More Info ~'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-between text-2xl sm:text-4xl mb-5 mt-5'>
                <div className="bg-primary-color p-2">
                    <a href="https://github.com/Kalpa07" className=" ml-40 mr-5">
                        More Projects
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;


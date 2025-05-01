import { CircleArrowLeft, SendToBack, StepBack } from 'lucide-react';
import { React, useState } from 'react'
const projectData = [
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
        live: "https://kalpa-portfolio.com",
        image: "/images/bgPortfolio.png"
    },
    {
        title: "Next Project",
        description: "In Progress...",
        github: "",
        live: "",
        image: "/images/BackgroundLight.png"
    }
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
                        <CircleArrowLeft className='!w-[50px] !h-[50px]'/>
                    </a>
                </div>
                <div className="  bg-primary w-70 sm:w-100 p-2">
                    <h1 >Projects</h1>
                </div>
            </div>
            <div className='flex flex-row sm:grid 
                overflow-x-auto sm:overflow-visible 
                gap-x-5 sm:grid-cols-2 ml-2
                pl-5 sm:pl-10 pr-5 sm:pr-0 
                snap-x snap-mandatory'>
                {projectData.map((project, index) => {
                    const isExpanded = expandedIndex === index;

                    return (
                        <div key={index} className="flex flex-col relative snap-start mt-60 sm:mt-5  mb-60 sm:mb-0">
                            <h2 className={`
                            text-4xl font-bold z-20 transition-all duration-[2000ms] ease-in-out w-max
                            ${isExpanded || hoveredIndex === index
                                    ? 'self-end mb-[-20px] ml-2 relative'
                                    : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black group-hover:self-end group-hover:mb-1 group-hover:ml-2 group-hover:relative group-hover:top-auto group-hover:left-auto group-hover:translate-x-0 group-hover:translate-y-0'}
                            `}>
                                {project.title}
                            </h2>

                            {index === 3 && !isExpanded && (
                                <p className={`text-2xl font-bold z-20 transition-all duration-[2000ms] ease-in-out
                                absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-black`}
                                >
                                    In Progress...
                                </p>
                            )}
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-5 w-120 h-auto">
                                    <div className={`mt-10 rounded-10 h-60 
                                    transition-all ease-in-out duration-[1000ms] relative overflow-hidden group ${isExpanded ? 'w-1/2' : 'w-120'}`}
                                        style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}>
                                        <div className={`${isExpanded ? 'hidden' : 'visible'} inset-0 z-10 bg-primary opacity-80 rounded-10 
                                        h-full w-120 absolute transition-all duration-[500ms] ease-in-out group-hover:-translate-y-full`
                                        } />
                                    </div>
                                    <div className={`${isExpanded ? 'block w-1/2' : 'hidden'} mt-10 transition-all ease-in-out duration-[1000ms]`}>
                                        <p>{project.description}</p>
                                        <div className="mt-10 flex gap-4">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                                    View Code
                                                </a>
                                            )}
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-color-cta hover:underline">
                                                    View Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {index !== 3 && (
                                <div className="flex flex-row self-end gap-3 mt-4">
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="text-sm hover:underline text-text transition"
                                    >
                                        {isExpanded ? 'Less Info ~' : 'More Info ~'}
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className='flex justify-between text-4xl mb-5 mt-5'>
                <div className="bg-primary p-2">
                    <a href="https://github.com/Kalpa07" className=" ml-40 mr-5">
                        More Projects
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;


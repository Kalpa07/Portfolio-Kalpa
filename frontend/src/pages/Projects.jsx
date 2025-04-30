import { React, useState } from 'react'
const projectData = [
    {
        title: "Nexvent",
        description: "A MERN stack app suggesting global online/offline events...",
        github: "https://github.com/Kalpa07/Nexvent",
        live: "https://nexvent.netlify.app/",
        image: "../../public/images/bgNexvent.png"
    },
    {
        title: "HRMS",
        description: "A training project built with Angular 16...",
        github: "https://github.com/Kalpa07/Angular-Practice",
        live: "",
        image: "../../public/images/bgNexvent.png"
    },
    {
        title: "Personal Portfolio",
        description: "An animated personal portfolio showcasing my skills...",
        github: "https://github.com/Kalpa07/Portfolio-Kalpa",
        live: "https://kalpa-portfolio.com",
        image: "../../public/images/bgPortfolio.png"
    },
    {
        title: "Next Project",
        description: "In Progress...",
        github: "",
        live: "",
        image: "../../public/images/BackgroundLight.png"
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
            <div className='flex justify-between text-4xl mb-5 mt-5'>
                <div className="bg-primary p-2">
                    <h1 className=" ml-50">Projects</h1>
                </div>
            </div>
            <div className='flex flex-col sm:grid justify-items-center sm:grid-cols-2 pl-10 gap-x-5 sm:gap-x-10 gap-y-5'>
                {projectData.map((project, index) => {
                    const isExpanded = expandedIndex === index;

                    return (
                        <div key={index} className="flex flex-col relative">
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
                                        <div className={`${isExpanded ? 'hidden' : 'visible'} inset-0 z-10 bg-primary opacity-60 rounded-10 
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
            <div className='flex justify-end text-4xl mb-5 mt-5'>
            <div className="  bg-primary w-100 p-2">
                <a href="https://github.com/Kalpa07">
                More Projects
                </a>
            </div>
        </div>
        </div>
    )
}

export default Projects;


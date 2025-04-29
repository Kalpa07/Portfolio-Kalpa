import { React, useState } from 'react'

const projectData = [
    { title: "Next Project", description: "A creative, animated portfolio with a paper plane theme, showcasing my skills, projects, and contact details. Built using HTML, CSS, and Tailwind, with custom animations and theme toggling." },
    { title: "Next Project", description: "Description for project 2." },
    { title: "Next Project", description: "Description for project 3." },
    { title: "Next Project", description: "In Progress..." },
  ];

  const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };
    return (
        // <div className='p-10'>
        //     <div className=' text-4xl justify-items-center'>
        //         <h1 className=''>Projects</h1>
        //     </div>
        //     <div className=' flex flex-col sm:grid justify-items-center sm:grid-cols-2 pl-10 gap-x-5 sm:gap-x-10 gap-y-2 sm:gap-y-5'>
        //         <div className="flex flex-col relative">
        //             <h2 className={`text-4xl font-bold z-20 transition-all duration-500 ease-in-out
        //                         ${expanded ? 'self-start mb-4 ml-2 relative' : 'absolute top-[50%] left-[50%] content-center transform -translate-x-1/2 -translate-y-1/2 text-black'}
        //             `}>Next Project
        //             </h2>
        //             <div className="flex flex-col">
        //                 <div className={`flex flex-row not-last:transition-all ease-in-out duration-500 gap-5 w-120 h-auto`}>
        //                     <div className={`bg-[url('/images/BackgroundLight.png')] bg-cover bg-center mt-10 rounded-10 h-60 
        //                       transition-all ease-in-out duration-500 relative overflow-hidden group ${expanded ? 'w-1/2' : 'w-120'}`}>
        //                         <div className={`${expanded ? 'hidden' : 'visible'} inset-0 z-10 bg-primary opacity-60 rounded-10 
        //                         h-full w-120 absolute transition-all duration-300 ease-in-out group-hover:-translate-y-full`} />
        //                     </div>
        //                     <div className={`${expanded ? 'block w-1/2' : 'hidden'} mt-10 transition-all duration-500`}>
        //                         <p>
        //                             Description dlasdn sakdjaskd ddjoajda adnajdad adsjdajd dakdkajd asdakjdkajd.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-row self-end gap-3 mt-4">
        //                 <button onClick={() => setExpanded(!expanded)} className="text-sm hover:underline text-text transition">
        //                     {expanded ? 'Less Info ~' : 'More Info ~'}
        //                 </button>
        //             </div>
        //         </div>
        //         <div className="flex flex-col relative">
        //             <h2 className={`text-4xl font-bold z-20 transition-all duration-500 ease-in-out
        //                         ${expanded ? 'self-start mb-4 ml-2 relative' : 'absolute top-[50%] left-[50%] content-center transform -translate-x-1/2 -translate-y-1/2 text-black'}
        //             `}>Next Project
        //             </h2>
        //             <div className="flex flex-col">
        //                 <div className={`flex flex-row not-last:transition-all ease-in-out duration-500 gap-5 w-120 h-auto`}>
        //                     <div className={`bg-[url('/images/BackgroundLight.png')] bg-cover bg-center mt-10 rounded-10 h-60 
        //                       transition-all ease-in-out duration-500 relative overflow-hidden group ${expanded ? 'w-1/2' : 'w-120'}`}>
        //                         <div className={`${expanded ? 'hidden' : 'visible'} inset-0 z-10 bg-primary opacity-60 rounded-10 
        //                         h-full w-120 absolute transition-all duration-300 ease-in-out group-hover:-translate-y-full`} />
        //                     </div>
        //                     <div className={`${expanded ? 'block w-1/2' : 'hidden'} mt-10 transition-all duration-500`}>
        //                         <p>
        //                             Description dlasdn sakdjaskd ddjoajda adnajdad adsjdajd dakdkajd asdakjdkajd.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-row self-end gap-3 mt-4">
        //                 <button onClick={() => setExpanded(!expanded)} className="text-sm hover:underline text-text transition">
        //                     {expanded ? 'Less Info ~' : 'More Info ~'}
        //                 </button>
        //             </div>
        //         </div>
        //         <div className="flex flex-col relative">
        //             <h2 className={`text-4xl font-bold z-20 transition-all duration-500 ease-in-out
        //                         ${expanded ? 'self-start mb-4 ml-2 relative' : 'absolute top-[50%] left-[50%] content-center transform -translate-x-1/2 -translate-y-1/2 text-black'}
        //             `}>Next Project
        //             </h2>
        //             <div className="flex flex-col">
        //                 <div className={`flex flex-row not-last:transition-all ease-in-out duration-500 gap-5 w-120 h-auto`}>
        //                     <div className={`bg-[url('/images/BackgroundLight.png')] bg-cover bg-center mt-10 rounded-10 h-60 
        //                       transition-all ease-in-out duration-500 relative overflow-hidden group ${expanded ? 'w-1/2' : 'w-120'}`}>
        //                         <div className={`${expanded ? 'hidden' : 'visible'} inset-0 z-10 bg-primary opacity-60 rounded-10 
        //                         h-full w-120 absolute transition-all duration-300 ease-in-out group-hover:-translate-y-full`} />
        //                     </div>
        //                     <div className={`${expanded ? 'block w-1/2' : 'hidden'} mt-10 transition-all duration-500`}>
        //                         <p>
        //                             Description dlasdn sakdjaskd ddjoajda adnajdad adsjdajd dakdkajd asdakjdkajd.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-row self-end gap-3 mt-4">
        //                 <button onClick={() => setExpanded(!expanded)} className="text-sm hover:underline text-text transition">
        //                     {expanded ? 'Less Info ~' : 'More Info ~'}
        //                 </button>
        //             </div>
        //         </div>
        //         <div className="flex flex-col relative">
        //             <h2 className={`text-4xl font-bold z-20 transition-all duration-500 ease-in-out
        //                         ${expanded ? 'self-start mb-4 ml-2 relative' : 'absolute top-[50%] left-[50%] content-center transform -translate-x-1/2 -translate-y-1/2 text-black'}
        //             `}>Next Project
        //             </h2>
        //             <p className={`text-2xl font-bold z-20 transition-all duration-500 ease-in-out
        //                         ${expanded ? 'self-start mb-4 ml-2 relative' : 'absolute top-[60%] left-[50%] content-center transform -translate-x-1/2 -translate-y-1/2 text-black'}
        //             `}> In Progress...</p>
        //             <div className="flex flex-col">
        //                 <div className={`flex flex-row not-last:transition-all ease-in-out duration-500 gap-5 w-120 h-auto`}>
        //                     <div className={`bg-[url('/images/BackgroundLight.png')] bg-cover bg-center mt-10 rounded-10 h-60 
        //                       transition-all ease-in-out duration-500 relative overflow-hidden group ${expanded ? 'w-1/2' : 'w-120'}`}>
        //                         <div className={`${expanded ? 'hidden' : 'visible'} inset-0 z-10 bg-primary opacity-60 rounded-10 
        //                         h-full w-120 absolute transition-all duration-300 ease-in-out group-hover:-translate-y-full`} />
        //                     </div>
        //                     <div className={`${expanded ? 'block w-1/2' : 'hidden'} mt-10 transition-all duration-500`}>
        //                         <p>
        //                             Description dlasdn sakdjaskd ddjoajda adnajdad adsjdajd dakdkajd asdakjdkajd.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-row self-end gap-3 mt-4">
        //                 {/* <button onClick={() => setExpanded(!expanded)} className="text-sm hover:underline text-text transition">
        //                     {expanded ? 'Less Info ~' : 'More Info ~'}
        //                 </button> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='p-5'>
        <div className='flex justify-between text-4xl mb-5'>
            <h1 className=" ml-50">Projects</h1>
            <div className=" mr-40">
                hii
            </div>
        </div>
        <div className='flex flex-col sm:grid justify-items-center sm:grid-cols-2 pl-10 gap-x-5 sm:gap-x-10 gap-y-5'>
            {projectData.map((project, index) => {
                const isExpanded = expandedIndex === index;

                return (
                    <div key={index} className="flex flex-col relative">
                        <h2 className={`text-4xl font-bold z-20 transition-all duration-500 ease-in-out
                            ${isExpanded ? 'self-end mb-1 ml-2 relative' : 'absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-black'}
                        `}>
                            {project.title}
                        </h2>
                        {index === 3 && !isExpanded && (
                            <p className={`text-2xl font-bold z-20 transition-all duration-500 ease-in-out
                                absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-black`}
                            >
                                In Progress...
                            </p>
                        )}
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-5 w-120 h-auto">
                                <div className={`bg-[url('/images/BackgroundLight.png')] bg-cover bg-center mt-10 rounded-10 h-60 
                                    transition-all ease-in-out duration-500 relative overflow-hidden group ${isExpanded ? 'w-1/2' : 'w-120'}`}>
                                    <div className={`${isExpanded ? 'hidden' : 'visible'} inset-0 z-10 bg-primary opacity-60 rounded-10 
                                        h-full w-120 absolute transition-all duration-300 ease-in-out group-hover:-translate-y-full`} />
                                </div>
                                <div className={`${isExpanded ? 'block w-1/2' : 'hidden'} mt-10 transition-all duration-500`}>
                                    <p>{project.description}</p>
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
    </div>
    )
}

export default Projects;


import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, image, tags }) => {

    return (
        <motion.div variants={textVariant()}>
            <div options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}

                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">

                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="relative w-full h-[230px]">
                        <img class="object-cover transition-transform duration-500" src={image} alt={name} />
                    </div>
                    
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}</p>
                        
                    </div>
                   
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] text-cyan-300`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
                                 
                

            </div>
        </motion.div>
    )


}
const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>My Work</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p variants={textVariant()} className="mt-3 text-zinc-400 text-[17px] leading-[30 px] flex items-center justify-center">
                    Throughout my acadaemic journey, I've taken on a series of projects that reflect my aptitude for tackling real-world challenges. These endeavors underscore my skills in applying innovative solutions and leveraging cutting-edge technologies. Each project presented below offers a glimpse into my capability to devise effective strategies and implement them using diverse tools and methodologies. Visit my Github repository for more!
                    </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}

                </div>

        </>


    );
};

export default SectionWrapper(Works, "projects")

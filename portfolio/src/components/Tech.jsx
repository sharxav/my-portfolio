import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import '../index.css'

const TechCard = ({ icon, width, height, viewBox,url }) => (
    <Tilt className='xs:w-[80px] w-full'>
        <motion.div
            variants={textVariant()}
            className='w-[70px] blue-green-gradient p-[1px] rounded-[20px] '>
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-primary rounded-[20px] min-h-[70px] flex justify-evenly items-center flex-col '
                
            >
                <a href={url} >
               
               
                    <svg class="flex-no-shrink fill-current hover:text-cyan-400 "
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={viewBox}
                    width={width}
                    height={height} >
                   
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    
                    </svg>
                </a>

                

              
            </div>
        </motion.div>
    </Tilt>
);

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>Technologies I've worked with</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
            </motion.div>

        

         <div className='mt-10 flex flex-wrap gap-10 items-center justify-center'>
                {technologies.map((technology, index) => (
                    <TechCard key={technology.name} index={index} {...technology} />
                ))}
            </div>

        </>


    );
};

export default SectionWrapper(Tech,"tech")

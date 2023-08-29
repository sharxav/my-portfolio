import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>About Me</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-zinc-400 text-[17px] leading-[30px] flex flex-col items-center justify-center'
            >
                Hi! I'm Sharon Xavier, a recent computer science graduate with a keen interest in technology and its transformative potential.
                <br /><br />
                Equipped with a master's in computer science from Penn State Harrisburg and a strong foundation from VIT-AP, I've honed a versatile skill set encompassing programming languages, web technologies, game development, data analysis, and more.
                
                My academic journey has been a canvas for diverse projects that showcase my talent for creative problem-solving. From crafting insightful Power BI reports to diving into multiplayer game development using Unity, I've embraced challenges that ignite my curiosity.
                My passion for continuous learning is mirrored by my dedication to mastering data analysis and software development.
                <br/><br/>
                In my free time, you'll find me exploring new destinations, immersing myself in different cuisines, and enjoying some quality Netflix binge-watching.
                As I embark on my career path, I'm excited to infuse my adaptability, diligence, and love for exploration into every endeavor.
                I welcome you to join me on this expedition of technological discovery and impact.
            </motion.p>

           
        </>
    );
};
export default SectionWrapper(About, "about")

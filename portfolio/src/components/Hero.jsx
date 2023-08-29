import { styles } from '../styles'
import { SectionWrapper } from "../hoc";
import { github, linkedin } from '../assets';


const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`relative inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-2`}
            >
                
                    <h1 className={`${styles.heroHeadText}`}>
                        Sharon Xavier
                </h1>
                <hr/>
         
           
                    <p className='text-white-100 text-center'>
                        Software Developer | Data Analyst | Recent Computer Science Graduate
                    </p>
                    <div className="mt-2 flex justify-center items-center gap-2">
                        <img src={github} alt="my github" width="20" height="20" onClick={() => window.open("https://github.com/sharxav", "_blank")} />
                        <img src={linkedin} alt="my github" width="23" height="23" onClick={() => window.open("https://www.linkedin.com/in/sharon-xavier-34320716a/", "_blank")}  />
                        </div>
                        
                    
               
              
            </div>

           
           
        </section>
        
          
            
        


    );
};

export default SectionWrapper(Hero, "home")

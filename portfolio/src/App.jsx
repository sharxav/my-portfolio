import { BrowserRouter } from 'react-router-dom'
import { About, Experience, Hero, Tech, Navbar, Works,ParticleBackground,Footer} from './components'
import './index.css'

const App=()=> {
  

  return (
      
      <BrowserRouter>
         
          <div className="relative z-0 bg-primary">
              <Navbar />
              
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <div className="bg-black-600/30 backdrop-brightness-50">
                     
                      <Hero />
                      <ParticleBackground/>
                      
                 
                  </div>
              </div>
               
                  
              
              <About/>
              <Tech />
              <Experience />
              <Works />
              <Footer/>
             
              

          </div>

        

              </BrowserRouter>
     
      
  )
}

export default App

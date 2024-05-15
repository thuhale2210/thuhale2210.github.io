import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Projects, StarsCanvas, Experience, Education } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className="bg-gradient-to-br from-gray-900 to-black background-animate">
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <StarsCanvas />
          </div>
          <About />
          <Tech />
          <Education />
          <Experience />
          <Projects />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black background-animate">
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <StarsCanvas />
          </div>
          <About />
          <Tech />
          <Works />
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

import { BrowserRouter } from "react-router-dom";

import { Contact, Hero, Navbar, Tech, Projects, StarsCanvas } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className="bg-gradient-to-br from-gray-900 to-black background-animate">
          <Navbar />
          <Hero />
          <StarsCanvas />
          <Tech />
          <Projects />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <footer className="px-10 pt-10 pb-10 text-center text-[12px] font-medium tracking-[0.18em] text-slate-400">
            2026 Hannah Le
          </footer>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

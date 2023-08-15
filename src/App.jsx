import { BrowserRouter } from "react-router-dom"

import {About,Contact, Experience, Feedbacks,Hero,Navbar,Tech, Works,StarsCanvas} from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative'>
          <Navbar/>
          <Hero/>
          <About/>
          <Experience/>
          <Tech/>
          <StarsCanvas/>
          {/* <Feedbacks/> */}
          <Works/>
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

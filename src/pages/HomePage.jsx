import React from 'react'
import { Hero, About, Services, Contact, Navbar} from '../components'

const HomePage = () => {
  
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default HomePage
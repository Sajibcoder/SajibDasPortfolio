import React from 'react'
import Header from './Header'
import './Education.scss'


const Education = () => {
 
  return (
    <section id="education" className="education">
      <Header
        headerText="Education"
        // icon={<BsInfoCircleFill size={40} />}
      />
      
       <div className="timeline">
        <div className='education'>
        <h2 className="education-text">My Qualifications</h2>
        <h3>Diploma In Civil Engineering,2019</h3>
        <p>West Bengal State Council Of Technical And Vocational Education, West Bengal</p>
        <h3>Btech In Civil Engineering,2023</h3>
        <p>Maulana Abul Kalam Azad University Of Technology, West Bengal</p>
        </div>
  </div>
  </section>
        
        
    
  )
}

export default Education 
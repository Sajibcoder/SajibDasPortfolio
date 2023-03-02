import React from 'react'
import Header from '../components/Header'
import './Skills.scss'




const Skill = () => {
  return (
    <section id="skills" className="skills">
      <Header
        headerText=" My Skills"/>
       
            <ul className='allskills'>
              <li>
                <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="" />
              </li>
              <li>
                <img src="https://cdn.iconscout.com/icon/free/png-512/css3-11-1175239.png?f=avif&w=256" alt="" />
              </li>
              <li>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="" />
              </li>
              <li>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="" />
              </li>
              <li>
                <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="" />
              </li>
              <li>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt=""/>
              </li>
              <li>
                <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*TGwJKcxY8kGEenRLLedeLw.png" alt="" />
              </li>
              
            </ul>
      
    </section>
  )
}

export default Skill
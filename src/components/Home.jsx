import React from 'react'
import './Home.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
 import { faPhone } from '@fortawesome/free-solid-svg-icons';
 import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import propic from '../images/sajib pic.jpg'



const Home = () => {


  return (
    <>
      <section  id="home" className="home">
        <div className='propic'>
        <img src={propic} alt="" />
        </div>
       
        <div className="home-text">
          <h1>
            Hello, I'm Sajib
            <br />
            Front end developer
          </h1>
        </div>
        <div className="home-contact-me" >
          <button >Hire Me</button>
        </div>
        <div className="home-social">
          <a href="mailto:sajib.brp@gmail.com" target="_blank" className="home-social-icon" id="mail" rel="noreferrer"><FontAwesomeIcon icon={faMailBulk}/></a>
          <a href="tel:+91 8509662515" target="_blank" className="home-social-icon" id="number" rel="noreferrer"> <FontAwesomeIcon icon={faPhone}/></a>
          <a href="https://github.com/Sajibcoder" target="_blank" className="home-social-icon"rel="noreferrer" id="github"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/sajib-das-358794229" target="_blank" className="home-social-icon"rel="noreferrer" id="linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>



        </div>
        
      </section>
    </>
  )
}
export default Home
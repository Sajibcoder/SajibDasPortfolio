import React from 'react'
import Header from '../components/Header'
import image1 from '../images/ecommerce app.jpg'
import image2 from '../images/recipe app.jpg'
import image3 from '../images/mental health app.jpg'
import image4 from '../images/news app.jpg'
import './Projects.scss'



const Projects = () => {
  return (
<section id="project" className="project">
      <Header
        headerText="My Projects"
      />
      <ul className="project-image">
        <li>
      <img  src={image1} alt="" />
      <h1>Golden Store <br />(Ecommerce App)</h1>
      <a href="https://golden-store.netlify.app/"rel="noreferrer" target="_blank">View</a>
      <a href="https://github.com/Sajibcoder/Golden-Store-E-Commerce-"rel="noreferrer" target="_blank">Source</a>

      </li>

     <li>
      <img src={image2} alt="" />
      <h1>Easy Recipe <br />(Recipe App)</h1>
      <a href="https://quality-recipe.netlify.app/" rel="noreferrer" target="_blank">View</a>
      <a href="https://github.com/Sajibcoder/Easy-Recipe-App" rel="noreferrer" target="_blank">Source</a>

      </li>

    <li>
      <img src={image3} alt="" />
      <h1>Mental Care <br />(Service provider App)</h1>
      <a href="https://mental-care.netlify.app/" rel="noreferrer" target="_blank">View</a>
      <a href="https://github.com/Sajibcoder/MENTAL-CARE-Service-Provider" rel="noreferrer" target="_blank">Source</a>

      </li>

      <li>
      <img src={image4} alt="" />
      <h1>People's News App <br />(Latest News Of India)</h1>
      <a href="https://peoplesnewsapp.netlify.app/" rel="noreferrer" target="_blank">View</a>
      <a href="https://github.com/Sajibcoder/People-s-News-App" rel="noreferrer" target="_blank">Source</a>

      </li>
      
      </ul>

  
      
      </section>
  )
}

export default Projects

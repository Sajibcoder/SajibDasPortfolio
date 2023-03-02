import React from 'react'
import Header from '../components/Header'
import './About.scss'


const personalDetails = [
  {
    label: "Name",
    value: "Sajib Das",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "Birpara, Alipurduar, West Bengal, Pin- 735204, India",
  },
  {
    label: "Email",
    value: "sajib.brp@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 8509662515",
  },
  {
    label: "Whats App No",
    value: "+91 7550946098",
  },
];
const jobSummary =
  "I'm a Front-End Developer located in West Bengal, India. I have a serious passion for UI effects, creative intuitive, dynamic user experiences. Well-organised person, problem solver, coding enthusiast with high attention to detail. Interested in the entire frontend spectrum and meeting up with creative, ambitious peoples. I enjoy designing and devloping creative, unique websites with my skillsets.  I am proficient in front-end technologies like HTML, CSS, JAVASCRIPT; the frameworks and libraries like BOOTSTRAP, SASS, REACT JS, REDUX etc. I am a strong team player with excellent communication and interpersonal skills. And i am committed to delivering high quality solutions that exceed client expectations and am always looking for ways to improve my skills and stay up-tp-date with the latest industry trends.  ";


const About = () => {
  return (
    <section id="about" className="about">
      <Header
        headerText="About Me"
        // icon={<BsInfoCircleFill size={40} />}
      />
      
      <div className='about-content'>
        <div className='mydetails'>
         
        <h3>Front End Developer</h3>
        <p>{jobSummary}</p>
        
        <h3 className='personal-info'>Personal Information</h3>
        <ul>
          {personalDetails.map((item,index)=>(
            <li key={index}>
              <span className="title">{item.label}</span>
              <span className="value">{item.value}</span>
            </li>
          ))
          }
        </ul>

</div>
      </div>
      </section>
  );
};

export default About
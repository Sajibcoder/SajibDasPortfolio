import React from 'react'
import Header from '../components/Header'
import './Contact.scss'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Header
        headerText="Contact Me"
        // icon={<BsInfoCircleFill size={40} />}

      />
    <form>
       <div className="get-in-touch">
<h3>GET IN TOUCH</h3>
    
<input type="text" required placeholder= "Your Name" />
<input type="email" required placeholder="Email Id" />
<textarea rows="8" required placeholder="Message" ></textarea>
<button type= "submit" className='button'>Send</button>
<div className='traditional'>
Wanna contact the traditional way? drop a mail here 
<div className='email-col'>sajib.brp@gmail.com</div>
</div>
</div>
        </form>

<div className="footer">
  <img className='copyright' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Copyright-serif.svg" alt="" />
     2023 Sajib Das, All Rights Reserved.
</div>
</section>
  )
}

export default Contact

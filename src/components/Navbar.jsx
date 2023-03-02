import React, {useState} from 'react'
import { FaBars} from "react-icons/fa";
import {HiX} from 'react-icons/hi';

import './Navbar.scss'

const data = [
    {
      label: "HOME",
      to: "#home",
    },
    {
      label: "ABOUT ME",
      to: "#about",
    },
    {
      label: "SKILLS",
      to: "#skills",
    },
    {
      label: "EDUCATION",
      to: "#education",
    },
    {
      label: "PROJECTS",
      to: "#project",
    },
    {
      label: "CONTACT",
      to: "#contact",
    },
  ];

const Navbar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
        <nav className='navbar'>
          <ul className='Tagname'>
            <li>SD</li>
          </ul>
             <ul className={`navbar_menu ${toggleIcon ? "active" : ""} `}> 
                {
                    data.map((item,key)=> (
                        <li key={key} className='navbar_menu_item'>
                            <a className='navbar_menu_item_links' href={item.to}>
                                {item.label}
                            </a>

                        </li>
                    ))

                }
            
            </ul> 
            <div className='nav-icon' onClick={handleToggleIcon}> 
         {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
            </div>

        </nav>

    </div>
  );
}

export default Navbar
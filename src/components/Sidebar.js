import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Sidebar.css';

const mockItems = [
  {
    id: 1,
    distance: 100,
    cost: 200,
    icon: <AiIcons.AiOutlineArrowsAlt/>
  },
  {
    id: 2,
    distance: 300,
    cost: 600,
    icon: <AiIcons.AiOutlineArrowsAlt/>
  },
  {
    id: 3,
    distance: 50,
    cost: 100,
    icon: <AiIcons.AiOutlineArrowsAlt/>
  }
]

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className = 'navbar'>
        <FaIcons.FaBars className = 'menu-bars' onClick={showSidebar} />
        <div className = 'navbar-text'>
          Task Assignment
        </div>
      </div>
      <div className={sidebar ? 'sidebar active' : 'sidebar'}>
        <ul> 
          <li className= 'sidebar-toggle'>
            <AiIcons.AiOutlineClose className = 'menu-bars' onClick={showSidebar}/>
          </li>
          <div className = 'order-text'>
            Order
          </div>
          {mockItems.map((item, index) =>{
            return (
              <li key ={index} className={'sidebar-text'}>
                {item.icon}
                <span> {item.distance}m = {item.cost}:- </span>
              </li>
            )
          })}
        </ul>
        <div className = 'sidebar-border'/>
      </div>
    </>
  )
}

export default Sidebar

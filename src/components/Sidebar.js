import React, { useState, setState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Sidebar.css';

const Sidebar = ({lines}) => {
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
          {lines.map((item, index) =>{
            return (
              <li key ={index} className={'sidebar-text'}>
                <li> {index} </li>
                  <ul>
                    Distance: {item.dist}km
                  </ul>
                  <ul>
                    Cost: {item.cost}:-
                  </ul>
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

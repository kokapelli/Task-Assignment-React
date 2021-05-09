import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { getTotalCost } from './../misc.js';
import { submitRequest } from './../submitRequest.js';
import "./Sidebar.css";

const Sidebar = ({ lines, submitClickCallback }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
    
  const submitOrder = () => {
    getTotalCost(lines)
    submitRequest(getTotalCost(lines))
    
    setSidebar(false);
    submitClickCallback()
  }

  return (
    <>
      <div className="navbar">
        <div className ="navbar-left-container">
          <FaIcons.FaBars className="menu-bars" onClick={showSidebar} />
          <div style={{marginLeft: '20px'}}> Price: {getTotalCost(lines)} SEK</div>
        </div>
          <div className="navbar-text">Hampus Falk</div>
      </div>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <div className="sidebar-toggle">
             <AiIcons.AiOutlineClose className="menu-bars" onClick={showSidebar}/>
        </div>
        <div className="order-text"> Order </div>
        <ul className='sidebar-order'>
            {lines.map((item, index) => {
              return (
                <li key={index}
                    className={`sidebar-text ${item.highlighted ? 'sidebar-text-active' : ''}`}>
                  <div > {index} </div>
                  <ul>Distance: {item.dist}km</ul>
                  <ul>Cost: {item.cost} SEK</ul>
                </li>
              );
            })}
        </ul>
        <div className="submit-footer">
          <div className='footer-text'>Total Cost </div>
          <div className='footer-text'>{getTotalCost(lines)} SEK </div>
          <button onClick={submitOrder} 
                  className="submit-button" > 
                  Place Order 
          </button>
        </div>
        <div type='submit' className="sidebar-border" />
      </div>
    </>
  );
};

export default Sidebar;

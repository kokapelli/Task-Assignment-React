import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Sidebar.css";

const Sidebar = ({ submitClickCallback, lines }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const getTotalCost = (productList) => {
    return productList.reduce((totalCost, { cost: itemCost }) => totalCost + parseFloat(itemCost), 0);
  };
  
  return (
    <>
      <div className="navbar">
        <FaIcons.FaBars className="menu-bars" onClick={showSidebar} />
        <div className="navbar-text">Task Assignment</div>
      </div>
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul>
          <li className="sidebar-toggle">
             <AiIcons.AiOutlineClose className="menu-bars" onClick={showSidebar}/>
          </li>
          <div className="order-text"> Order </div>
          {lines.map((item, index) => {
            return (
              <li key={index}
                  className={`sidebar-text ${item.highlighted ? 'sidebar-text-active' : ''}`}>
                <div > {index} </div>
                <ul>Distance: {item.dist}km</ul>
                <ul>Cost: {item.cost}:-</ul>
              </li>
            );
          })}
        </ul>
        <div className="submit-footer">
          <div className='footer-text'>Total Cost </div>
          <div className='footer-text'>{getTotalCost(lines)}:- </div>
          <button onClick={submitClickCallback} className="submit-button" > Place Order </button>
        </div>
        <div className="sidebar-border" />
      </div>
    </>
  );
};

export default Sidebar;

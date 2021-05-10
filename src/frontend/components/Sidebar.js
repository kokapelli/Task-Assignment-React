import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { getTotalCost } from "./../misc.js";
import { submitRequest } from "./../submitRequest.js";
import SidebarFooter from "./SidebarFooter";
import Header from "./Header";
import Order from "./Order";
import "./Sidebar.css";

const Sidebar = ({ lines, submitClickCallback }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const submitOrder = () => {
    getTotalCost(lines);
    submitRequest(getTotalCost(lines));

    showSidebar();
    submitClickCallback();
  };

  return (
    <>
      <Header totalPrice={getTotalCost(lines)} showSidebar={showSidebar} />
      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <div className="sidebar-toggle">
          <AiIcons.AiOutlineClose className="menu-bars" onClick={showSidebar} />
        </div>
        <div className="order-text"> Order </div>
        <Order lines = {lines} />
        <SidebarFooter totalPrice={getTotalCost(lines)} submitOrder={submitOrder} />
      </div>
    </>
  );
};

export default Sidebar;

import * as FaIcons from "react-icons/fa";
import "./Header.css";

const Header = ({ totalPrice, showSidebar }) => {

  return (
    <>
      <div className="header">
        <div className="header-left-container">
          <FaIcons.FaBars className="menu-bars" onClick={showSidebar} />
          <div style={{ marginLeft: "20px" }}>
            Price: {totalPrice} SEK
          </div>
        </div>
        <div className="header-text">Hampus Falk</div>
      </div>
    </>
  );
};

export default Header;

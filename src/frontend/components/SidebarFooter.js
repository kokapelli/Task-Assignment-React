import "./SidebarFooter.css";

const SidebarFooter = ({ totalPrice, submitOrder }) => {
  return (
    <>
      <div className="submit-footer">
        <div className="footer-text">Total Cost </div>
        <div className="footer-text">{totalPrice} SEK </div>
        <button onClick={submitOrder} className="submit-button">
          Place Order
        </button>
      </div>
      <div className="sidebar-border" />
    </>
  );
};

export default SidebarFooter;

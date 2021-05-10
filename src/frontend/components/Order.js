import "./Order.css";

const Order = ({ lines }) => {
  return (
    <>
      <ul className="sidebar-order">
        {lines.map((item, index) => {
          return (
            <li
              key={index}
              className={`sidebar-text ${
                item.highlighted ? "sidebar-text-active" : ""
              }`}
            >
              <div> {index} </div>
              <ul>Distance: {item.dist}km</ul>
              <ul>Cost: {item.cost} SEK</ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Order;

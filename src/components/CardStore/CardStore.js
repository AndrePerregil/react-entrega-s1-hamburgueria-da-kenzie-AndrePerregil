import { FiShoppingCart } from "react-icons/fi";
import "./CardStore.css";

function CardStore({ obj, cart, setCart }) {
  const addCart = (obj) => {
    const checker = cart.includes(obj);
    if (!checker) {
      const newObj = obj;
      newObj.quantity = 1;
      setCart([...cart, newObj]);
    } else {
      const index = cart.indexOf(obj);
      const newCart = cart;
      const newObj = cart[index];
      newObj.quantity++;
      newCart.splice(index, 1, newObj);
      setCart([...newCart]);
    }
  };

  return (
    <div className="card">
      <img className="imgCard" src={obj.img} alt={obj.name}></img>
      <div className="infoCard">
        <h3 className="titleCard">{obj.name}</h3>
        <p className="categoryCard">{obj.category}</p>
        <div className="priceButtonContainer">
          <span className="price">R${obj.price.toFixed(2)}</span>
          <button
            className="btnAddCart"
            onClick={() => {
              addCart(obj);
            }}
          >
            Comprar
            <FiShoppingCart className="addCart" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardStore;

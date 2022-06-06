import "./CardCart.css";
import { FiDelete, FiPlusSquare, FiMinusSquare } from "react-icons/fi";

function CardCart({ obj, cart, setCart }) {
  const deleteHandler = (obj) => {
    const newCart = cart.filter((product) => product.name !== obj.name);
    setCart([...newCart]);
  };

  const lessHandler = (obj) => {
    if (obj.quantity > 1) {
      const newObj = obj;
      newObj.quantity--;
      const index = cart.indexOf(obj);
      const newCart = cart;
      newCart.splice(index, 1, newObj);
      setCart([...newCart]);
    } else {
      deleteHandler(obj);
    }
  };

  const moreHandler = (obj) => {
    const newObj = obj;
    newObj.quantity++;
    const index = cart.indexOf(obj);
    const newCart = cart;
    newCart.splice(index, 1, newObj);
    setCart([...newCart]);
  };

  return (
    <div className="cardCart">
      <img className="cardCartImg" src={obj.img} alt={obj.name}></img>
      <div className="nameCategoryContainer">
        <h4 className="cardCartTitle">{obj.name}</h4>
        <p className="cartInfo">{obj.category}</p>
        <p className="cartInfo">{obj.quantity}</p>
      </div>
      <div className="buttonContainerCart">
        <button
          className="cartButton"
          onClick={() => {
            deleteHandler(obj);
          }}
        >
          <FiDelete size={20} />
        </button>
        <button
          className="cartButton"
          onClick={() => {
            moreHandler(obj);
          }}
        >
          <FiPlusSquare size={20} />
        </button>
        <button
          className="cartButton"
          onClick={() => {
            lessHandler(obj);
          }}
        >
          <FiMinusSquare size={20} />
        </button>
      </div>
    </div>
  );
}

export default CardCart;

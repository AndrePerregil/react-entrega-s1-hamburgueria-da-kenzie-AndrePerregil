import "./CardGeneratorCart.css";
import CardCart from "../CardCart/CardCart";

function CardGeneratorCart({ cart, setCart }) {
  const cartPrice = () => {
    const result = cart.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    );
    if (result > 0) {
      return (
        <div className="totalContainer">
          <h4>
            Total: <span>${result.toFixed(2)}</span>
          </h4>
          <button className="emptyCart" onClick={() => setCart([])}>
            Empty cart
          </button>
        </div>
      );
    }
  };

  return (
    <aside className="cart">
      <h3 className="cartTitle">Your cart</h3>
      <div className="cartContent">
        {cart.length === 0 ? (
          <div className="Aviso">
            <h3>Carrinho vazio</h3>
            <p>Seu pedido aparecerá aqui</p>
          </div>
        ) : (
          <div className="cartContainer">
            {cart.map((item) => (
              <CardCart
                obj={item}
                cart={cart}
                setCart={setCart}
                key={item.id + `cart`}
              />
            ))}
          </div>
        )}
        {cartPrice()}
      </div>
    </aside>
  );
}

export default CardGeneratorCart;

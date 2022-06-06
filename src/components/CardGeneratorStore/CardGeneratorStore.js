import "./CardGeneratorStore.css";
import CardStore from "../CardStore/CardStore";

function CardGeneratorStore({ productsList, cart, setCart }) {
  return (
    <section className="storeContainer">
      {productsList.map((product) => (
        <CardStore
          obj={product}
          cart={cart}
          setCart={setCart}
          key={product.id + ` store`}
        />
      ))}
    </section>
  );
}

export default CardGeneratorStore;

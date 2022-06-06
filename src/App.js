import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import "./App.css";
import CardGeneratorCart from "./components/CardGeneratorCart/CardGeneratorCart";
import CardGeneratorStore from "./components/CardGeneratorStore/CardGeneratorStore";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [backupList, setBackupList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProductsList(response));
  }, []);

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setBackupList(response));
  }, []);

  const searchCb = (obj, value) => {
    return obj.name.toLowerCase().includes(value);
  };

  const search = (value) => {
    setProductsList(backupList);
    const newProductList = productsList.filter((obj) => searchCb(obj, value));
    newProductList.length > 0
      ? setProductsList(newProductList)
      : setProductsList(backupList);
  };

  return (
    <div className="App">
      <header>
        <h1 className="headerLogo">
          <span className="effect1">K</span>EN<span className="effect1">Z</span>
          IE's{" "}
          <span className="headerLogo sub">
            Burgue<span className="effect2">s</span>
          </span>
        </h1>
        <div className="SearchContainer">
          <input
            className="search"
            placeholder="Pesquise aqui"
            onChange={(e) => {
              search(e.target.value);
              if (e.target.value === "") {
                setProductsList(backupList);
              }
            }}
          ></input>
          <FiSearch className="iconSearch" />
        </div>
      </header>
      <main>
        <CardGeneratorStore
          productsList={productsList}
          cart={cart}
          setCart={setCart}
        />
        <CardGeneratorCart cart={cart} setCart={setCart} />
      </main>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Product.css";
export default function Product() {
  let [ProductList, setProductsList] = useState([]);
  let [FilteredList, setFilteredList] = useState([]);

  useEffect(() => {
    async function FethProducts() {
      let Data = await axios.get("https://api.escuelajs.co/api/v1/products");

      setProductsList(Data.data);
      setFilteredList(Data.data);
      console.log(Data.data);
    }
    FethProducts();
  }, []);


  function handleNavCateg(Cat)
  {
    let filteredList = ProductList.filter((e)=>e.category.name == Cat);
    setFilteredList(filteredList);
    console.log(FilteredList)
  }

  return (
    <div>
      <center>
        <h1>
          <nav>
            <button onClick={() => handleNavCateg("Clothes")}>Clothes</button>
            <button onClick={() => handleNavCateg("Electronics")}>Electronics</button>
            <button onClick={() => handleNavCateg("Furniture")}>Furniture</button>
            <button onClick={() => handleNavCateg("Shoes")}>Shoes</button>
            <button onClick={() => handleNavCateg("Miscellaneous")}>
              Miscellaneous
            </button>
          </nav>
          <br />
          <br />

          <div id="ProductContainer">
            {FilteredList.map((e, i) => (
              <Card key={i} e={e} />
            ))}
          </div>
        </h1>
      </center>
    </div>
  );
}

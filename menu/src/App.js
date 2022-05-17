import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items)
  const [categories , setCategories] = useState(allCategories)

  const filterItems = (catogory) =>{
    if(catogory==='all'){
      setMenuItem(items)
      return;
    }
    const newItems = items.filter((item)=> item.category === catogory)
    setMenuItem(newItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Specials</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems = {filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
 
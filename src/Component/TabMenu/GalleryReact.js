import React, { useState } from 'react'
import "../TabMenu/Tab.css"
import CatMenu from './CatMenu';
import Menu from "./Menu";
import MenuItems from './MenuItems';

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category )), "all"];

console.log(allCatValues);

// const allCatValues = [ ...new Set(Menu.map((curElem) => curElem.category)), "all"];

// const allCatValues = new Set(Menu.map((curElm) => {
//     return curElm.category;
// }));

// console.log(allCatValues);

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems] = useState(allCatValues);

    const filterItem = (category) => {

        if (category === "all") {
            setItems(Menu);
            return;
        }

        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }

  return (
    <>
        <h1 className="mt-5 text-center main-heading">Oreder Your Favourite Dish</h1>
        <hr />

        {/* Our Menu List List will come here */}
        <CatMenu filterItem={filterItem} catItems={catItems} />

        {/* Our Menu Items List will come here */}
        <MenuItems items={items} />
    </>
  )
}

export default GalleryReact
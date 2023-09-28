import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuC from './menuCard';


const Resturant = () => {
  const [menuData, setMenuData] =React.useState(Menu);
  // console.log(menuData)
  const filterItem=(category)=>{
    const updatedList=Menu.filter((curElem)=>{
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <nav className='navbar'><h1 ><strong>Restauranzo</strong></h1>
        <div className='btn-group'>
          <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
          <button className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={()=>filterItem("evening")}>Evening</button>
          <button className='btn-group__item' onClick={()=>filterItem("dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button>
        </div>
      </nav>
        <MenuC menuData={menuData} />
    </>
  )
}

export default Resturant
import React from "react";



function MenuC({menuData}) {
 
    // console.log(menuData)
  return (
    <>
    <section className="main-card--container">
    {menuData.map((curElem)=>{
     const { id,name,category,image,url,description}= curElem;

     return(
        <div className="card-container" key={id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{id}</span>
            <span className="card-author subtle" style={{ color: "red" }}>
            {name}
            </span>
            <h2 className="card-title"> {name}</h2>
            <span className="card-description stuble">
                {description}
            </span>
            <div className="card-read">Read</div>
            <img src={image} alt='images' className='card-media'></img>
            <a href={url} target="_blank">
            <button className="card-tag subtle btn btn-secondary" ><b>Order Now</b></button>
            </a>
          </div>
        </div>
      </div>
      )          
    })}
    </section>
    </>
  )
};

export default MenuC;

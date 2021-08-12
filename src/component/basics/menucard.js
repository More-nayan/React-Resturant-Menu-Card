import React from "react";

const Menucard = ({ menuData}) => {
  return (
    <>
      {menuData.map((curElem) => {

          const {id, name, category, image,price, description} = curElem;
        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                <span className="card-number">{id}</span>
                  <span className="card-category">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-price">{price}</span>
                  <div className="line"></div>
                  <span className="card-description"> {description} </span>
                  <div className="card-read">Read More</div>
                </div>
                <img src={image} alt="image" className="card-media" />
                <span className="card-tag">Order Now</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Menucard;

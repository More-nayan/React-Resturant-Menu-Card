import React from "react";
import "./style.css";
import Menuapi from "./menuapi";
import Menucard from "./menucard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menuapi.map((curElem)=>{
   return curElem.category
})), "All"]

console.log(uniqueList)

const Resturant = () => {
  const [menuData, setMenuData] = React.useState(Menuapi);
  const [menuList, setMenuList] = React.useState(uniqueList);

  const filterItem = (category)=>{

     if(category === "All"){
       setMenuData(Menuapi);
       return;
     }

     const updatedList = Menuapi.filter((curElem)=>{
       return curElem.category === category;
     });

     setMenuData(updatedList);
  }

  return (
    <>
      <Navbar filterItem ={filterItem} menuList={menuList} />
      <Menucard menuData={menuData}/>
    </>
  );
};

export default Resturant;

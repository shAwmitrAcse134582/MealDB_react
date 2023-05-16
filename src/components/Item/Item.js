import React from 'react';
import "./Item.css";

const Item = (props) => {
   const{item}=props;
   let foodname;
   let foodtype;
   for(const menu of item){
     foodname=menu.strMeal;
     foodtype=menu.strArea;
   }
    return (
        <div className='item'>
            <h1>order section</h1>
                <h3>Selected Item:{item.length}</h3>
                <h5>Food name:{foodname} </h5>
                <h5>Food Type:{foodtype} </h5>

                <button className='btn-item'>Order Review</button>
        </div>
    );
};

export default Item;
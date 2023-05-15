import React from 'react';
import "./Item.css";

const Item = (props) => {
   const{item}=props
    return (
        <div className='item'>
            <h1>order section</h1>
                <h3>Selected Item:{item.length}</h3>
                <p>Food name:{item.strMeal} </p>
                <p>Food Type: </p>
        </div>
    );
};

export default Item;
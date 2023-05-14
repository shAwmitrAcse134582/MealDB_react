import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {idMeal,strMeal,strArea,strMealThumb}=props.meal;
    return (
        <div className='meal-details'>
            <div>
            <img src={strMealThumb} alt=" "></img>
            </div>
        <div className='meal-info'>
        <p className='meal-id'>ID:{idMeal}</p>
        <p>name:{strMeal}</p>
        <p>type:{strArea}</p>
        </div> 
        <button className='btn'>press order</button> 
        </div>
    );
};

export default Meal;
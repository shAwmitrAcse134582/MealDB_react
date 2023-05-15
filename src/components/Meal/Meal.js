import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
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
        <button onClick={()=>props.btnclk(props.meal)}  className='btn'>
            <p className='btn-txt'>Press Order</p>
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button> 
        </div>
    );
};

export default Meal;
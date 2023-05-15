import React, { useEffect, useState } from 'react';
import './Body.css';
import Meal from '../Meal/Meal';
import { addTodb } from '../../utilities/fakedb';
import Item from '../Item/Item';

const Body = () => {
    const[meals,setMeals]=useState([]);

    const [item,setItem]=useState([]);

    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
        .then(res=>res.json())
        .then(data=>setMeals(data));

    },[])

    const btnclk=(meal)=>{
        // console.log(meal);
        const newItem=[...item,meal];
        setItem(newItem);
        addTodb(meal);
      }

    return (
        <div className='body'>
            <div className='meal'>
             
              {
                meals?.meals?.map(meal=><Meal
               id={meal.idMeal}
               meal={meal}
               btnclk={btnclk}
                ></Meal>)
              }
            </div>

            < div className='order'>
                <Item item={item}></Item>
            </div>

        </div>
    );
};

export default Body;
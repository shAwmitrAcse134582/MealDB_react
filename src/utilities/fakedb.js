const addTodb=meal=>{
 
    let foodItem;

    //get food item
    const storedItem=localStorage.getItem('food-Item');
    if(storedItem){
        foodItem=JSON.parse(storedItem);
    }
    else{
        foodItem={};        
    }
    
      //add quantity
    const quantity=foodItem[meal.idMeal];
    if(quantity){
        //    console.log("Already Exist");
           const newquantity=(quantity)+1;
           foodItem[meal.idMeal]=newquantity;
        //    localStorage.setItem(meal.idMeal,newquantity);
    }
    else{
        // console.log("new Item");
        // localStorage.setItem(meal.idMeal,1);
        foodItem[meal.idMeal]=1;
    }
    localStorage.setItem('food-Item',JSON.stringify(foodItem));
    
}

const getStoredItem=()=>{
    let foodItem;
    const storedItem=localStorage.getItem('food-Item');
    if(storedItem){
        foodItem=JSON.parse(storedItem);
    }
    return foodItem;
}

export {
    
    addTodb,
    getStoredItem,
}
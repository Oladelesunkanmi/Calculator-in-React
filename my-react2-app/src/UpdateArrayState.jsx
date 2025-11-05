import { useState } from "react";

function UpdateArrayState(){
  const [foods, setFoods] = useState(["Apple","Mango","Orange"]);


  function handleAddFood(){
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value="";

    setFoods(f=>[...f,newFood]);
  }

  function handleRemoveFood(index){
    setFoods(foods.filter((_,i)=>i!==index));
  }

return(
    <>
    <h1>List of Food</h1>
    <ol>
        {foods.map((food,index)=>
          <li key={index} onClick={()=>handleRemoveFood(index)} 
          >{food}
          </li>)}
        <input id="foodinput" type="text" placeholder="Enter food Name" />
        <button  onClick={handleAddFood}>Add Food</button>
    </ol>
    </>
);
}

export default UpdateArrayState
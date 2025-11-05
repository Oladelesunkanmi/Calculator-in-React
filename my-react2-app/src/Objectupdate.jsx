import { useState } from "react";

function Objectupdate(){
const [car, setCar]=useState({type:"Toyota Corolla", year:2024, make:"japan"});

function handleYearChange(event){
    setCar(c=>({...c, year:event.target.value}));
}


function handleTypeChange(event){
    setCar(c=>({...c, type:event.target.value}));
}


function handleMakeChange(event){
    setCar(c=>({...c, make:event.target.value}));
}

return(


    <>
    <p >Car name {car.type} made in {car.make} in {car.year} </p>
    <input onChange={handleTypeChange} type="text" value={car.type}/>
    <input onChange={handleYearChange} type="number" value={car.year}/>
    <input onChange={handleMakeChange} type="text" value={car.make}/>

    
    </>
);


}
export default Objectupdate
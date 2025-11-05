import { useState } from "react";

function CarComponent(){

    const [cars, setCars] = useState([]);
    const [year, setYear]=useState(2025);
    const [make,setMake]=useState("");
    const [model, setModel] = useState("");

    

    function handleYearChange(event){
        setYear(event.target.value);
    }

    function handleMakeChange(event){
        setMake(event.target.value);
    }

    function handleModelChange(event){
        setModel(event.target.value);
    }

    function handleAddCar(){

        const newCar = {
            caryear:year,
            carmake:make,
            carmodel:model
        };

        setCars(c=>[...c,newCar]);


        setYear(2025);
        setMake("");
        setModel("");

    }

    function handleRemoveCar(index){
        setCars(c=>c.filter((_,i)=> i !==index));
    }
    return(
        <>
        <h1>List of Car Objects</h1>
        <ul>
            {cars.map((car, index)=>
            <li key={index} 
            onClick={()=>handleRemoveCar(index)}>
                {car.year}{car.make} {car.model} 
                </li>)}
        </ul>

        <input onChange={handleYearChange} type="number" value={year} />
        <input onChange={handleMakeChange} type="text" placeholder="Enter Car Make" />
        <input onChange={handleModelChange} type="text" placeholder="Enter Car Model"/>
        <button onClick={handleAddCar} >Add Car</button>
        </>
    );



}
export default CarComponent
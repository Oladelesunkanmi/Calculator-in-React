import { useState } from "react";
function Mycomponent(){
    const [name, setName]=useState("");
   const [quantity, setQuantity]=useState(1);
   const [comment, setComment]=useState("");
   const [payment, setPayment]=useState("");
   const [shipping, setShipping]=useState();

const handleNameChange=(event)=>{
    setName(event.target.value);}

    const handleQuantityChange=(event)=>{
        setQuantity(event.target.value); }

    const handleCommentChange=(event)=>{
        setComment(event.target.value);
    }   
    
    const handlePaymentMethod=(event)=>{
        setPayment(event.target.value);
    }

    const handleShipping=(event)=>{
        setShipping(event.target.value);
    }

    return(
        <div>
            <input  onChange={handleNameChange}></input>
            <h1>Name:{name} </h1>

            <input value={quantity} type="number" onChange={handleQuantityChange} ></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}/>
            <p>comment: {comment}</p>

            <select value={payment} onChange={handlePaymentMethod}>
                <option value="">----Select one----</option>
                <option value="visa">Visa</option>
                <option value="Master-card">Master-Card</option>
                <option value="Bank-transfer">Bank Transfer</option>
            </select>

            <h3>Payment Method: {payment}</h3>

            <label>Pick Up</label>
                <input type="radio" value="pick up"
                 checked={shipping==="pick up"}
                onChange={handleShipping}/>
<br/>
             <label>Delivery</label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"}
                onChange={handleShipping}/>
<p >Shipping: {shipping}</p>

        </div>
    );

}
export default Mycomponent
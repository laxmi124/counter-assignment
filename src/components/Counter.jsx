import React from 'react';
import "./Counter.css";


function Counter(){
 const [count , setCount] = React.useState(0);


 function changeCount(val){
    setCount(count+val) 
 }

 function multiplyByTwo(value){
    setCount(count*value) 
 }

 return(
     <>
      <h1> COUNTER </h1>
      <h1>{count}</h1>
      <button onClick={()=>changeCount(+1)} className="bts"> INCREASE </button>
      <button onClick={()=>changeCount(-1)}  className="bts"> DECREASE </button>
      <button onClick={()=>multiplyByTwo(2)}  className="bts">DOUBLE</button>
     </>
 )
}

export {Counter}
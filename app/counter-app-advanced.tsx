'use client';
import { constants } from 'buffer';
import React, { useState } from 'react'

export default function CounterAppAdvanced() {
const [counter, setCounter] = useState(0);

const decrement = (kitna = 1) =>{
    setCounter(counter - kitna)
}    
const increment = (kitna = 1) =>{
    setCounter(counter + kitna)
}    
const decrement2 = () =>{
    setCounter(counter - 2)
}    
const increment2 = () =>{
    setCounter(counter + 2)
}    
const decrement3 = () =>{
    setCounter(counter - 3)
}    
const increment3 = () =>{
    setCounter(counter + 3)
}    
     

    return <>
    <button onClick={()=>decrement(1)}> Decrement by 1</button>
    <button onClick={()=>decrement(2)}> Decrement by 2</button>
    <button onClick={()=>decrement(3)}> Decrement by 3</button>
    <button onClick={()=>decrement(4)}> Decrement by 4</button>

    {counter}
    <button onClick={()=>increment(1)}>Increement by 1</button>
    <button onClick={()=>increment(2)}>Increement by 2</button>
    <button onClick={()=>increment(3)}>Increement by 3</button>
    <button onClick={()=>increment(4)}>Increement by 4</button>
    </>
}

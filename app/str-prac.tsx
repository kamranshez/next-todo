
'use client';

import { useState } from "react";

export default function StrPrac() {
  //const val = "Hello";
  const [val, setval] = useState('Hello 1')
  const [val2, setval2] = useState('Hello 2')
  const onChangeHandler =  (e:any) => {
  console.log("e is ", e.target.value)
  setval(e.target.value);
  }
  const onChangeHandler2 =  (e:any) => {
    console.log("e is ", e.target.value)
    setval2(e.target.value);
    }
  
  
  return (
    <>
     <input type="text" value={val} onChange = {onChangeHandler} />
     <br />
     <input type="text" value={val2} onChange = {onChangeHandler2} />
    <br />
    Length of Text1 is {val.length}: <br />
    Length of Text2 is: {val2.length}
    </>
    )
}

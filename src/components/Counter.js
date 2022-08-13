import React, { useEffect, useRef, useState } from 'react'

export const Counter = () => {
  const inputEle =useRef()
  const [name, setName] = useState("")
  // const [number, setNumber] = useState(0);
  // const [dark, setDark] = useState(false);



  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  })

  const handleClick = () => {
    console.log("Function Run");
  }
 

  return (
    <div  style={{ marginTop: "30px" }}> 
      <input type="text" onChange={e  => setName(e.target.value)}/>
      <h2> Name : {name}</h2>
      <h2>Renders : {count.current}</h2>

      <input type="text" ref={inputEle} />
      <button onClick={handleClick} type="submit" name="save" >Click Here</button>
h

    </div>
  );

  // function expensiveFunction(num) {
  //   console.log("Loop Started");
  //   for (let i = 0 ; i < 1000000000; i++) {
  //     return num;

  //   }
  // }
}



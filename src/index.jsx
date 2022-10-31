import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';

let num1 = 0                              //normal Variable

function State_var() {
  const [data, setData] = useState(0);                  {//creating a state variable inside the component
  }
  return (
    <div>                
      <h1>State Variable</h1>
      {data}
      <button onClick={() => {
        setData(data + 1)
      }}>Add</button>                                

      <button onClick={() => {
        setData(data - 1)
      }}>Subtract</button>

      {(data % 2 === 0) ? <b>Even</b> : <b>Odd</b>}


<br />
<br />
<br />


      <h1>Normal Variable</h1>
      {num1}
      <button onClick={() => {
        num1++
        console.log("num1: ", num1)
      }}>Add</button>

      <button onClick={() => {
        num1--
        console.log("num1: ", num1)
      }}>Subtract</button>

      {(num1 % 2 === 0) ? <b>Even</b> : <b>Odd</b>}
    </div>
  );
}
ReactDOM.render(<State_var/>, document.querySelector("#root"));
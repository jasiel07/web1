import React from "react";

const alertBox=()=>{
    alert('Hi,This is Jasiel');
}
const console_ =()=>{
    console.log("Have a good day");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Check console");
    myarray.push('u');
    console.log(myarray);
}
export default function Day1() {
  return (
    <div>
    <button onClick={alertBox}>Click Me</button>
    <button onClick={console_}>Click Me</button>
    <button onClick={check}>click me</button>
    </div>
  )
}
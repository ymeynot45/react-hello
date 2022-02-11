import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() {
  return(
    <div><Hello/> </div>
  );
  // Other notation can include
  // return <div>
  // <Hello/> <World/>
  // </div>;     -- as long as the opening div is on the same line as return & semi colon at the end.
}

function Hello() {
  // const name = "Jane!";
  // return (
  // <span>Hello {name}</span>
  // );
  var isHello = false;
  return (
    <span>{isHello ? "Hello" : "Goodbye"}</span> // true = hello, false = goodbye
    // OR <span>
    // {isHello && 'Hello'}
    // {!isHello && 'Goodbye'}
    //</span>
  );
}

// function World(){
//   return <span>World</span>;
// }

// -- How it compiles out in Babel --
// function Hello() {
//   return React.create 
//     'div',
//     {}
//     'Hello World!'
//     );
// }

ReactDOM.render(
  <HelloWorld/>, document.querySelector('#root')
);
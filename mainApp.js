import React from "react";
import  ReactDOM  from "react-dom";

const heading = React.createElement('h1', {id: 'heading'}, 'Hello');

const root = ReactDOM.createRoot(document.getElementById('root'));

const jsxHeading = <h1>NAMASTE REACT USING JSX</h1>

root.render(jsxHeading)
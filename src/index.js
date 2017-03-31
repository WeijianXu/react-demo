import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Example, WebSite, BidirectionalDatabinding} from './example.js'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

let myStyle = {
  fontSize: '2em',
  color: '#FF0000'
};
let arr = [
  <h1 key="h1">菜鸟教程</h1>,
  <h2 key="h2">学的不仅是技术，更是梦想！</h2>,
];

ReactDOM.render(
  <div>
    <Example style={myStyle} arr={arr}/> 
    <WebSite />
    <BidirectionalDatabinding readOnly="readOnly" />
  </div>,
  document.getElementById('example')
);

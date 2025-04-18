import React from "react";
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World"
);

//if you want to create nested elements through React.createElement
const parrent = React.createElement(
  "div",
  { id: "parent", key:"parent" },
  [
    React.createElement(
      "div",
      { className: "child", key:"child" },
      "Hello World inside child"
    ),
    [
      React.createElement(
        "h1",
        { className: "heading", key:"heading" },
        "Hello World inside h1"
      ),
      React.createElement(
        "h1",
        { className: "heading", key:"heading2" },
        "Hello World inside h2"
      ),
    ],
    React.createElement(
      "div",
      { className: "child", key:"child2" },
      "Hello World inside child"
    ),
    [
      React.createElement(
        "h1",
        { className: "heading" , key:"heading4"},
        "Hello World inside h1"
      ),
      React.createElement(
        "h1",
        { className: "heading", key:"heading6" },
        "Hello World inside h2"
      ),
    ],
  ] //you can also pass array if you want to add multiple elements
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parrent);
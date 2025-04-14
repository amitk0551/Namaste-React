const heading = React.createElement(
    "h1",
    { className: "heading" },
    "Hello World"
  );
  
  //if you want to create nested elements through React.createElement
  const parrent = React.createElement(
    "div",
  
    { id: "parent" },
    [
      React.createElement(
        "div",
        { className: "child" },
        "Hello World inside child"
      ),
      [
        React.createElement(
          "h1",
          { className: "heading" },
          "Hello World inside h1"
        ),
        React.createElement(
          "h1",
          { className: "heading" },
          "Hello World inside h2"
        ),
      ],
      React.createElement(
        "div",
        { className: "child" },
        "Hello World inside child"
      ),
      [
        React.createElement(
          "h1",
          { className: "heading" },
          "Hello World inside h1"
        ),
        React.createElement(
          "h1",
          { className: "heading" },
          "Hello World inside h2"
        ),
      ],
    ] //you can also pass array if you want to add multiple elements
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parrent);
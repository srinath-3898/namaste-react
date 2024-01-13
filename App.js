const parent = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "I am heading"),
    React.createElement("h2", {}, "I am h2"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "I am heading"),
    React.createElement("h2", {}, "I am h2"),
  ]),
]);

const heading = React.createElement("h1", {}, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

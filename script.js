// (1) Render HTML by DOM API & Javascript
/**
 * Both document.getElementById and element.innerHTML are actually part of the native DOM Web API.
 * We are communicating with the browser directly here using the supported APIs of the Web platform. 
 */
const jsContainer = document.getElementById("js");
jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
  </div>
`;

// (2) Render HTML by React
/*
 * When we write React code, however, we use the React API instead, and we let React communicate with
 * the browser using the DOM Web API. React acts like our agent for the browser, and we 
 * mostly need to communicate with just React, our agent, and not the browser itself. 
 * I say mostly because there are cases where we still need to communicate with the browser, but those are rare.
 */
/**
 * This container will be the only call we make to the native web API. ReactDOM needs this container to
 * now where to host our application in the DOM. To write our simple HTML User Interface, we are going to use JavaScript calls 
 * to React API. Instead of working with strings (as we did in the native JavaScript example above), in React, we work with objects
 * Any HTML string will be represented as an object using a React.createElement call (which is the core function in the React API). 
 */

const reactContainer = document.getElementById("react");
ReactDOM.render(
    React.createElement(
        "div", {
            className: "demo"
        },
        "Hello React"
    ),
    reactContainer
);
/**
 * First Argument ==> HTML tag, which is div in the above example
 * Second Argument ==> is an object that represents any attributes we want this tag to have { className: "demo" } 
 * [we used className instead of class in the attributes because with React it's all JavaScript that matches the Web API, not HTML itself]
 * Third Argument ==> is the content of the element
 */

// #########################################################################################################################

// Add input element in both ways:

jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input />
  </div>
`;

ReactDOM.render(
    React.createElement(
        "div", {
            className: "demo"
        },
        "Hello React",
        React.createElement("input")
    ),
    reactContainer
);
// #########################################################################################################################

// Add timestamp in both ways

jsContainer.innerHTML = `
  <div class="demo">
    Hello JS
    <input />
    <p>${new Date()}</p>
  </div>
`;

ReactDOM.render(
    React.createElement(
        "div", {
            className: "demo"
        },
        "Hello React",
        React.createElement("input"),
        React.createElement(
            "p",
            null,
            new Date().toString()
        )
    ),
    reactContainer
);

// #########################################################################################################################

// Check the updates - Repeat javascript 
const render = () => {
    jsContainer.innerHTML = `
      <div class="demo">
        Hello JS
        <input />
        <p>${new Date()}</p>
      </div>
    `;
    ReactDOM.render(
        React.createElement(
            "div", {
                className: "demo"
            },
            "Hello React ",
            React.createElement("input"),
            React.createElement(
                "p",
                null,
                new Date().toString()
            )
        ),
        reactContainer
    );
}

setInterval(render, 1000);

/**
 * When we refresh the browser now, the timestamp string should be ticking every second in both versions. We are now 
 * updating our User Interface in the DOM. This is the moment when React will potentially blow your mind. If you try to type 
 * something in the text box of the JS version, you won’t be able to. This is very much expected because we’re basically throwing 
 * away the whole DOM node on every tick and regenerating it. However, if you try to type something in the text box that’s 
 * rendered with React, you can certainly do so! Although the whole React rendering code is within our ticking timer, React is 
 * changing only the timestamp paragraph and not the whole DOM node. This is why the text input box was not regenerated and we 
 * were able to type in it.
 * */
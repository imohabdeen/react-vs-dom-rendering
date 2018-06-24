## React Get Started

### What is the React?
1. React is a JavaScript library. It’s not a framework. It’s not a complete solution and we’ll often need to use more libraries with React to form any solution. React does not assume anything about the other parts in any full solution. It focuses on just one thing, and on doing that thing very well.

2. The thing that React does really well is the second part of the definition: building User Interfaces. A User Interface is anything we put in front of users to have them interact with a machine. User Interfaces are everywhere, from the simple buttons on a microwave to the dashboard of a space shuttle. If the device we’re trying to interface can understand JavaScript, we can use React to describe a User Interface for it.

When you hear the statement that “React is declarative,” this is exactly what it means, we describe User Interfaces with React and tell it what we want (not how to do it). React will take care of the “how” and translate our declarative descriptions (which we write in the React language) to actual User Interfaces in the browser. React shares this simple declarative power with HTML itself, but with React, we get to be declarative for HTML interfaces that represent dynamic data, not just static data.

React is based on components. Components have input &output. we call their input “properties” and “state”, and a component output is a description of a User Interface (which is similar to HTML for browsers). We can reuse a single component in multiple User Interfaces, and components can contain other components.

### React Concept
React’s name is the simple explanation for this concept. When the state of a component (the input) changes, the User Interface it represents (the output) changes as well. This change in the description of the User Interface has to be reflected in the device we’re working with.

In a browser, we need to regenerate the HTML views in the Document Object Model (DOM). With React, we do not need to worry about how to reflect these changes, or even manage when to take changes to the browser; React will simply react to the state changes and automatically update the DOM when needed.

In this demo, we will go through see how is it different render HTML using DOM API or React API


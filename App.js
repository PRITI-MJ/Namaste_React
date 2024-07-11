import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", {id: "heading"}, "hello world from react");

// console.log(heading); //this will create a react element (javascript object)
//         const root = ReactDOM.createRoot(document.getElementById("root"));

//         root.render(heading);//this render method is converting this heading object into the h1 tag and putting it into the element


        
// /*
// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h1>
//     </div>

//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h1>
//     </div>
// </div>

// **  ReactElement(Object) => HTML(Browser Understands)
// */


// const parent = React.createElement("div", 
//     {id: "parent"},
//     [
//     React.createElement("div", 
//         {id: "child"},
//         [React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am an h2 tag"),
//         ]
//        ),

//        React.createElement("div", 
//         {id: "child"},
//         [React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am an h2 tag"),
//         ]
//        )
//     ]
// );

// const newRoot = ReactDOM.createRoot(document.getElementById("root1"));

// newRoot.render(parent);




























/* Episode 3 - Laying the foundation */

//React element 
//React.createElement is a  JS object, but when we "render" the element, it is converted into DOM, then it becomes a html element

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



//to avoid this clumsy code above this we use "jsx" => It is a Javascript syntax which is used to create React Element
// JSX is not HTML inside JS, JSX is HTML-like syntax or XML-like syntax

//React Element
const jsxHeading = (<h1 className="head" tabIndex={1}>Namaste React using JSX</h1>);


//React Component -> 2 types
//Class Based Component - OLD
//Functional Component - NEW



//REACT Functional Component => A normal JS Function which returns some or a bunch of JSX code or React element
//In this the variable name should be in capital letters



//the components below this i.e. "Title" inside the "HeadingComponent" is Component Composition(A component inside a component)
const Title = () => <h1 className="head" tabIndex={5}>Namaste React using JSX</h1>
    

const elem = <span>React Element</span>


const title2 = ( <h1 className="head" tabIndex={5}>
    {/* Putting element inside element */}
    {elem} 
    Title2
    </h1>)


const number = 100;

const HeadingComponent = () => {
    return (<div id="container">
        {/* We are writing JS inside JSX using Curly braces */}
       <h2>{number + 200}</h2>  
       {console.log("Hello")}


       {/* putting React element into react component */}
       {title2} 


       {/* putting React element into react component */}
        <Title/> 
        <Title></Title> 
        {Title()}
        {/* all the titles are same */}



    <h1 className="heading">Namaste REACT Functional Component</h1>
    </div>
    );
}



const root1 = ReactDOM.createRoot(document.getElementById("root"));
//root1.render(jsxHeading); => rendering elements
root1.render(<HeadingComponent/>) // rendering components



//JSX(transpiled before it reaches the JS) => It is done by PARCEL using "BABEL"
//JSX is converted to React.createElement => ReactElement(JS object) => HTMLElement(render)
//Webel is converting the JSX to React.createElement(JS compiler)





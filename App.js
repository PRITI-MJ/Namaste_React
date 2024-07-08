const heading = React.createElement("h1", {id: "heading"}, "hello world from react");

console.log(heading); //this will create a react element (javascript object)
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);//this render method is converting this heading object into the h1 tag and putting it into the element


        
/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h1>
    </div>

    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h1>
    </div>
</div>

**  ReactElement(Object) => HTML(Browser Understands)
*/


const parent = React.createElement("div", 
    {id: "parent"},
    [
    React.createElement("div", 
        {id: "child"},
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
        ]
       ),

       React.createElement("div", 
        {id: "child"},
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
        ]
       )
    ]
);

const newRoot = ReactDOM.createRoot(document.getElementById("root1"));

newRoot.render(parent);
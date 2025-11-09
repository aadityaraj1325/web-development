XML - eXtensible markeup Language
XML - It is a software and hardware-independent tool for storing and transporting data
-- it is markeup language much like HTML
-- They do not do anything


-------------------------------------------------------------------------------------------------------------------


JSX - JavaScript XML
-- it allows to write HTML in React
-- JSX makes it easier to write and add HTML in React
--JSX allows us to Write HTML element in JavaScript and place in the DOM .
--JSX convert HTML tag into react element
--JSX is an extension of the javascript language based on ES6

//////////////////////////////////

Expression in JSX

Expresion inside curly braces{}
-- The expression can be React variable or property or any other Valid javaScript expression

for ex :-- const element = <h1> React is {5+5} times better wu=ith JSX</h1>;
 file name = main.jsx

---------------------------------------------------------------------------------------------------------

Inserting a Large Block of HTML
main.jsx
const element =(
    <ul>
    <li>apples</li>
     <li>banana</li>
      <li>mango</li>
      </ul>
);

------------------------------------------------------------------------------------------------------

One top level Element
main.jsx
like as we write two paragraphs

const element(
    <div>
    <p>i am ajdnj </p>
    <p>i am sdjbdj</p>
    </div>
);

----------------------------------------------------------------------------------------------------

"Fragment"
we can use Fragment to wrap multiple line  <></>

for Example:--
const element = (
    <>
    <p>i am hdhwbd</p>
    <p> idjsbd jdjb mbu</p>
    </>
)

-----------------------------------------------------------------------------------------------------

Element Must be Closed
JSX follows XML rules and therefore HTML elments must be properly closed

close empty element with />
const elment = <input type="text" />;

-------------------------------------------------------------------------------------------------

Attribute class = className

means we use class in html but due to jsx rendwewd in js thats why we use className

const element = <h1 className ="myclass>Helloo World</h1>

-------------------------------------------------------------------------------------------------

JSX in React Components

React uses components to build UIs. Components are independent and reusable bits of code.

React components are like javascript functions and return HTML

JSx work perfect inside the react component

function car(){
    const brand = "ford";
    const model = "Mustang";
    return(
        <>
        <h2>My car</h2>
        <p> it jdi jdn {brand} {model}.</p>
        </>
    );

}
createRoot(document.getElementById('root')).render(<car/>)

-----------------------------------------------------------------------------------------------------------------

React
it is frontend javascript library
React was devloped by the Facebook Software Engineer Jordan Walke
--React is a tool for building UI components

--[(UI components are the building blocks of a user interface , such as buttons, text field, and icons, that allows user to interact with a digital product

--React UI components are custom controls and tools that combine HTML elements, JavaScript(interaction), and CSS(style) to create a suer-friendly interface for modern applications)]

--React creates a Virtual DOM in memory
--Latest version of React Js is 19.0.0(dec 2024)


---------------------------------------------------------------------------------------------------------

React Render HTML

--The process of converting a website's code(like HTML,CSS,and javaScript) into the interactive and visually fromatted page a user sees in a web browser.

--React's goal in many ways to render HTML in web page.
React renders HTML to the web page via a container, and a function called createRoot().
--React uses a container to render HTML in a Web page.

--The createRoot() function takes one argument, an HTML element.
--The purpose of the function is to define the HTML element where a React components should be displayed.

--The render method defines what to render in the HTML container
--in index.html file we use <div id="root"> element.   and  
import {createRoot} from 'react-dom/client'
createRoot(document.getElementById('root)).render(<p>Welcome</p>)


-----------------------------------------------------------------------------------------------------------

variable -- var,let,const
var it is a global scope
let is version of var
const is a variable that once it has been created, its value can never change

-----------------------------------------------------------------------------------------------------------
map()
The map() method creates a new array with the results of calling a function for every array element
for ex:--
const number = {1,2,3,4};
const doubled = number.map(x=> x*2);


--The map() method is commonly used in React to render lists of elements

for ex:-
import{createRoot} from 'react-dom/client'
const fruitlist=['apples','banana','cherry']
function mylist(){
    return(
        <ul>
        {fruitlist.map(fruit=><li key={fruit}>{fruit}</li>)}
        </ul>
    );
}
createRoot(document.getElementById('root')).render(<mylist/>)


----------------------------------------------------------------------------------------------------------

Modules
javascript modules allow you to break up your code into seprate files.
this make easier to code-base
it work on import and export statment.

-----------------------------------------------------------------------------------------------------------------

React Props

Props are argument passed into REACT components
--React props are like function arguments in javaScript and attributes in HTML

for ex:--
function Car(props){
    return(
        <h2>I am a {props.brand}!</h2>
    );

}
createRoot(document.getElementById('root)).render(<Car brand="ford"/>)

The name of the object is props, but you can call it anything you want


-------------------------------------------------------------------------------------------------------------------

children props
for ex:- 


import{createRoot} from 'react-dom/client'

function Son(props){
    return(
        <div>
        <h2>son</h2>
        <div>{props.children}</div>
        </div>
    );
}
function daughter(props){
    return(
        <div>
        <h2> Daughter </h2>
        <div>{props.children}</div>
        </div>
    );
}

function Parent(){
    return(
        <div>
        <h1>My two children</h1>
        <son>
        <p>
        bdhbxu jxnjhxhxj hduhx njxjhdi 
        </p>
        </son>

        <daughter>
        <p>
        fi ufhu huhs gs
        </p>
        </daughter>
        </div>
    );
}
createRoot(document.getElementById('root)).render(<parent/>)




------------------------------------------------------------------------------------------------------------

React Events

just like Html DOM events, React can perform actions based on user events.
React has the same events as HTML: click, change, mouseover

React events are written in camelCase syntax

--onClick 
React event handlers are written inside curly braces:
onClick={shoot}

for ex:--
<button onClick={shoot}> Take a shot!</button>

for ex:--
function football(){
    const shoot=()=>{
        alert("Great shot!");
    }
    return(
        <button onClick={shoot}>Take the shot!</button>
    );
}
createRoot(document.getElementById('root)).render(<football/>);
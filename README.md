# food ordering app


/**
 * Header
 *  -logo
 *  -nav bar Items
 *  -search
 * Body
 *  -Restraunt container
 *  -Restraunt card
 * Footer
 *  -Copyrights
 *  -Links
 *  -Address
 *  -Contact Us
 *
 */
// const Title = () => (
//   <div className="head">
//     <h1>food ordering app</h1>
//   </div>
// );

Two types of Export/Import

-Default Export/Import
export default Component;
import Component from "path";

-Named Export/Import

export const Compnent;
import {Component} from "path";



# React Hooks

what is hooks in react?
- Its nothing by a normal javascript function which is given by the react

(Normal JS utility functions)

-useState() -used to generate superpowerful state variables (you need to import useState from the react module)

-useEffect() takes two arguments one is the arrow function and the other is the dependency array 

2-types of routing-

-client side routing -in client side routing we are not making any network calls just interchanging the components in order to move to the another page
-server side routing- in server side routing we make an network call on to the server fetches the data in order to move to the another page

----------just do keep in mind never ever compare useEffect with componentDidMount their work can be same but behind the scenes they are totally different -------

//(1:43:18) created a variable type object which will store the dummy data passed the avtaar url when its throwing error it removed the attribute even then the image is coming why ?

first react will render with dummy data and in dummy data we do not have the avtaar url attribute than how are you accessing it 


what is component did update ?   it gets executed after the componentDidMount but what is it?
what is component will unmount ? whenever the component will unmount then the unmounting cycle happens

does componentwillmount all happen in functional component behind the scenes?

<!-- read more about set interval and set timeout-->

//what are event listeners?
what is dynamic bundling/chunking/code spliting/lazy loading/on demand loading/dynamic import ?
-to break down the code into small bundles but we are doing this thing in out react page by changing the components
in out single page website or react app
lazy function working?  when the on demand loading takes place its throwing an error in order to handle that he used suspense component imported from react 
suspense component ?

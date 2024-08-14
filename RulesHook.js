//Always write the hooks inside the component or function.
//Component name must be in PascalCase(The first letter should be in upppercase).
//We can directly import or we can directly write it using React.hookName.
//Don't call hooks inside loops, conditions or nested functions.

import React ,{UseState} from 'react';
const RulesHook = () => {
const [myname , setMyname] = useState('chrome');
const changename = () => {
// val = "google chrome";
// console.log("val");
// here, if we donot use useState hook if we only run the changename funtion then the displayable content on the browser will not change google chrome only get printed in the console.
// if we want to change the text on the interface then we have to use the useState hook as we are changing the state.
 let val = myname;
 (val ==  'chrome' )?
 setMyname('google chrome'): setMyname('chrome');
// terinary operator.
// if(){
//  const [myname , setMyname] = useState('chrome');
//} 
// As setMyname is a function and myname is a state variable so they can be called inside the loops, conditions but hook can not be called inside the loops and conditions.
// Hooks always written above the return statement.  
}
return (
<div>
<h1>{myname}</h1>
<button className ="btn" onClick = {changename}> click me </button>
</div>
)
}
export default RulesHook;

//What is Three Dots and handling objects using UseState Hook.
import React ,{UseState} from 'react';
const UseStateobject = () => {
const [myobject, setmyobject] = useState({ name:"AB", Age:45 , degree : "btech" , roll no : 45 });
// here, an object is passed as initial value  of the myobject state variable (here an array, object, strings , any value can be passed as the initial value).
   
    const ChangeMyobject = () => {
      setmyobject({...myobject, name:"AS"});
      //...myobject ...  is spread operator followed by existing object and , the properties of the object you want to change.
      //This makes the only in the modification of the myobject state variable with name value changed and all remain same i.e; age,degree,roll no.
    }
  
return (
      <div>
      <h1 className = "h1style">Name: {myobject.Name} & Age: {myobject.age}  & Degree : {myobject.degree} & Roll no : {myobject.roll no} <h1/> 
   //myobject contain object so object data can be accessed using . example ; Name: {myobject.Name} & Age: {myobject.age}  & Degree : {myobject.degree} & Roll no : {myobject.roll no} .
      <button className ="btn" onClick={ChangeMyobject}>clear<button/>
      <div/>  
 
export default UseStateobject;

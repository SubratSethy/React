import React ,{UseState} from 'react';
const UseStateArray= () => {

    var Biodata = [
        {
            id:0, Name:"michel",age:26
        },{
            id:1, Name:"mike",age:45
        }
    ]
    const [dataArray , setdataArray] = useState(Biodata);
    //dataArray will contain all the data of the array Biodata.
    //dataArray is a statevariable.
    const ClearArray = () => {
      //Biodata = []; 
      // On clicking on the button Biodata array get cleared but output will be not shown on ui. so, we have to use UseState.
      setdataArray();
    }

//Biodata is an array of objects, so within the [] , {},{} are written.
//var Biodata  will be written const Biodata can not be written as we are going to change the array.
// At index 0 , first object(  id:0, Name:"michel",age:26) is placed.
//At index 1, 2nd object (id:1, Name:"mike",age:45) is placed.
//map method is used to loop the array i.e; iterate over all the elements of the array.
//key={curElm.id} we have to pass this key in the return statement.
 return (
    <>
    {
    Biodata.map((curElm)) => <h1 className = "h1style"  key={curElm.id} >Name: {curElm.Name} & Age: {curElm.age} <h1/> 
    }
    <button className ="btn" onClick={ClearArray}>clear<button/>
    </>

 )
}
export default UseStateArray;

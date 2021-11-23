// import MyFirstClassComponent from "./MyFirstClassComponent";
// import MyFirstComponent from "./MyFirstComponent";
// import MySecondComponent from "./MySecondComponent";
// import PropsValidate from "./propValidate";
// import MySecondClassComponent from "./MySecondClassComponent";
// import ParentClass from "./ParentClass";
// import { Children } from "react";
import SmChildComponent from "./SmChildComponent";
import SmParentComponent from "./SmParentComponent";

function App() {
  const name="Surya";
  
  return (
    <div>

      <SmParentComponent></SmParentComponent>
      
      
      {/* <Child> </Child>
      <MyFirstClassComponent name={"suryabhan"} age={23}></MyFirstClassComponent> */}
      {/* <MyFirstClassComponent name={"Surya"} age={24}></MyFirstClassComponent> */}
      {/* <MySecondClassComponent name={"suraj"} age={24}></MySecondClassComponent> */}
     
      {/* <h1>hello {name && name.length ? name : "World"}</h1>
      <MyFirstComponent name={name} age={23}>
      <h2>Some data passed from the App Component</h2></MyFirstComponent>
      <MySecondComponent name={name1} age={24}/> */}
      {/* <PropsValidate name={"Surya"} age={23} renderable={  "Some String"} rollNumber={10} remark={"Some Remark"} myArr={[1,2,3,4]} myObject={{name:"surya",age:23}} >
        <h1>Hello</h1>
        </PropsValidate> */}

    </div>
  );
     
}

export default App;


// && name.length ? name : "World"
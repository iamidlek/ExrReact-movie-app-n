import { useEffect, useRef } from "react";

const useClick = onClick => {
  if (typeof onClick !== "function"){
    return;
  }
  const element = useRef();
  useEffect(()=> {
    if(element.current) {
      element.current.addEventListener("click", onClick)
    }
    // return받은 함수는 componentWillUnmount때 실행됨
    return () => {
      if (element.current){
        element.current.removeEventListener("click", onClick)
      }
    }
  },[])
  return element
}


function App() {
  const sayHello = () => console.log("say Hello")
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      {/* <input ref={potato} placeholder="hi" /> */}
    </div>
  );
}

export default App;

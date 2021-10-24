# useState

- hook useState를 사용한 경우 (간단)

```js
import { useState } from "react";

export default function App() {
  const [item, setItem] = useState(1);
  // const countItem = useState(1);
  // const item = countItem[0];
  // const setItem = countItem[1];
  const increse = () => setItem(item + 1);
  const decrese = () => setItem(item - 1);
  return (
    <div className="App">
      <div>{item}</div>
      <button onClick={increse}>+</button>
      <button onClick={decrese}>-</button>
    </div>
  );
}
```

- class에서 setState로 만들면 복잡

```js
import React from "react";

class App extends React.Component {
  state = {
    item: 1
  }
  render() {
    const { item } = this.state;
    return (
      <div className="App">
      <div>{item}</div>
      <button onClick={this.increse}>+</button>
      <button onClick={this.decrese}>-</button>
    </div>
    )
  }
  increse = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  }
  decrese = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
  }
}
```

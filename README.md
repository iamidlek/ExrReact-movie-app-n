# React 기초( Component, Props, State, Route )

-------------

### Props

- 부모 컴포넌트에서 전달되어 오는 데이터
- 변경이 불가

### State

- 컴포넌트 자신이 가지는 데이터
- setState를 통한 변경 가능

### Function Component

- App 에서 Food로 props를 넘겨줌

```js
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}
```

### Class Component

```js
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
```

```js
class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
      // 1. 값을 바로 설정
      this.setState({ isLoading: false });
      // 2. this.state. 해서 사용하는 것 보다 권장 되는 방법
      this.setState(current => ({ 
        isLoading: current.isLoading = false 
      }));
    }, 1000);
  }
```

### Route

- HashRouter 내부에 작성

```js
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}
```

- Link로 이동과 props 전달

```js
<Link
  to={{
    pathname: `/movie/${id}`,
    state: {
      year,
      title,
      summary,
      poster,
      genres
    }
  }}
>
```

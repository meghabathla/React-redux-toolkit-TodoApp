import "./App.css";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

function App() {
  return (
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;

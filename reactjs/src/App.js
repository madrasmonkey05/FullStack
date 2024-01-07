// Test docFile

// Redux = Action -> dispatch -> Reducer -> Store
// App.jsx
import "./App.css";
import { CustomerAdd } from "./customerAdd";
import { Provider } from "react-redux";
import { MyStore } from "./store";

function App() {
  return (
    <Provider store={MyStore}>
      <div className="App">
        <CustomerAdd />
      </div>
    </Provider>
  );
}
export default App;

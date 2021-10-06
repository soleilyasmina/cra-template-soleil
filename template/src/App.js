import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <main>
          <Route exact path="/">
            Welcome to the root route!
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;

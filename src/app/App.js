import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Header from "../components/header/header";
import Grid from "../components/grid/grid";

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/grid" component={Grid} />
            </Switch>
        </div>
    );
}

export default App;

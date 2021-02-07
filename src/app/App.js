import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Header from "../header/header";
import Grid from "../grid/grid";

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

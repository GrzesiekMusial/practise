import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Header from "../components/header/header";
import Grid from "../components/grid/grid";
import Flex from "../components/flex/flex";
import Hamburger from "../components/hamburger/hamburger";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/grid" component={Grid} />
                <Route exact path="/flex" component={Flex} />
                <Route exact path="/burger" component={Hamburger} />
            </Switch>
        </div>
    );
}

export default App;

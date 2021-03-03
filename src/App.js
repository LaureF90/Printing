import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from "./components/Card";
import Favourites from "./components/Favourites";
import Home from "./components/Home";
import Topics from "./components/Topics";

export default function App() {
  return (
  <Router>
    <div>
      <nav className="Nav">
            <ul className="List">
              <img src={"https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png"} className="Logo" alt="logo" />
               <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
                <li>
                  <Link to="/favourites"><span>💗</span></Link>
                </li>
                <li>
                  <Link to="/card"><span>🛒</span></Link>
                </li>
              </ul>
        </nav>

      <body>
            <div className="Search-container">
            <input type="text" placeholder="Looking for a topic?" name="search"></input>
            <button type="search"><span>🔎</span></button>
            </div>
      </body>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/topics' component={Topics} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/card' component={Card} />
      </Switch>       
      <footer>
              <p>© Printie 2001 - 2021. All rights reserved.</p>
      </footer>
    </div>
  </Router>
    );
  }



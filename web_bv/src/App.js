import React, { Component } from "react";

import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {" "}
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="">Start</Link>
                </li>
                <li>
                  <Link to="">Aktualności</Link>
                </li>
                <li>
                  <Link to="">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

import React from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Test3 from "./Test3.js";
import Test2 from "./Test2.js";


const Test1 = () => {
    return(
        <div>
            111111
          <Router>
            <header>
            <Link to="./">
                  <button>Test1로</button>
             </Link>
             <Link to="./Test2">
                  <button>Test2로</button>
             </Link>
             <Link to="./Test3">
                  <button>Test3로</button>
             </Link>
            </header>
             <hr />
            <main>
             <Route path="/Test1" component={Test1} />
               <Route path="/Test2" component={Test2} />
               <Route path="/Test3" component={Test3} />
             </main>
         </Router>
        </div>
    )
}

export default Test1;
import React from "react";
import Postform  from "./postform";
import App1 from "./com";
import MyComponent  from "./com";
var cors = require('cors')


function App() {
  return (
    <div className="App">

    <Postform/>
    <App1/>

    </div>
  );
}
//App().use(cors()) // Use this after the variable declaration

export default App;

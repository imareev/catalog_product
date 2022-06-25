import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
var cors = require('cors')
//App().use(cors()) // Use this after the variable declaration
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// const corsOptions ={
//     origin:'http://localhost:3000',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// App().use(cors(corsOptions));

import React from 'react';
import './App.css';
import "./assets/css/bootstrap.min.css"
import RouterComponent from './routes/RouterComponent';

function App() {
  return (
    <div className="App">
        <React.Fragment>
          <RouterComponent/>
        </React.Fragment>
    </div>
  );
}

export default App;

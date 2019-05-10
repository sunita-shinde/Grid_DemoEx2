import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </head>
  <body>
    <div className="parent">
      <div className="gridContainer">
       <div className="header">header</div>
       <div className="sidebar">Sidebar</div>
       <div className="content">content<br/>More Content than we had before so this column is now quite tall.
       </div>
       <div className="footer">footer</div>
      </div>
    </div>
  </body>
</html>
  );
}

export default App;

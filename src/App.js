import React from 'react';

import Header from './components/Header/Header';
import MainContainer from './components/containers/MainContainer/MainContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

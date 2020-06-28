import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import MainContainer from './components/containers/MainContainer/MainContainer';
import MainContent from './components/containers/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent>
        <MainContainer />
      </MainContent>
      {/* <Footer/> */ }
    </div>
  );
}

export default App;

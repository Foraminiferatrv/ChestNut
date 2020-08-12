import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import MainContainer from './components/containers/MainContainer/MainContainer';
import MainContent from './components/containers/MainContent/MainContent';
import Footer from './components/containers/Footer/Footer';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <MainContent>
          <MainContainer />
        </MainContent>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

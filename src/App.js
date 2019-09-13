import React from 'react';
import MainContainer from './components/MainContainer';
import { Provider } from 'react-redux';
import store from './js/store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;

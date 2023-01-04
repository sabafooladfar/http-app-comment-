import './App.css';
import React from 'react';
import Discussion from './Container/Discussion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Discussion/>
      <ToastContainer />
    </div>
  );
}

export default App;

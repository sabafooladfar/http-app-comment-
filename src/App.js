import './App.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

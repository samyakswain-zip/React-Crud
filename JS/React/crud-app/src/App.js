import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin';
import CRUDoperations from './components/CRUDOperations';
import Test from './components/Test';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/test' element={<Test />} />

          {/* <Route path='/admin' element={<Admin />} />
          <Route path='/crud' element={<CRUDoperations />} */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;

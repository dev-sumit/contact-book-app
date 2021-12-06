import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, DatePicker } from 'antd';
import Contacts from '../Contacts/Container/contactsContainer';

function App() {
  return (
    <div className="App">
      <Contacts></Contacts>
    </div>
  );
}

export default App;

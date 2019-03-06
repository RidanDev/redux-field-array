import React, { Component } from 'react';
import FieldArrayForm from './FieldArrayForm'
import showResults from './showResults'

import './App.css';

const App = props => (
  <FieldArrayForm onSubmit={showResults} />
);


export default App;

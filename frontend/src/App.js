import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
		<div className='App'>
			<header className='App-header'>
				
				<Route path='/home' component={Home} />
				
			</header>
		</div>
	);
}

export default App;

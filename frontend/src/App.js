import logo from './logo.svg';
import Home from './components/Home';
import Article from "./components/Article"
import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./App.css"

function App() {
	
  return (
		<div className='App'>
			<header className='App-header'>
				<Route exact path='/' component={Home} />
				<Route path='/Article' component={Article} />
			</header>
		</div>
	);
}

export default App;

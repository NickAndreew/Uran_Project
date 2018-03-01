import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import AlbumsView from './AlbumsView.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<AlbumsView />

			</div>
		);
	}
}

export default App;

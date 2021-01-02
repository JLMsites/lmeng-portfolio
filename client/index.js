import React from 'react';
import ReactDOM from 'react-dom';
import '../public/style.css';
// import * as PixiApp from '../pixi/app.js';
import Project from './ProjectView';
import Welcome from './WelcomeView';
import Contact from './ContactView';
require('babel-core/register');
require('babel-polyfill');

ReactDOM.render(
	<div>
		<Project />
		{/* <Welcome /> */}
		{/* <Contact /> */}
	</div>,
	document.getElementById('app')
);

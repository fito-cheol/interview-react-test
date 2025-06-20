import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBar from './components/AppBar';
import Routes from './routes';
import './App.css';

const App = () => {
	return (
		<>
			<AppBar />
			<div
				style={{
					marginTop: '80px',
					minHeight: 'calc(100vh - 80px)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<Routes />
			</div>
		</>
	);
};

export default function AppWithRouter() {
	return (
		<Router>
			<App />
		</Router>
	);
}

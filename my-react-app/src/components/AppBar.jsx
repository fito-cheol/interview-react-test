import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => (
	<nav
		style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			background: '#1976d2',
			color: 'white',
			padding: '1rem',
			zIndex: 1000,
			display: 'flex',
			justifyContent: 'center',
			boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
		}}
	>
		<Link
			to="/shoppingCart/test"
			style={{
				marginRight: '1rem',
				color: 'white',
				textDecoration: 'none',
				fontWeight: 500,
			}}
		>
			쇼핑카트 테스트
		</Link>
		<Link
			to="/shoppingCart/example"
			style={{
				marginRight: '1rem',
				color: 'white',
				textDecoration: 'none',
				fontWeight: 500,
			}}
		>
			쇼핑카트 예시
		</Link>
	</nav>
);

export default AppBar;

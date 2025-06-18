import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AppBar = () => {
	const location = useLocation();

	return (
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
					color: location.pathname == '/shoppingCart/test' ? 'white' : 'black',
					textDecoration: 'none',
					fontSize: location.pathname == '/shoppingCart/test' ? 20 : 18,
					fontWeight: location.pathname == '/shoppingCart/test' ? 900 : 500,
				}}
			>
				쇼핑카트 테스트
			</Link>
			<Link
				to="/shoppingCart/example"
				style={{
					marginRight: '1rem',
					color:
						location.pathname == '/shoppingCart/example' ? 'white' : 'black',
					textDecoration: 'none',
					fontSize: location.pathname == '/shoppingCart/example' ? 20 : 18,
					fontWeight: location.pathname == '/shoppingCart/example' ? 900 : 500,
				}}
			>
				쇼핑카트 예시
			</Link>
			{/* <Link
			to="/loading"
			style={{
				marginRight: '1rem',
				color: 'white',
				textDecoration: 'none',
				fontWeight: 500,
			}}
		>
			로딩바
		</Link> */}
		</nav>
	);
};

export default AppBar;

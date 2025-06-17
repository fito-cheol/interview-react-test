import { Routes, Route, Navigate } from 'react-router-dom';
import ShoppingCartTest from '../pages/ShoppingCartTest';
import ShoppingCart from '../pages/ShoppingCartExample';
import Loading from '../pages/Loading';

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/shoppingCart/test" element={<ShoppingCartTest />} />
			<Route path="/shoppingCart/example" element={<ShoppingCart />} />
			<Route path="/loading" element={<Loading />} />
			<Route path="*" element={<Navigate to="/shoppingCart/test" />} />
		</Routes>
	);
};

export default AppRouter;

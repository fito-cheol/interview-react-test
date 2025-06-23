import { useState } from 'react';
import './ShoppingCart.css';
import _ from 'lodash';

const products = [
	{ id: 1, name: '사과', price: 1000 },
	{ id: 2, name: '바나나', price: 1500 },
	{ id: 3, name: '오렌지', price: 2000 },
];

// 기능:
//   상품 목록에서 "추가" 버튼 클릭 시 장바구니에 상품 추가.
//   장바구니에서 상품 수량 증가/감소 버튼 제공.
//   수량이 0이 되면 장바구니에서 해당 상품 제거.
//   장바구니가 비어 있으면 "장바구니가 비어 있습니다" 메시지 표시.

function ShoppingCartTest() {
	const [cart, setCart] = useState([]);

	const handleAddProduct = (product) => {
		let tmp = [...cart];

		const index = _.findIndex(tmp, { id: product.id });

		//
		// const isPoroductExist = index > -1;

		if (index === -1) {
			tmp.push({ ...product, count: 1 });
		} else {
			tmp[index]['count'] = tmp[index]['count'] + 1;
		}

		console.log(tmp);

		setCart(tmp);
	};

	// const handleDeleteProduct = () => {

	// };

	return (
		<div className="shopping-cart">
			<h1>쇼핑</h1>
			<div className="product-list">
				<h2>상품 목록</h2>
				<ul>
					{products.map((product) => (
						<li key={product.id}>
							{`${product.name} - ${product.price}원`}
							<button onClick={() => handleAddProduct(product)}>추가</button>
						</li>
					))}
				</ul>
			</div>
			<div className="cart">
				<h2>장바구니</h2>

				{/* 빈 경우 */}
				{cart.length === 0 && <p>장바구니가 비어 있습니다.</p>}

				{/* 값이 있는 경우 */}
				{cart.length > 0 && (
					<ul>
						{cart.map((item) => (
							<li key={item.id}>
								{`${item.name} - ${item.price} x ${item.count}개`}
								<button>+</button>
								<button>-</button>
							</li>
						))}
					</ul>
				)}

				<p className="total">총액: 4000원</p>
			</div>
		</div>
	);
}

export default ShoppingCartTest;

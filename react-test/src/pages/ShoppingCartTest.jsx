import './ShoppingCart.css';

// const products = [
// 	{ id: 1, name: '사과', price: 1000 },
// 	{ id: 2, name: '바나나', price: 1500 },
// 	{ id: 3, name: '오렌지', price: 2000 },
// ];

// 기능:
//   상품 목록에서 "추가" 버튼 클릭 시 장바구니에 상품 추가.
//   장바구니에서 상품 수량 증가/감소 버튼 제공.
//   수량이 0이 되면 장바구니에서 해당 상품 제거.
//   장바구니가 비어 있으면 "장바구니가 비어 있습니다" 메시지 표시.

function ShoppingCartTest() {
	return (
		<div className="shopping-cart">
			<h1>쇼핑</h1>
			<div className="product-list">
				<h2>상품 목록</h2>
				<ul>
					<li>
						사과 - 1000원
						<button>추가</button>
					</li>
				</ul>
			</div>
			<div className="cart">
				<h2>장바구니</h2>
				{/* 빈 경우 */}
				<p>장바구니가 비어 있습니다.</p>
				{/* 값이 있는 경우 */}
				<ul>
					<li>
						사과 - 1000원 x 4개
						<button>+</button>
						<button>-</button>
					</li>
				</ul>
				<p className="total">총액: 4000원</p>
			</div>
		</div>
	);
}

export default ShoppingCartTest;

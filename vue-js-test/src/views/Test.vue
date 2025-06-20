<template>
  <div class="shopping-cart-container">
    <h1>장바구니</h1>
    <div class="product-list-section">
      <h2>상품 목록</h2>
      <ul class="product-list">
        <li class="product-list-item">
          사과 - 1000원
          <button class="product-list-add-button">추가</button>
        </li>
      </ul>
    </div>
    <div class="cart-section">
      <h2>장바구니</h2>
      <p class="empty-cart">장바구니가 비어 있습니다.</p>
      <ul class="cart-list">
        <li class="cart-item">
          사과 - 1000원 x 1
          <button class="cart-increase-button">+</button>
          <button class="cart-decrease-button">-</button>
        </li>
      </ul>
      <p class="cart-total">총액: 1000원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      products: [
        { id: 1, name: "사과", price: 1000 },
        { id: 2, name: "바나나", price: 1500 },
        { id: 3, name: "오렌지", price: 2000 },
      ],
    };
  },
};
</script>

<style scoped>
.shopping-cart-container {
  max-width: 250px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.cart-section {
  margin-bottom: 20px;
}

.cart-list {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.cart-increase-button,
.cart-decrease-button {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.cart-increase-button:hover,
.cart-decrease-button:hover {
  background-color: #0056b3;
}

.cart-total {
  font-weight: bold;
  text-align: right;
  margin-top: 10px;
}

.cart-empty {
  color: #888;
}
.product-list-section {
  margin-bottom: 20px;
}

.product-list {
  list-style: none;
  padding: 0;
}

.product-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.product-list-add-button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.product-list-add-button:hover {
  background-color: #0056b3;
}
</style>

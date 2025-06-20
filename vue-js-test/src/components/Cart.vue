<template>
  <div class="cart-section">
    <h2>장바구니</h2>
    <p v-if="cartItems.length === 0" class="cart-empty">
      장바구니가 비어 있습니다.
    </p>
    <ul v-else class="cart-list">
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        {{ item.name }} - {{ item.price }}원 x {{ item.quantity }}
        <button
          class="cart-increase-button"
          @click="$emit('increase', item.id)"
        >
          +
        </button>
        <button
          class="cart-decrease-button"
          @click="$emit('decrease', item.id)"
        >
          -
        </button>
      </li>
    </ul>
    <p v-if="cartItems.length > 0" class="cart-total">
      총액: {{ totalPrice }}원
    </p>
  </div>
</template>

<script>
export default {
  name: "CartComp",
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
  },
  emits: ["increase", "decrease"],
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
};
</script>

<style scoped>
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
</style>

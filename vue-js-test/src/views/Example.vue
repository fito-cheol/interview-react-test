<template>
  <div class="shopping-cart-container">
    <h1>장바구니</h1>
    <ProductList :products="products" @add-to-cart="handleAddToCart" />
    <Cart
      :cart-items="cartItems"
      @increase="handleIncrease"
      @decrease="handleDecrease"
    />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import Cart from "../components/Cart.vue";

export default {
  name: "ShoppingCart",
  components: { ProductList, Cart },
  data() {
    return {
      products: [
        { id: 1, name: "사과", price: 1000 },
        { id: 2, name: "바나나", price: 1500 },
        { id: 3, name: "오렌지", price: 2000 },
      ],
      cartItems: [],
    };
  },
  methods: {
    handleAddToCart(product) {
      const existingItem = this.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    handleIncrease(id) {
      const item = this.cartItems.find((item) => item.id === id);
      if (item) item.quantity += 1;
    },
    handleDecrease(id) {
      const item = this.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          this.cartItems = this.cartItems.filter((item) => item.id !== id);
        }
      }
    },
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
</style>

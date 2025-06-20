<template>
  <div class="product-list-section">
    <h2>상품 목록</h2>
    <ul class="product-list">
      <li
        v-for="product in products"
        :key="product.id"
        class="product-list-item"
      >
        {{ product.name }} - {{ product.price }}원
        <button
          class="product-list-add-button"
          @click="$emit('add-to-cart', product)"
        >
          추가
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  emits: ["add-to-cart"],
};
</script>

<style scoped>
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

<template>
  <div>
    <AppBar />
    <div class="container mx-auto mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",
  components: { AppBar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

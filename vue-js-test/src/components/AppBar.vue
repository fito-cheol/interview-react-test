<template>
  <nav class="app-bar">
    <div class="nav-container">
      <div class="logo">My App</div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/test" class="nav-link">Test</router-link>
        <router-link to="/example" class="nav-link">Example</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style scoped>
.app-bar {
  background-color: #2563eb;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 16px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.nav-link:hover {
  color: #bfdbfe;
}
</style>

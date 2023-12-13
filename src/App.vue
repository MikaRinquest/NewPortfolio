<template>
  <Navbar class="z-10" />
  <router-view
    class="prose max-w-none prose-headings:text-white prose-headings:font-normal h-screen"
  />
  <!--Prose is tailwind typography to target specific sections-->
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: normal;
  color: white;
}

nav a.router-link-exact-active {
  color: #ffff00;
}
</style>

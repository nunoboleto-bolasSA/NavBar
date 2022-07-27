<template>
  <Toogle />
  <Navbar />
</template>

<script>
import navbar from "./components/Navbar.vue";
import toogle from "./components/Toogle.vue";
export default {
  name: "App",
  components: {
    Navbar: navbar,
    Toogle: toogle,
  },
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

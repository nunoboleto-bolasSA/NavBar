<template>
  <div class="toogle" :class="{ active: isActive }" @click="change()">
    <ion-icon name="menu-outline" class="open"></ion-icon
    ><ion-icon name="close-outline" class="close"></ion-icon>
  </div>
</template>

<script>
import { store } from "@/store/Navbar.js";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    change: function () {
      this.isActive = !this.isActive;
      store.changeStatus();
    },
  },
};
</script>

<style>
</style>

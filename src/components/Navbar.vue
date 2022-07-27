<template>
  <div class="navigation" :class="{ active: store.navigationBarActive }">
    <ul>
      <li
        :class="{ list, active: i === activeItem }"
        @mouseover="selectItem(i)"
        v-for="(item, i) in items"
        :key="i"
      >
        <a href="#">
          <span class="icon"><ion-icon :name="item.icon"></ion-icon></span>
          <span class="title">{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from "@/store/Navbar.js";

export default {
  data() {
    return {
      store,
      activeItem: null,
      items: [
        { id: 1, icon: "home-outline", title: "Home" },
        { id: 2, icon: "finger-print-outline", title: "Informations" },
      ],
    };
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
  },
};
</script>

<style>
</style>
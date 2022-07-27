import { reactive } from "vue";

export const store = reactive({
  navigationBarActive: false,
  changeStatus() {
    this.navigationBarActive = !this.navigationBarActive;
  }
});

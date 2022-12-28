import { ref } from "vue";

export const scrollbarRef = ref();

export const scrollToTop = () => {
  scrollbarRef.value.setScrollTop(0);
};

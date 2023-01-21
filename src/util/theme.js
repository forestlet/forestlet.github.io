import { ref } from "vue";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (darkMode) document.getElementsByTagName("html")[0].classList.add("dark");

export const theme = ref(darkMode ? "dark" : "light");

export const changeTheme = () => {
  if (theme.value == "dark") {
    theme.value = "light";
  } else {
    theme.value = "dark";
  }

  document.getElementsByTagName("html")[0].className = theme.value;
};

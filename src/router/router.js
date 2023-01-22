import { createRouter, createWebHashHistory } from "vue-router";
import { scrollToTop } from "@/util/scrollbar.js";
import HomePage from "@/pages/HomePage.vue";
import ProjectPage from "@/pages/ProjectPage.vue";
import WorkPage from "@/pages/WorkPage.vue";
import AboutPage from "@/pages/AboutPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/project", component: ProjectPage },
  { path: "/work", component: WorkPage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

watch(router.currentRoute, () => {
  scrollToTop();
});

export default router;

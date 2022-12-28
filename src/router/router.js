import { createRouter, createWebHashHistory } from "vue-router";
import { scrollToTop } from "@/util/scrollbar.js";
import Home from "@/pages/Home.vue";
import Project from "@/pages/Project.vue";
import Work from "@/pages/Work.vue";
import About from "@/pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/project", component: Project },
  { path: "/work", component: Work },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

watch(router.currentRoute, () => {
  scrollToTop();
});

export default router;

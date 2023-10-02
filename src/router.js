import Vue from "vue";
// import { createRouter, createWebHashHistory } from "vue-router";
import VueRouter from "vue-router";
import HomePage from "./components/UI/HomePage.vue";
import MyPresentation from "./components/UI/MyPresentation.vue";
import ExperienceEducation from "./components/UI/ExperienceEducation.vue";
import MySkills from "./components/UI/MySkills.vue";
import ContactMe from "./components/Forms/ContactMe.vue";
import NotFound from "./components/Nav/NotFound.vue";
import store from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  // history: createWebHashHistory(),
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
      name: "Home",
    },
    {
      path: "/home",
      component: HomePage,
      name: "Home",
    },
    {
      path: "/presentation",
      component: MyPresentation,
    },
    {
      path: "/experience-education",
      component: ExperienceEducation,
    },
    {
      path: "/skills",
      component: MySkills,
    },
    {
      path: "/contact-me",
      component: ContactMe,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "Home") {
    store.commit("setActiveBar", "HomeBar");
  } else {
    store.commit("setActiveBar", "NavBar");
  }
  next();
});

export default router;

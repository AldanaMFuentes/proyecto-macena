import Vue from "vue";
// import { createRouter, createWebHashHistory } from "vue-router";
import VueRouter from "vue-router";
import HomePage from "./components/UI/HomePage.vue";
import MyPresentation from "./components/UI/MyPresentation.vue";
import ExperienceEducation from "./components/UI/ExperienceEducation.vue";
import MySkills from "./components/UI/MySkills.vue";
import ContactMe from "./components/Forms/ContactMe.vue";
import NotFound from "./components/Nav/NotFound.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  // history: createWebHashHistory(),
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: HomePage
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
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     console.log("🚀 ~ file: router.js:44 ~ scrollBehavior ~ savedPosition:", savedPosition)
  //     return savedPosition;
  //   } else {
  //     console.log("🚀 ~ file: router.js:44 ~ scrollBehavior ~ savedPosition: else", savedPosition)
  //     return {
  //       x: 250,
  //       y: 175,
  //     };
  //   }
  // },
});

export default router;

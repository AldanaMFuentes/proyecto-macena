import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

const app = new Vue({
  vuetify,
  router,
  render: (h) => h(App),
});

// app.use(router);
app.$mount("#app");

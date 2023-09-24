<template>
  <v-app class="overflow-hidden">
    <HomeBar />
    <v-main id="home" class="custom-sheet">
      <router-view></router-view>
    <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import HomeBar from "./components/Layout/HomeBar.vue";
import AppFooter from "./components/Layout/AppFooter.vue";
// import NavBar from "./components/Layout/NavBar.vue";

export default {
  name: "App",

  components: { HomeBar, AppFooter },
};
</script>

<style>
.custom-sheet {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
html {
  overflow: hidden;
}
.scrollable {
  overflow-y: scroll;
}
.v-main__wrap {
  min-height: 500px;
}
.v-toolbar--prominent .v-toolbar__content {
  display: flex;
  align-items: center;
}
</style>

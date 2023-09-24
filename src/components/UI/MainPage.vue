<template>
  <div>
    <NavBar />
    <v-sheet class="custom-sheet">
      <v-container style="height: 128px"></v-container>
      <v-main style="padding: 0px">
        <!-- esto supuestamente redirecciona a los componentes desde la navbar -->
        <router-view></router-view>
      </v-main>
      <AppFooter />
    </v-sheet>
  </div>
</template>

<script>
import NavBar from "./components/Layout/NavBar.vue";
import AppFooter from "./components/Layout/AppFooter.vue";

export default {
  name: "MainPage",

  components: {
    NavBar,
    AppFooter,
  },
};
</script>

<style scoped>
/* .custom-sheet {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
}
.v-toolbar--prominent .v-toolbar__content {
  display: flex;
  align-items: center;
}
html {
  overflow: hidden;
}
.scrollable {
  overflow-y: scroll;
}
.v-main__wrap {
  min-height: 500px;
} */
</style>

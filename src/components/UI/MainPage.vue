<template>
  <v-app class="overflow-hidden">
    <NavBar />
    <v-sheet id="scrolling-techniques-3" class="custom-sheet">
      <v-container style="height: 128px"></v-container>
      <v-main style="padding: 0px">
        <!-- <MainPage v-if="selectedComponent === 'main-page'"/>
        <ExperienceEducation v-if="selectedComponent === 'experience-education'"/>
        <MySkills v-if="selectedComponent === 'my-skills'"/>
        <ContactMe v-if="selectedComponent === 'contact-me'"/> -->

        <!-- <component :is="selectedComponent"> </component> -->
        <router-view></router-view>
      </v-main>
      <AppFooter />
    </v-sheet>
  </v-app>
</template>

<script>
import NavBar from "./components/Layout/NavBar.vue";
import AppFooter from "./components/Layout/AppFooter.vue";
// import router from './router.js';
// import MainPage from "./components/UI/MainPage.vue";
// import ExperienceEducation from "./components/UI/ExperienceEducation.vue";
// import MySkills from "./components/UI/MySkills.vue";
// import ContactMe from "./components/Forms/ContactMe.vue";

export default {
  name: "MainPage",

  components: {
    NavBar,
    AppFooter,
    // MainPage,
    // ExperienceEducation,
    // MySkills,
    // ContactMe,
  },

  data() {
    return {
      // selectedComponent: "main-page",
      // actualPath: router.history.current.path
    };
  },
  methods: {
    // setSelectedComponent(cmp) {
    //   this.selectedComponent = cmp;
    // },
  },
  // mounted() {
  //   if (this.actualPath == "/MainPage") {
  //     // let v = document.getElementById("botonPresentacion");
  //     // console.log(v);
  //     // v.click();
  //     this.$refs.botonPresentacion.click();
  //     console.log("🚀 ~ file: App.vue:104 ~ mounted ~ this.$refs.botonPresentacion.click();:", this.$refs.botonPresentacion)
  //   } 
  //   console.log(this.actualPath);
  // }
};
</script>

<style>
.custom-sheet {
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
}
</style>

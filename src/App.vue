<template>
  <v-app class="overflow-hidden">
    <v-app-bar
      app
      absolute
      color="#1E355F"
      dark
      shrink-on-scroll
      src="./assets/nav-bar-photo.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <div class="d-flex align-center v-item-group theme--dark">
        <!-- <v-btn text @click="setSelectedComponent('main-page')"></v-btn> -->
        <router-link to="/MainPage">
          <button
            type="button"
            class="v-btn v-btn--text theme--dark v-size--default"
          >
            <span class="v-btn__content"> Presentación </span>
          </button>
        </router-link>
        <router-link to="/ExperienceEducation">
          <button
            type="button"
            class="v-btn v-btn--text theme--dark v-size--default"
          >
            <span class="v-btn__content">Experiencia y educación</span>
          </button>
        </router-link>
        <router-link to="/MySkills">
          <button
            type="button"
            class="v-btn v-btn--text theme--dark v-size--default"
          >
            <span class="v-btn__content">Aptitudes</span>
          </button>
        </router-link>
        <router-link to="/ContactMe">
          <button
            type="button"
            class="v-btn v-btn--text theme--dark v-size--default"
          >
            <span class="v-btn__content">Contacto</span>
          </button>
        </router-link>
      </div>

      <v-spacer style="width: 300px"></v-spacer>
    </v-app-bar>
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
import AppFooter from "./components/Layout/AppFooter.vue";
// import MainPage from "./components/UI/MainPage.vue";
// import ExperienceEducation from "./components/UI/ExperienceEducation.vue";
// import MySkills from "./components/UI/MySkills.vue";
// import ContactMe from "./components/Forms/ContactMe.vue";

export default {
  name: "App",

  components: {
    AppFooter,
    // MainPage,
    // ExperienceEducation,
    // MySkills,
    // ContactMe,
  },

  data() {
    return {
      // selectedComponent: "main-page",
    };
  },
  methods: {
    // setSelectedComponent(cmp) {
    //   this.selectedComponent = cmp;
    // },
  },
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
/* .selected-button:focus {
  border-color: white;
  background-color: transparent;
}
.selected-button:active {
  border-color: transparent;
  background-color: transparent;
} */
/* a.router-link-active {
  position: absolute;
  transform: scale(0);
  text-decoration: underline;
  color: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
} */
</style>

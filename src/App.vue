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
      <div class="d-flex align-center">
        <v-btn text @click="setSelectedComponent('main-page')">
          Presentación
        </v-btn>
        <v-btn text @click="setSelectedComponent('experience-education')">
          Experiencia y educación
        </v-btn>
        <v-btn text @click="setSelectedComponent('my-skills')">
          Aptitudes
        </v-btn>
        <v-btn text @click="setSelectedComponent('contact-me')">
          Contacto
        </v-btn>
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
        <component :is="selectedComponent"> </component>
      </v-main>
      <AppFooter />
    </v-sheet>
  </v-app>
</template>

<script>
import MainPage from "./components/UI/MainPage.vue";
import AppFooter from "./components/Layout/AppFooter.vue";
import ExperienceEducation from "./components/UI/ExperienceEducation.vue";
import MySkills from "./components/UI/MySkills.vue";
import ContactMe from "./components/Forms/ContactMe.vue";

export default {
  name: "App",

  components: {
    MainPage,
    AppFooter,
    ExperienceEducation,
    MySkills,
    ContactMe,
  },

  data() {
    return {
      selectedComponent: "main-page",
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
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
</style>

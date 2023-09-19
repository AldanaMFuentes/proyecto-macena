<template>
<!-- acá iría el home con las redirecciones a los componentes (sin navbar y footer) -->
  <v-app class="overflow-hidden">
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
    </v-sheet>
  </v-app>
</template>

<script>
// import router from './router.js';
// import MainPage from "./components/UI/MainPage.vue";
// import ExperienceEducation from "./components/UI/ExperienceEducation.vue";
// import MySkills from "./components/UI/MySkills.vue";
// import ContactMe from "./components/Forms/ContactMe.vue";

export default {
  name: "TheHome",

  components: {
    // MainPage,
    // ExperienceEducation,
    // MySkills,
    // ContactMe,
  },

  data() {
    return {

    };
  },
  methods: {
    
  },
};
</script>

<style>

</style>

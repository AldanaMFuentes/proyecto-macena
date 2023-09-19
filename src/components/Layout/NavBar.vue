<template>
    <v-app-bar
      app
      absolute
      color="#1E355F"
      dark
      shrink-on-scroll
      src="@/assets/nav-bar-photo.jpg"
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
</template>

<script>
export default {
  name: "NavBar",
};
</script>
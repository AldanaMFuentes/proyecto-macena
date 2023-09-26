<template>
  <v-app-bar
    app
    absolute
    color="#1E355F"
    dark
    shrink-on-scroll
    src="@/assets/nav-bar-photo.jpg"
    fade-img-on-scroll
    scroll-target="#home"
  >
    <div class="d-flex align-center v-item-group theme--dark">
      <router-link to="/home" @click="setActiveBar('HomeBar')">
        <button
          icon
          class="v-btn v-btn--text theme--dark v-size--default"
        >
          <v-icon size="24px" class="pa-2">mdi-home</v-icon>
        </button>
      </router-link>
      <router-link to="/presentation" @click="setActiveBar('NavBar')">
        <button
          type="button"
          class="v-btn v-btn--text theme--dark v-size--default"
        >
          <span class="v-btn__content"> Presentación </span>
        </button>
      </router-link>
      <router-link to="/experience-education" @click="setActiveBar('NavBar')">
        <button
          type="button"
          class="v-btn v-btn--text theme--dark v-size--default"
        >
          <span class="v-btn__content">Experiencia y educación</span>
        </button>
      </router-link>
      <router-link to="/skills" @click="setActiveBar('NavBar')">
        <button
          type="button"
          class="v-btn v-btn--text theme--dark v-size--default"
        >
          <span class="v-btn__content">Aptitudes</span>
        </button>
      </router-link>
      <router-link to="/contact-me" @click="setActiveBar('NavBar')">
        <button
          type="button"
          class="v-btn v-btn--text theme--dark v-size--default"
        >
          <span class="v-btn__content">Contacto</span>
        </button>
      </router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
   methods: {
    setActiveBar(barName) {
      this.$store.commit('setActiveBar', barName);
    }
  }
};
</script>

<style scoped>

html {
  overflow: hidden;
}
.scrollable {
  overflow-y: scroll;
}
</style>

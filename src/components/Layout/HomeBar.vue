<template>
  <v-app-bar
    app
    absolute
    scroll-target="#home"
    elevate-on-scroll
    dark
    color=#1E355F
  >
    <div class="d-flex align-center v-item-group theme--dark">
      <v-menu bottom right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="item in items" :key="item.name">
            <v-list-item-title>
              <router-link :to="item.link">
                <button
                  type="button"
                  class="v-btn v-btn--text theme--light"
                  color="#00000075"
                >
                  {{ item.name }}
                </button>
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "HomeBar",

  data() {
    return {
      items: [
        {
          name: "Presentación",
          link: "/presentation",
        },
        {
          name: "Experiencia y educación",
          link: "/experience-education",
        },
        {
          name: "Aptitudes",
          link: "/skills",
        },
        {
          name: "Contacto",
          link: "/contact-me",
        },
      ],
    };
  },
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

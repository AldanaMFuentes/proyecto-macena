<template>
  <div>
    <v-img src="@/assets/home-photo.jpg" alt="Home-Photo" height="700" absolute>
      <div class="home-title">
        <strong>PATRICK HARRINGTON</strong>
        <router-link to="/presentation">
          <v-btn outlined color="#1E355F">Conocé más sobre mi</v-btn>
        </router-link>
      </div>
    </v-img>
    <v-container>
      <v-row>
        <v-col cols="4">
          <p class="home-subtitle"><strong>RECORRE MI PÁGINA</strong></p>
        </v-col>
        <v-col cols="8" class="pa-5">
          <v-container>
            <v-row>
              <v-col cols="3">
                <v-row class="d-flex align-center my-5 mx-auto">
                  <v-card outlined flat class="home-cards">
                    <v-card-subtitle
                      >Más de 30 años de trayectoria en el
                      rubro</v-card-subtitle
                    >
                  </v-card>
                </v-row>
                <v-row class="d-flex align-flex-start my-5 mx-auto">
                  <router-link to="/experience-education">
                    <v-card outlined flat class="home-cards">
                      <div style="margin-top: 60px"></div>
                      <button
                        type="button"
                        class="v-btn v-btn--text theme--light px-6 pt-5 pb-2"
                        color="#00000075"
                        style="
                          word-wrap: break-word;
                          white-space: normal;
                          max-width: 135px;
                        "
                      >
                        EXPERIENCIA Y EDUACIÓN
                      </button>
                      <v-icon
                        size="40px"
                        class="px-3 pb-2"
                        style="color: rgba(0, 0, 0, 0.75)"
                        >mdi-arrow-right-circle-outline</v-icon
                      >
                    </v-card>
                  </router-link>
                </v-row>
              </v-col>
              <v-col cols="3">
                <v-row class="d-flex align-flex-start my-5 mx-auto">
                  <router-link to="/skills">
                    <v-card outlined flat class="home-cards">
                      <v-icon
                        size="40px"
                        class="px-3 pt-2"
                        style="color: rgba(0, 0, 0, 0.75)"
                        >mdi-arrow-right-circle-outline</v-icon
                      >
                      <button
                        type="button"
                        class="v-btn v-btn--text theme--light px-5 py-2"
                        color="#00000075"
                        style="
                          word-wrap: break-word;
                          white-space: normal;
                          max-width: 135px;
                        "
                      >
                        APTITUDES
                      </button>
                      <div style="margin-bottom: 100px"></div>
                    </v-card>
                  </router-link>
                </v-row>
                <v-row class="d-flex align-center my-5 mx-auto">
                  <v-card outlined flat class="home-cards">
                    <v-card-subtitle
                      >Conocé lo que puedo hacer con tu marca</v-card-subtitle
                    >
                  </v-card>
                </v-row>
              </v-col>
              <v-col cols="3">
                <v-row class="d-flex align-center my-5 mx-auto">
                  <v-card outlined flat class="home-cards">
                    <v-card-subtitle>Agendá tu consulta</v-card-subtitle>
                  </v-card>
                </v-row>
                <v-row class="d-flex align-flex-start my-5 mx-auto">
                  <router-link to="/contact-me">
                    <v-card outlined flat class="home-cards">
                      <div style="margin-top: 130px"></div>
                      <button
                        type="button"
                        class="v-btn v-btn--text theme--light px-3 pt-5 pb-2"
                        color="#00000075"
                        style="
                          word-wrap: break-word;
                          white-space: normal;
                          max-width: 135px;
                        "
                      >
                        CONTACTO
                      </button>
                      <v-icon
                        size="40px"
                        class="px-3 pb-2"
                        style="color: rgba(0, 0, 0, 0.75)"
                        >mdi-arrow-right-circle-outline</v-icon
                      >
                    </v-card>
                  </router-link>
                </v-row>
              </v-col>
              <v-col cols="3">
                <v-row class="d-flex align-flex-start my-5 mx-auto">
                  <v-card outlined flat class="home-cards">
                    <v-img src="@/assets/ofi-photo.jpg" alt="HomeCard-Photo" max-height="208px"></v-img>
                  </v-card>
                </v-row>
                <v-row class="d-flex align-center my-5 mx-auto">
                  <v-card outlined flat class="home-cards">
                    <v-card-subtitle
                      >Sumá tu negocio a la revolución digital</v-card-subtitle
                    >
                  </v-card>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
html {
  overflow: hidden;
}
.scrollable {
  overflow-y: scroll;
}
.home-title {
  padding: 150px;
  color: rgba(0, 0, 0, 0.75);
  max-width: 200px;
  font-size: 70px;
}
.home-subtitle {
  color: rgba(0, 0, 0, 0.75);
  max-width: 200px;
  font-size: 70px;
  padding-top: 25px;
}
.home-cards {
  border: 1px solid #ccc;
  border-radius: 1rem;
}
</style>

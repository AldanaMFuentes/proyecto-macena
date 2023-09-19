<template>
  <div style="margin: 20px">
    <v-card class="mx-auto" max-width="850" outlined>
      <v-progress-linear
        indeterminate
        color="#1E355F"
        v-if="isLoading"
      ></v-progress-linear>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-h3 mb-4"><strong>PATRICK HARRINGTON</strong></div>
          {{ presentacion }}
        </v-list-item-content>

        <v-img src="../../assets/patrick.jpg" alt="Patrick-Photo"></v-img>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainPage",
  data() {
    return {
      presentacion: "",
      isLoading: false,
    };
  },
  methods: {
    async getPresentacion() {
      this.isLoading = true;
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/presentacion.json`
      );
      this.presentacion = response.data;
      this.isLoading = false;
    },
  },
  created() {
    this.getPresentacion();
  },
};
</script>

<style scoped>
.v-list-item__content {
  flex: none;
  width: 350px;
  text-align: justify;
}
.v-list-item {
  align-items: inherit;
}
.v-list-item.v-list-item--three-line.theme--light {
  padding-right: 0px;
}
</style>

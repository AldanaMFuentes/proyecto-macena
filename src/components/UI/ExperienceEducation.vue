<template>
  <div style="margin: 20px">
    <ul>
      <InfoCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :activities="card.activities"
      />
    </ul>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
import axios from "axios";

export default {
  name: "ExperienceEducation",
  components: {
    InfoCard,
  },
  data() {
    return {
      cards: [
        {
          title: "Experiencia Profesional",
          activities: [],
        },
        {
          title: "Formación Académica",
          activities: [],
        },
      ],
    };
  },
  methods: {
    async getExperiencia() {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/experiencia.json`
      );
      this.cards[0].activities = response.data;
    },
    async getEducacion() {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/educacion.json`
      );
      this.cards[1].activities = response.data;
    },
  },
  created() {
    this.getExperiencia();
    this.getEducacion();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

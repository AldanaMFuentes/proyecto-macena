<template>
  <div style="margin: 20px">
    <ul>
      <InfoCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :activities="card.activities"
        :isLoading="card.isLoading"
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
          isLoading: false,
        },
        {
          title: "Formación Académica",
          activities: [],
          isLoading: false,
        },
      ],
    };
  },
  methods: {
    async getExperiencia() {
      this.cards[0].isLoading = true;
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/experiencia.json`
      );
      this.cards[0].activities = (response.data ?? []).sort((a, b) => b.id - a.id);
      this.cards[0].isLoading = false;
    },
    async getEducacion() {
      this.cards[1].isLoading = true;
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/educacion.json`
      );
      this.cards[1].activities = (response.data ?? []).sort((a, b) => b.id - a.id);
      this.cards[1].isLoading = false;
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

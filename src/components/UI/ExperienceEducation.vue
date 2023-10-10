<template>
  <v-container>
    <ul>
      <InfoCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :activities="card.activities"
        :isLoading="card.isLoading"
      />
    </ul>
  </v-container>
</template>

<script>
import InfoCard from "./InfoCard.vue";
import { mapActions } from "vuex";

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
          stateName: "experience",
          activities: [],
          isLoading: false,
        },
        {
          title: "Formación Académica",
          stateName: "education",
          activities: [],
          isLoading: false,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["getExperience", "getEducation"]),
    async setData() {
      try {
        await Promise.all(
          this.cards.map(async (card) => {
            if (card.stateName === "experience") {
              card.isLoading = true;
              card.activities = await this.getExperience();
            } else if (card.stateName === "education") {
              card.isLoading = true;
              card.activities = await this.getEducation();
            }
            card.isLoading = false;
          })
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.setData();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

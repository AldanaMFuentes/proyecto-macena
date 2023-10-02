<template>
  <v-container>
    <ul>
      <InfoCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :activities="card.activities"
        :isLoading="isLoading(card.stateName)"
      />
    </ul>
  </v-container>
</template>

<script>
import InfoCard from "./InfoCard.vue";
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["isLoading", "experienceData", "educationData"]),
  },
  methods: {
    ...mapActions(["getExperience", "getEducation"]),
    setData() {
      this.cards.forEach((card) => {
        if (card.stateName === "experience") {
          card.activities = this.$store.state.experienceData;
        } else if (card.stateName === "education") {
          card.activities = this.$store.state.educationData;
        }
      });
    },
  },
  watch: {
    experienceData: "setData",
    educationData: "setData"
  },
  beforeMount() {
    this.getExperience();
    this.getEducation();
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

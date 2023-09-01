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
          activities: [
            {
              id: 4,
              place: "Universidad Metropolitana",
              period: "Septiembre 1994 - Junio 1998",
              description:
                "Mi Licenciatura en Comunicación Digital en la Universidad Metropolitana me proporcionó una comprensión integral de los fundamentos de la comunicación en línea y la creación de contenidos digitales. A través de cursos especializados, aprendí a diseñar experiencias de usuario atractivas, crear contenido persuasivo y aprovechar las plataformas digitales para alcanzar audiencias de manera efectiva.",
            },
            {
              id: 5,
              place: "Universidad de Vanguardia en MArketing y Tecnología",
              period: "Agosto 1998 - Mayo 2000",
              description:
                "Durante mi Máster en Marketing Digital en la Universidad de Vanguardia, adquirí un profundo conocimiento de las estrategias digitales y las últimas tendencias en tecnología. Participé en proyectos prácticos que me permitieron aplicar conceptos teóricos a situaciones del mundo real. Esto me brindó una base sólida para liderar estrategias digitales innovadoras en mi carrera profesional.",
            },
            {
              id: 6,
              place: " Instituto de Marketing Digital",
              period: "Febrero 2001 - Marzo 2001",
              description:
                "Complementando mi formación, obtuve una certificación en Analítica Web Avanzada que me permitió profundizar en la comprensión de las métricas digitales y el análisis de datos. Aprendí a traducir datos en información accionable para optimizar estrategias digitales y tomar decisiones informadas.",
            },
            {
              id: 7,
              place: "Academia Digital Connect",
              period: "Julio 2001 - Agosto 2001",
              description:
                "Amplié mis conocimientos en estrategias de redes sociales a través de este curso especializado. Aprendí a desarrollar campañas efectivas en plataformas sociales, aumentar el engagement y medir el impacto de las estrategias en línea.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    //los url estan al reves: experiencia en estudios
    async getExperiencia() {
      const response = await axios.get(
        `https://pil-2023-land-default-rtdb.firebaseio.com/personajes/Harrington/estudios.json`
      );
      this.cards[0].activities = response.data;
    },
  },
  created() {
    this.getExperiencia();
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

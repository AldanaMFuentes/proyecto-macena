<template>
  <li>
    <v-card class="mx-auto scrollable-card" max-width="850">
      <v-progress-linear
        indeterminate
        color="#1E355F"
        v-if="isLoading"
      ></v-progress-linear>
      <v-card-actions>
        <v-btn color="#1E355F" text @click="show = !show"> {{ title }} </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div class="card-content" v-show="show">
          <v-divider></v-divider>
          <ul>
            <li v-for="act in activities" :key="act.id">
              <v-card-title
                ><strong>{{ act.place }}</strong></v-card-title
              >
              <v-card-text
                ><strong>{{ act.period }} | </strong>
                {{ act.description }}</v-card-text
              >
              <v-divider></v-divider>
            </li>
          </ul>
        </div>
      </v-expand-transition>
    </v-card>
  </li>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    activities: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.every(
          (item) => typeof item === "object" && !Array.isArray(item)
        );
      },
    },
    isLoading: {
      type: Boolean,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    defaultShow() {
      if (this.title === "Experiencia Profesional") {
        this.show = true;
      }
      return this.show;
    },
  },
  created() {
    this.defaultShow();
  },
};
</script>

<style scoped>
.mx-auto {
  margin: 10px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 0px 20px;
}
.scrollable-card {
  max-height: 400px;
  overflow-y: hidden;
}
.card-content {
  overflow-y: auto;
  max-height: calc(400px - 3rem);
  text-align: justify;
}
</style>

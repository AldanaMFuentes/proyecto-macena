<template>
  <v-container>
    <v-card class="mx-auto" max-width="850" outlined style="margin: 20px">
      <v-progress-linear
        indeterminate
        color="#1E355F"
        v-if="isLoading('presentation')"
      ></v-progress-linear>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-h3 mb-4"><strong>PATRICK HARRINGTON</strong></div>
          {{ presentationData }}
        </v-list-item-content>

        <v-img src="@/assets/patrick.jpg" alt="Patrick-Photo"></v-img>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MyPresentation",
  computed: {
    ...mapGetters(["isLoading", "presentationData"])
  },
  methods: {
    ...mapActions(["getPresentation"]),
  },
  created() {
    this.getPresentation();
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

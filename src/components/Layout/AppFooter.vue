<template>
  <v-footer dark padless class="custom-footer">
    <v-card flat tile class="white--text text-center" color="#1E355F">
      <v-card-text>
        <v-btn
          v-for="socialNetwork in socialNetworks"
          :key="socialNetwork.name"
          class="mx-4 white--text"
          icon
        >
          <a :href="socialNetwork.link" target="_blank">
            <v-icon size="24px" class="mx-4 white--text">
              {{ socialNetwork.icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",

  data() {
    return {
      socialNetworks: [
        {
          name: "Facebook",
          link: "https://es-la.facebook.com/",
          icon: "mdi-facebook",
        },
        {
          name: "Twitter",
          link: "https://twitter.com/?lang=es",
          icon: "mdi-twitter",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/home",
          icon: "mdi-linkedin",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/",
          icon: "mdi-instagram",
        },
      ],
    };
  },
};
</script>

<style>
.white--text {
  width: 100%;
}
.custom-footer {
  width: 100%;
}
</style>

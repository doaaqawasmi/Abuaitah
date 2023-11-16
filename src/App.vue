<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import Footer from "@/components/FooterEnd.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
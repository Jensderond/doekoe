<template>
  <v-tabs v-model="tabs" fixed-tabs color="transparent">
    <v-tabs-slider></v-tabs-slider>
    <v-tab href="#mobile-tabs-5-1" class="primary--text">
      <v-icon>home</v-icon>
    </v-tab>

    <v-tab href="#mobile-tabs-5-2" class="primary--text">
      <v-icon>list</v-icon>
    </v-tab>

    <v-tab href="#mobile-tabs-5-3" class="primary--text">
      <v-icon>add_circle_outline</v-icon>
    </v-tab>

    <v-tab href="#mobile-tabs-5-4" class="primary--text">
      <v-icon>help_outline</v-icon>
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      mini: true,
      right: null
    };
  }
};
</script>

<style scoped>
</style>

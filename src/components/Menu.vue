<template>
  <v-card height="200px">
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
    >
      <v-btn dark>
        <span>Video</span>
        <v-icon>ondemand_video</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Music</span>
        <v-icon>music_note</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Book</span>
        <v-icon>book</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Image</span>
        <v-icon>image</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>

</style>

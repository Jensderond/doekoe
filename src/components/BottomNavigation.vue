<template>
  <v-card flat>
    <v-bottom-nav :active.sync="bottomNav" :value="true" color="white" fixed>
        <router-link
                to="/"
                >
            <v-btn color="teal" flat value="overview">
                <span>Overview</span>
                <v-icon>home</v-icon>
            </v-btn>
        </router-link>

        <router-link
                to="/list"
                >
            <v-btn color="teal" flat value="list">
                <span>List</span>
                <v-icon>list</v-icon>
            </v-btn>
        </router-link>

        <router-link
                to="/about-us"
                >
            <v-btn color="teal" flat value="about">
                <span>About</span>
                <v-icon>info</v-icon>
            </v-btn>
        </router-link>
    </v-bottom-nav>
  </v-card>
</template>
<script>
// import { mapActions, mapState } from 'vuex';

export default {
  name: 'BottomNavigation',
  data() {
    return {
      bottomNav: 'recent',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
<style>
</style>

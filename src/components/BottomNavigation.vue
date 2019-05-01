<template>
  <v-card flat v-if="account.user.email">
    <v-bottom-nav :active.sync="bottomNav" :value="true" color="white" fixed>
        <v-btn color="teal" flat value="overview" to="/">
            <span>Overview</span>
            <v-icon>home</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="list" to="/list">
            <span>List</span>
            <v-icon>list</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="about" to="/about-us">
            <span>About</span>
            <v-icon>info</v-icon>
        </v-btn>
    </v-bottom-nav>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'BottomNavigation',
  data() {
    return {
      bottomNav: 'recent',
    };
  },
  computed: {
    ...mapState({
      account: state => state.account,
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
<style>
</style>

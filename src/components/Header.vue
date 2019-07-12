<template>
  <!-- TODO: Remove all uikit references  -->
  <v-container id="header-container" mb-2 mt-2 pb-0 pl-0 pr-0 pt-0>
    <TopControls v-if="user !== null && user.fullname !== undefined" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";

const TopControls = () => import("@/components/TopControls");

export default {
  name: "Header",
  components: {
    TopControls
  },
  computed: {
    ...mapState({
      user: state => state.account.user
      // doekoes: state => state.doekoes.all,
    })
  }
};
</script>

<style scoped>
@media (max-width: 800px) {
  #main-navigation {
    display: none;
  }
}
.uk-navbar-container {
  display: flex;
}
</style>

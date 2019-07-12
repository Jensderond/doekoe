<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list dense>
        <v-toolbar flat class="dk__toolbar-header">
          <v-list>
            <v-list-tile @click="prevent" to="/" class="icon-header">
              <v-list-tile-action>
                <Icon />
              </v-list-tile-action>
              <v-list-tile-content>
                <v-toolbar-title>{{ name }}</v-toolbar-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-divider></v-divider>

        <v-list-tile @click="prevent" to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Overview</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="prevent" to="/list">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>List</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="prevent" to="/new">
          <v-list-tile-action>
            <v-icon>add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>New doekoe</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="prevent" to="/about-us">
          <v-list-tile-action>
            <v-icon>add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-list-tile @click="prevent" to="/" class="icon-header">
        <v-list-tile-action>
          <Icon />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-toolbar-title>{{ name }}</v-toolbar-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-toolbar>
  </div>
</template>

<script>
const Icon = () => import("@/components/Navigation/Icon");
export default {
  components: {
    Icon
  },
  data: () => ({
    drawer: null
  }),
  props: {
    source: String,
    name: String
  }
};
</script>
<style lang="scss">
.theme--dark,
.theme--light {
  .dk__toolbar-header {
    height: 58px;

    // Hide logo when menu is open on desktop
    @media (min-width: 1264px) {
      display: none;
    }
  }
  .v-toolbar {
    background-color: #005055 !important;
    color: #fff !important;
  }
  // .v-icon {
  //   color: #fff !important;
  // }
  // .v-list__tile--active .v-list__tile__action:first-of-type .v-icon {
  //   color: #ffd149 !important;
  // }
}
.theme--dark.v-navigation-drawer,
.theme--light.v-navigation-drawer {
  background-color: #005055 !important;
  z-index: 999;

  .v-list {
    color: #fff !important;
  }
}
.icon-header {
  .v-list__tile--active {
    color: #fff !important;
    caret-color: #fff !important;
  }
}
// .v-list__tile--active {
//   color: #ffd149 !important;
//   caret-color: #ffd149 !important;
// }
.cls-1 {
  opacity: 0.5;
  /* isolation: isolate; */
  fill: #eae7de; /* fill: url(#linear-gradient); */
}
.cls-2 {
  fill: #f2683f;
}
.cls-3 {
  fill: #eae7de; /* fill: url(#linear-gradient-2); */
}
.icon {
  margin: 6px;
  filter: contrast(1);
}
</style>

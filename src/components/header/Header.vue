<template>
  <div
    id="header-container"
  >
    <div
      id="main-navigation"
      uk-sticky="sel-target: .uk-navbar-container;
        cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"
      v-if="user !== null && user.fullname !== undefined"
    >
      <nav
        class="uk-navbar-container"
        uk-navbar
        style="position: relative; z-index: 980;">
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li>
              <router-link
                to="/"
              >
                <span
                  class="uk-margin-small-right icon rtw-grid"
                />
                Overview
              </router-link>
            </li>
            <li>
              <router-link
                to="/list"
              >
                <span
                  class="uk-margin-small-right icon rtw-list"
                />
                List view
              </router-link>
            </li>
            <li>
              <router-link
                to="/new"
              >
                <span
                  class="uk-margin-small-right icon rtw-plus"
                />
                Add new
              </router-link>
            </li>
            <li>
              <router-link
                to="/about-us"
              >
                <span
                  class="uk-margin-small-right icon rtw-info"
                />
                About us
              </router-link>
            </li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li>
              <router-link
                to="/login"
              >
                <span
                  class="uk-margin-small-right icon rtw-log-out"
                />
                Sign out
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div
      id="dheader"
      class="uk-light"
      uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
    >
      <MenuToggle v-if="user !== null && user.fullname !== undefined"/>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';

const MenuToggle = () => import('@/components/menu/MenuToggle');

export default {
  name: 'Header',
  components: {
    MenuToggle,
  },
  computed: {
    ...mapState({
      user: state => state.account.user,
      // doekoes: state => state.doekoes.all,
    }),
  },
};
</script>

<style scoped>
nav {
  margin-bottom: 30px;
}

@media (max-width: 800px) {
  #main-navigation {
    display: none;
  }
}
.uk-navbar-container {
  display: flex;
}
</style>

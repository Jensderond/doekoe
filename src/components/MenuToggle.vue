<template>
  <div
    id="hamburger__toggle"
    uk-sticky="top: 0; animation: uk-animation-slide-top"
  >
    <a
      class="uk-button uk-button-default uk-position-medium uk-position-top-right uk-navbar-toggle"
      uk-toggle="target: #offcanvas-overlay"
    >
      <span uk-navbar-toggle-icon /> <span class="uk-margin-small-left">Menu</span>
    </a>

    <div
      id="offcanvas-overlay"
      uk-offcanvas="overlay: true; flip: true"
    >
      <div class="uk-offcanvas-bar">

        <button
          class="uk-offcanvas-close"
          type="button"
          uk-close
        />

        <ul class="uk-nav uk-nav-primary uk-margin-auto-vertical">
          <h3 class="uk-text-center">Doekoe(sh)</h3>
          <li class="uk-parent">
            <ul class="uk-nav-sub uk-margin-auto uk-width-3-5">
              <li class="uk-nav-header uk-text-center uk-margin-small-bottom">Menu</li>
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
              <li class="uk-position-medium uk-position-bottom">
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
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuToggle',
};
</script>

<style scoped>
#hamburger__toggle {
    display: block;
}

@media (min-width: 800px) {
  #hamburger__toggle {
    display: none;
  }
}
.uk-button-default {
    background-color: #e4e4e4;
    color: #273448;
}

.uk-navbar-toggle:hover {
    background-color: #fff;
    color: #273448;
}

.uk-sticky.uk-active {
  right: 0;
}

</style>

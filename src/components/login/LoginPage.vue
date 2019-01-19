<template>
  <div class="uk-light">
    <h2>Login</h2>
    <span class="uk-text-meta">Get your doekoes in je eigen handen.</span>
    <form
      @submit.prevent="handleSubmit"
      class="uk-margin uk-form-stacked">
      <div class="form-group uk-margin ">
        <label
          for="username"
          class="uk-form-label">Username</label>
        <div class="uk-form-controls">
          <div class="uk-inline uk-form-width-large">
            <span
              class="uk-form-icon"
              uk-icon="icon: user"/>
            <input
              type="text"
              v-model="username"
              name="username"
              class="uk-input"
              :class="{ 'uk-form-danger': submitted && !username }"
            >
          </div>
        </div>
        <div
          v-show="submitted && !username"
          class="invalid-feedback uk-margin"
        >
          Username is required
        </div>
      </div>
      <div class="form-group uk-margin ">
        <label
          for="password"
          class="uk-form-label">Password</label>
        <div class="uk-form-controls">
          <div class="uk-inline uk-form-width-large uk-dark">
            <span
              class="uk-form-icon"
              uk-icon="icon: lock"/>
            <input
              type="password"
              v-model="password"
              name="password"
              class="uk-input"
              :class="{ 'uk-form-danger': submitted && !password }"
            >
          </div>
        </div>
        <div
          v-show="submitted && !password"
          class="invalid-feedback uk-margin"
        >
          Password is required
        </div>
      </div>
      <div class="form-group uk-margin">
        <button
          class="uk-button uk-button-primary"
          :disabled="status.loggingIn"
        >
          Login
        </button>
        <img
          v-show="status.loggingIn"
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
    };
  },
  computed: {
    ...mapState('account', ['status']),
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    },
  },
};
</script>
<style>
.uk-form-danger,
.uk-form-danger:focus {
  color: #f0506e !important;
  border-color: #f0506e !important;
}
.invalid-feedback {
  color: #f0506e !important;
}
</style>

<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          v-model="user.firstName"
          v-validate="'required'"
          name="firstName"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('firstName') }"
        >
        <div
          v-if="submitted && errors.has('firstName')"
          class="invalid-feedback"
        >{{ errors.first('firstName') }}</div>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          v-model="user.lastName"
          v-validate="'required'"
          name="lastName"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('lastName') }"
        >
        <div
          v-if="submitted && errors.has('lastName')"
          class="invalid-feedback"
        >{{ errors.first('lastName') }}</div>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="user.username"
          v-validate="'required'"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('username') }"
        >
        <div
          v-if="submitted && errors.has('username')"
          class="invalid-feedback"
        >{{ errors.first('username') }}</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="user.password"
          v-validate="{ required: true, min: 6 }"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && errors.has('password') }"
        >
        <div
          v-if="submitted && errors.has('password')"
          class="invalid-feedback"
        >{{ errors.first('password') }}</div>
      </div>
      <div class="form-group">
        <button
          class="btn btn-primary"
          :disabled="status.registering"
        >Register</button>
        <img
          v-show="status.registering"
        >
        <router-link
          to="/login"
          class="btn btn-link"
        >Cancel
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState('account', ['status']),
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.register(this.user);
        }
      });
    },
  },
};
</script>

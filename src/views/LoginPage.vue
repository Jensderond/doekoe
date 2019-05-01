<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <h2>Login</h2>
        <span class="uk-text-meta">Get your doekoes in je eigen handen.</span>
      </v-flex>
      <v-flex xs12>
        <form>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          />
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :error-messages="passwordErrors"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            required
            @click:append="showPassword = !showPassword"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          />
          <v-btn
            color="success"
            @click="submit"
            :disabled="loggingIn === true"
          >
            Login
            <v-progress-circular
              v-if="loggingIn === true"
              indeterminate
              :size="25"
              :width="3"
              color="primary"
              class="ml-2"
            ></v-progress-circular>
          </v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required },
  },

  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
  computed: {
    ...mapState({
      // account: 'account',
      loggingIn: state => state.account.status.loggingIn,
      alertType: state => state.alert.type,
      alertText: state => state.alert.message,
    }),
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      if (!this.$v.email.email) errors.push('Must be valid e-mail');
      if (!this.$v.email.required) errors.push('E-mail is required');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      if (!this.$v.password.required) errors.push('Password is required.');
      return errors;
    },
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // eslint-disable-next-line
        const { email, password } = this;
        this.login({ email: email.toLowerCase(), password });
      }
    },
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      const oldValue = value.toString();
      return oldValue.charAt(0).toUpperCase() + oldValue.slice(1);
    },
  },
};
</script>
<style>
</style>

<template>
  <div
    id="doekoelist"
    class="uk-light"
  >
    <div
      v-if="isError"
    >
      <div
        class="uk-alert-danger"
        uk-alert
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt.
        </p>
      </div>
    </div>
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="step === 1"
        key="step1"
      >
        <label
          class="uk-text-lead"
          for="date"
        >Date:</label>
        <datepicker
          v-model="newDoekoe.date"
          placeholder="Date"
          calendar-class="uk-align-center uk-margin uk-dark"
          input-class="uk-align-center uk-input uk-margin uk-form-width-large"
          :inline="true"
        />
      </div>

      <div
        v-if="step === 2"
        key="step2"
      >
        <label
          class="uk-text-lead"
          for="type"
        >Type:</label>
        <div class="uk-form-width-small uk-align-center">
          <div class="uk-margin uk-grid-small uk-grid">
            <label>
              <input
                name="type"
                id="radio-inkomen"
                class="uk-radio"
                type="radio"
                v-model="newDoekoe.type"
                value="income"
              > Inkomen
            </label>
            <label>
              <input
                name="type"
                id="radio-uitgave"
                class="uk-radio"
                type="radio"
                v-model="newDoekoe.type"
                value="expense"
              > Uitgave
            </label>
          </div>
        </div>
      </div>

      <div
        class="uk-margin"
        v-if="step === 3"
        key="step3"
      >
        <label
          class="uk-text-lead uk-margin"
          for="amount"
          style="display:block;"
        >Amount:</label>
        <div class="uk-inline uk-form-width-large">
          <span class="uk-form-icon">€</span>
          <input
            class="uk-input"
            type="text"
            v-model="newDoekoe.amount"
            placeholder="eg. 00.00"
          >
        </div>
      </div>

      <div
        v-if="step === 4"
        key="step4"
      >
        <label
          class="uk-text-lead"
          for="company"
          style="display:block;"
        >Company:</label>
        <input
          class="uk-margin uk-input uk-form-width-large"
          type="text"
          v-model="newDoekoe.company"
          placeholder="eg. Apple Inc."
        >
      </div>

      <div
        class="uk-margin"
        v-if="step === 5"
        key="step5"
      >
        <label
          class="uk-text-lead uk-margin"
          for="vat"
          style="display:block;"
        >VAT:</label>
        <div class="uk-inline uk-form-width-large">
          <span class="uk-form-icon">%</span>
          <input
            class="uk-input"
            type="text"
            v-model.number="newDoekoe.vat"
            placeholder="eg. 21"
          >
        </div>
      </div>

      <div
        v-if="step === 6"
        key="step6"
      >
        <label
          class="uk-text-lead"
          for="category"
          style="display:block;"
        >Category:</label>
        <input
          class="uk-margin uk-input uk-form-width-large"
          type="text"
          v-model="newDoekoe.category"
          placeholder="eg. Hosting"
        >
      </div>
    </transition>

    <div>
      <button
        @click.prevent="prev()"
        v-if="step > 1"
        class="uk-button uk-button-link"
      >Previous</button>
      <button
        :class="{ 'uk-margin-small-left': step > 1 }"
        @click.prevent="next()"
        v-if="step < 6"
        class="uk-button uk-button-default"
      >Next</button>

      <button
        @click.prevent="isValidDoekoe(newDoekoe)"
        v-if="step === 6"
        class="uk-button uk-button-primary-green uk-margin-small-left"
      >Save</button>
    </div>
    <div class="uk-margin">
      <router-link
        @click.prevent="send()"
        to="/"
        class="uk-button uk-button-primary"
      >Back to overview</router-link>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { setTimeout } from 'timers';
import { mapActions } from 'vuex';

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      step: 1,
      newDoekoe: {
        date: '',
        type: '',
        amount: '',
        company: '',
        vat: 21,
        category: '',
      },
      isError: false,
    };
  },
  methods: {
    ...mapActions('doekoes', {
      addDoekoe: 'addOne',
    }),
    prev() {
      this.step -= 1;
    },
    next() {
      this.step += 1;
    },
    // addDoekoe(newDoekoe) {
    //   if (!this.isValidDoekoe(newDoekoe)) return;
    //   store.dispatch('addDoekoe', { ...newDoekoe }).then(() => {
    //     this.$router.push({ path: '/' });
    //   });
    // },
    isValidDoekoe(doekoe) {
      if (
        doekoe.amount !== '' &&
        doekoe.category !== '' &&
        doekoe.company !== '' &&
        doekoe.date !== '' &&
        doekoe.type !== '' &&
        doekoe.vat !== ''
      ) {
        const newDoekoe = { ...doekoe };
        newDoekoe.amount = parseFloat(doekoe.amount);
        this.isError = false;
        this.addDoekoe(newDoekoe);
        this.$router.push({ path: '/' });
      }

      this.isError = true;
      setTimeout(() => {
        this.isError = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.uk-button-primary {
  background-color: #191919;
  color: #fff;
  transition: all .5s ease;
}
.uk-button-primary:focus,
.uk-button-primary:hover {
  background-color: #000000;
  color: #fff
}
.uk-button-link {
    padding: 0;
    line-height: 1.5;
    background: 0 0;
    color: #fff;
}
.uk-button-secondary {
  background-color: #222;
  color: #fff;
  border: 1px solid transparent;
  transition: all .5s ease;
}
.uk-button-secondary:focus,
.uk-button-secondary:hover {
  background-color: #151515;
  color: #fff
}
.uk-button-primary-green {
  background-color: #28946b;
  color: #fff;
  border: 1px solid transparent;
  transition: all .5s ease;
}
.uk-button-primary-green:focus,
.uk-button-primary-green:hover {
  background-color: #1d6d49;
}
</style>

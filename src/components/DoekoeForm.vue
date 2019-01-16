<template>
  <div id="doekoelist">
    <!-- <transition name="fade" mode="out-in"> -->
    <transition  name="fade" mode="out-in">
      <div v-if="step === 1" key="step1">
        <label
          class="uk-text-lead"
          for="date">Date:</label>
          <datepicker v-model="newDoekoe.date"
            placeholder="Date"
            calendar-class="uk-align-center uk-margin"
            input-class="uk-align-center uk-input uk-margin uk-form-width-large"></datepicker>
      </div>

      <div v-if="step === 2" key="step2">
        <label
          class="uk-text-lead"
          for="type">Type:</label>
        <div class="uk-form-width-small uk-align-center">
          <div class="uk-margin uk-grid-small uk-grid">
            <label><input name="type" id="radio-inkomen" class="uk-radio" type="radio"
              v-model="newDoekoe.type" value="Inkomen"> Inkomen</label>
            <label><input name="type" id="radio-uitgave" class="uk-radio" type="radio"
              v-model="newDoekoe.type" value="Uitgave"> Uitgave</label>
          </div>
        </div>
      </div>

      <div class="uk-margin" v-if="step === 3" key="step3">
        <label class="uk-text-lead uk-margin" for="amount" style="display:block;">Amount:</label>
        <div class="uk-inline uk-form-width-large">
          <span class="uk-form-icon">€</span>
          <input class="uk-input" type="text" v-model.number="newDoekoe.amount"
            placeholder="eg. 00.00"/>
        </div>
      </div>

      <div v-if="step === 4" key="step4">
        <label class="uk-text-lead" for="company" style="display:block;">Company:</label>
        <input class="uk-margin uk-input uk-form-width-large"
          type="text" v-model="newDoekoe.company"
          placeholder="eg. Apple Inc."/>
      </div>

      <div class="uk-margin" v-if="step === 5" key="step5">
        <label class="uk-text-lead uk-margin" for="vat" style="display:block;">VAT:</label>
        <div class="uk-inline uk-form-width-large">
          <span class="uk-form-icon">%</span>
          <input class="uk-input" type="text" v-model.number="newDoekoe.vat"
            placeholder="eg. 21"/>
        </div>
      </div>

      <div v-if="step === 6" key="step6">
        <label class="uk-text-lead" for="category" style="display:block;">Category:</label>
        <input class="uk-margin uk-input uk-form-width-large"
          type="text" v-model="newDoekoe.category"
            placeholder="eg. Hosting"/>
      </div>
    </transition>

    <div>
      <button @click.prevent="prev()" v-if="step > 1"
        class="uk-button uk-button-default">Previous</button>
      <button @click.prevent="next()" v-if="step < 6"
        class="uk-button uk-button-secondary">Next</button>

      <button @click.prevent="addDoekoe(newDoekoe)" v-if="step === 6"
        class="uk-button uk-button-primary">Save</button>
    </div>
    <div class="uk-margin">
      <router-link to="/"
        class="uk-button uk-button-primary" @click.prevent="send()">Back to overview</router-link>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
import db from '../Database';

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
        vat: '21',
        category: '',
      },
    };
  },
  methods: {
    prev() {
      this.step -= 1;
    },
    next() {
      this.step += 1;
    },
    addDoekoe(newDoekoe) {
      db.collection('doekoes').add({
        date: newDoekoe.date,
        type: newDoekoe.type,
        amount: newDoekoe.amount,
        company: newDoekoe.company,
        vat: newDoekoe.vat,
        category: newDoekoe.category,
        quarter: moment(newDoekoe.date).quarter(),
      });
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
.uk-button-default {
  background-color: #fff;
}
</style>

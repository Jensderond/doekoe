<template>
  <v-card
    v-if="doekoe !== undefined"
    :class="{
      'secondary' : doekoe.type === 'income',
      'primary': doekoe.type === 'expense',
    }"
    dark
    ripple
    class="doekoe__item mb-3"
    @click.native="toggleDetail"
  >
    <v-layout wrap>
      <v-card-title primary-title>
        <v-flex d-inline-flex>
          <v-flex class="headline">€ {{ doekoe.amount | currency }}</v-flex>

          <v-flex text-xs-right class="subheading">
            <p class="mb-0">{{ doekoe.company }}</p>

            <p class="mb-0">{{ doekoe.date | moment }}</p>
          </v-flex>
        </v-flex>
      </v-card-title>

      <transition
        name="accordion"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
      >
        <v-flex class="detail__view" text-xs-center mb-3 v-show="toggle">
          <div>{{ doekoe.category }}</div>
        </v-flex>
      </transition>
    </v-layout>
  </v-card>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "DoekoeItem",
  props: ["doekoeData"],
  data() {
    return {
      doekoe: this.doekoeData,
      toggle: false
    };
  },
  methods: {
    toggleDetail() {
      this.toggle = !this.toggle;
    },
    beforeEnter(el) {
      // eslint-disable-next-line
      el.style.height = "0";
    },
    enter(el) {
      // eslint-disable-next-line
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave(el) {
      // eslint-disable-next-line
      el.style.height = el.scrollHeight + "px";
    },
    leave(el) {
      // eslint-disable-next-line
      el.style.height = "0";
    }
  },
  filters: {
    moment: date => dayjs(date).format("DD-MM-YYYY"),
    currency: value => (value / 1).toFixed(2).replace(".", ",")
  }
};
</script>

<style>
.detail__view {
  transition: 150ms ease-out;
}
.headline {
  min-width: 25%;
}
span.caption {
  float: left;
}
</style>

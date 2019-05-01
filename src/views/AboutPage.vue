<template>
  <div>
    <h1>About us</h1>

    <h3>What is Doekoe.sh?</h3>
    <p>
      Doekoe.sh was created for myself because I was done with keeping track of my
      expenses and incomes in a spreadsheet. Because I started my own business
      I need to keep track of all transactions for tax purposes.
      This tool makes it easier to see how many money(doekoes) has come in every quarter.
      You could eventually use this to file your tax returns.
      Or just for fun to see how your business is doing!
    </p>

    <h3>How does Doekoe.sh work?</h3>
    <p>
      Simple! Just follow the steps to add a new income or expense.
    </p>

    <h3>Who created Doekoe.sh?</h3>
    <p>
      Doekoe.sh was created as a side project by Jens de Rond.
      Jens is currently a student at Avans University studying Computer Science.
      If you have any questions, comments, or suggestions,
      please feel free to reach out at
      <a href="mailto:jens@roundtheweb.nl">jens@roundtheweb.nl</a>.
    </p>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <small>Made without
          <img
            class="uk-svg"
            :src="require('../assets/dollar.svg')"
            height="20"
            width="20"
          >
          in The Netherlands</small>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

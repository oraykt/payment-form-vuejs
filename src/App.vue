<template>
  <div id="app">
    <PaymentForm/>
  </div>
</template>

<script>
import PaymentForm from './components/PaymentForm'

export default {
  name: 'App',
  components: {
    PaymentForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 40px 0;
}
</style>

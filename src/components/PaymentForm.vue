<template>
  <form action="">
    <h1>Payment Form</h1>
    <contact-information>

    </contact-information>
    <payment-information>

    </payment-information>
  </form>
</template>

<script>

import ContactInformation from './ContactInformation'
import PaymentInformation from './PaymentInformation'

export default {
  components: {
    ContactInformation,
    PaymentInformation
  }
}
</script>

<style>

</style>

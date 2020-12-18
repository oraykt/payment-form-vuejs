<template>
  <form action="">
    <div class="payment-form-header">
      <h1>Payment Form</h1>
    </div>
    <b-container fluid>
      <b-row>
        <b-col col="12" md="6">
          <contact-information></contact-information>
        </b-col>
        <b-col col="12" md="6">
          <payment-information></payment-information>
        </b-col>
      </b-row>
    </b-container>
    <div class="payment-form-footer">
      <b-button variant="primary">
        Validate Payment
      </b-button>
    </div>
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
  .payment-form-header,
  .payment-form-footer{
    padding: 0 30px;
  }
</style>

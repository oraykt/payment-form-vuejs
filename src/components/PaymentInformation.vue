<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col>
          <h2>Payment Information</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
          label="Card Type"
          label-for="card-type">
            <b-form-select
            id="card-type"
            name="card-type"
            v-model="cardType"
            :options="cardOptions"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
          label="Card Number"
          label-for="card-number">
            <b-form-input
            id="card-number"
            name="card-number"
            v-model.trim="cardNo"
            :options="cardOptions"
            placeholder="Enter your card number"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
          label="Expiry Date"
          label-for="expiry-date">
            <b-form-input
            id="expiry-date"
            name="expiry-date"
            v-model.trim="expiryDate"
            placeholder="MM/YY"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      cardType: 'Visa',
      cardOptions: ['Visa', 'Mastercard'],
      cardNo: '',
      expiryDate: ''
    }
  }
}
</script>

<style>

</style>

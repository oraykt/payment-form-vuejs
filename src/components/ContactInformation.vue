<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col>
          <h2>Contact Information</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Title">
            <b-form-radio-group
              id="title"
              v-model="title"
              :options="titleOptions"
              name="title">
              </b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Name"
            label-for="name"
          >
            <b-form-input id="name" v-model.trim="name" placeholder="Enter your name"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Email"
            label-for="email"
          >
            <b-form-input id="email" v-model.trim="email" placeholder="Enter your email"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Password"
            label-for="password"
          >
            <b-form-input id="password" type="password" v-model.trim="password" placeholder="Enter your password"></b-form-input>
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
      title: 'Miss',
      titleOptions: ['Miss', 'Mister']
    }
  }
}
</script>

<style>

</style>

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
              name="title"
              v-model="title"
              :options="titleOptions"
              >
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
            <b-form-input
              id="name"
              name="name"
              v-model.trim="name"
             placeholder="Enter your name"
             ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Email"
            label-for="email"
          >
            <b-form-input
              id="email"
              name="email"
              v-model.trim="email"
              placeholder="Enter your email"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Password"
            label-for="password"
          >
            <b-form-input
            id="password"
            name="password"
            @input="passwordChangeHandler"
            type="password"
            v-model.trim="password"
            placeholder="Enter your password"
            ></b-form-input>
          </b-form-group>
          <div v-if="error" class="error">
            {{error}}
            </div>
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
      titleOptions: ['Miss', 'Mister'],
      name: '',
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    passwordChangeHandler (pass) {
      if (pass.length < 8) this.error = 'Password should have at least 8 characters.'
      else this.error = false
    }
  }
}
</script>

<style>
  .error{
    color:red;
  }
</style>

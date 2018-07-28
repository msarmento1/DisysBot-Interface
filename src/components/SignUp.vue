<template>
  <Sign>
    <b-form>
      <b-form-group label="Name:" label-for="nameInput">
        <b-form-input id="nameInput" type="text" v-model="form.name" required placeholder="Enter name" />
      </b-form-group>

      <b-form-group label="Email address:" label-for="emailInput">
        <b-form-input id="emailInput" type="email" v-model="form.email" required placeholder="Enter email" />
      </b-form-group>

      <b-form-group label="Password:" label-for="passwordInput">
        <b-form-input id="passwordInput" type="password" v-model="form.password" required placeholder="Enter password" />
      </b-form-group>

      <b-form-group label="Confirm password:" label-for="passwordConfirmationInput">
        <b-form-input id="passwordConfirmationInput" type="password" v-model="form.passwordConfirmation" required placeholder="Repeat password"
        />
      </b-form-group>

      <b-form-group>
        <b-button type="submit" variant="outline-primary" class="w-100 mt-3">Submit</b-button>
      </b-form-group>
    </b-form>
  </Sign>
</template>

<script>
  import Sign from '@/components/Sign';

  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        },
      };
    },
    name: 'sign-in',
    components: {
      Sign,
    },
  };
</script>
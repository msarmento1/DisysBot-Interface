<template>
  <Sign>
    <b-form>
      <b-form-group label="Email address:" label-for="emailInput">
        <b-form-input id="emailInput" type="email" v-model="form.email" required placeholder="Enter email" />
      </b-form-group>

      <b-form-group label="Password:" label-for="passwordInput">
        <b-form-input id="passwordInput" type="password" v-model="form.password" required placeholder="Enter password" />
      </b-form-group>

      <b-form-checkbox-group class="mt-3">
        <b-form-checkbox v-model="form.keepSignedIn">Keep me signed in</b-form-checkbox>
      </b-form-checkbox-group>

      <b-form-group class="text-center">
        <b-button type="submit" variant="outline-primary" class="w-100 mt-3">Submit</b-button>
        <b-link>Forgot your password?</b-link>
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
          email: '',
          password: '',
          keepSignedIn: false,
        },
      };
    },
    name: 'sign-in',
    components: {
      Sign,
    },
  };
</script>
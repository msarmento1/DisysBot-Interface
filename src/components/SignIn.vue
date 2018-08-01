<template>
  <SignBase>
    <b-alert :show="form.keepSignedIn" variant="danger">
      Primary Alert with
    </b-alert>
    <b-form @submit="onSubmit">
      <b-form-group label="Email address:" label-for="emailInput">
        <b-form-input id="emailInput" type="email" v-model="form.email" required placeholder="Enter email" />
      </b-form-group>

      <b-form-group label="Password:" label-for="passwordInput">
        <b-form-input id="passwordInput" type="password" v-model="form.password" required placeholder="Enter password" />
      </b-form-group>

      <b-form-checkbox v-model="form.keepSignedIn">Keep me signed in</b-form-checkbox>

      <b-form-group class="text-center">
        <b-button type="submit" variant="outline-primary" class="w-100 mt-3">Submit</b-button>
        <b-link>Forgot your password?</b-link>
      </b-form-group>
    </b-form>
  </SignBase>
</template>

<script>
  import SignBase from '@/components/SignBase';
  import axios from 'axios';

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
    methods: {
      onSubmit(evt) {
        evt.preventDefault();

        axios
          .post('/user', this.form)
          .then((/* response */) => {
            this.$route.router.go('/sign-up');
          })
          .catch((/* error */) => {
            this.$route.router.go('/sign-up');
          });
      },
    },
    name: 'sign-in',
    components: {
      SignBase,
    },
  };
</script>
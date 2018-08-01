<template>
  <b-container style="width: 500px">
    <b-nav fill tabs>
      <b-nav-item to="sign-in">Sign In</b-nav-item>
      <b-nav-item to="sign-up">Sign Up</b-nav-item>
    </b-nav>

    <b-card>
      <h2 class="text-center">DisysBot</h2>

      <b-alert variant="success" :show="successMessage.length > 0">{{successMessage}}</b-alert>
      <b-alert variant="danger" :show="errorMessage.length > 0">{{errorMessage}}</b-alert>

      <b-card-body>
        <slot></slot>
      </b-card-body>
      <vue-simple-spinner message="Loading..."></vue-simple-spinner>
    </b-card>
  </b-container>
</template>

<script>
  import Spinner from 'vue-simple-spinner';

  export default {
    data() {
      return {
        errorMessage: '',
        successMessage: '',
      };
    },
    components: {
      Spinner,
    },
  };
</script>
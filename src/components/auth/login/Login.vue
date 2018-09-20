<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <form v-on:submit.prevent="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" v-model="input.email" required="required" />
          <label class="control-label" for="email">{{'auth.email' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" v-model="input.password" required="required" />
          <label class="control-label" for="password">{{'auth.password' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary">
          {{'auth.login' | translate}}
        </button>
        <router-link class='link' :to="{name: 'signup'}">{{'auth.createAccount' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'login',
    data() {
      return {
        show: true,
        input: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        axios
          .post('http://localhost/api/v1/auth/login', this.input, { withCredentials: true }) // TODO
          .then((res) => {
            this.$router.push('/admin/dashboard')
          })
          .catch((e) => {
            let message = '';

            if (!e.response) {
              message = 'API server is unreachable'
            } else {
              message = e.response.data
            }

            this.$emit('modalEvent', { title: 'Error', message });
          })
      }
    },
    beforeMount() {
      window.$cookies.remove('DISYSBOT_SID')
    }
  }
</script>

<style lang="scss">
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>

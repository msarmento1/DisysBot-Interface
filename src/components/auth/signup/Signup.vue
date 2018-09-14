<template>
  <div class="signup">
    <h2>{{'auth.createNewAccount' | translate}}</h2>
    <form v-on:submit.prevent="signUp">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="name" v-model="input.name" required="required" />
          <label class="control-label" for="name">{{'auth.fullName' | translate}}</label><i class="bar"></i>
        </div>
      </div>
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
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="confirm-password" v-model="input.confirmPassword" required="required" />
          <label class="control-label" for="confirm-password">{{'auth.confirmPassword' | translate}}</label><i class="bar"></i>
        </div>
      </div>
      <vuestic-checkbox :id="'checkbox1'" v-model="checkboxOneModel">
        <template slot="label">{{'auth.agree' | translate}}
          <router-link to="">{{'auth.termsOfUse' | translate}}</router-link>
        </template>
      </vuestic-checkbox>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          {{'auth.signUp' | translate}}
        </button>
        <router-link class='link' :to="{name: 'login'}">{{'auth.alreadyJoined' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'signup',
    data() {
      return {
        checkboxOneModel: true,
        input: {
          username: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      signUp() {
        axios
          .post('http://localhost/api/v1/auth/signup', this.input)
          .then((res) => {
            const userInfo = res.data;
            localStorage.setItem('userInfo', userInfo)
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
    }
  }
</script>

<style lang="scss">
  .signup {
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
      margin-top: 2.6875rem;
    }
  }
</style>
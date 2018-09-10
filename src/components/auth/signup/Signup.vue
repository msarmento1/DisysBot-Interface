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
          <input type="password" id="confirm-password" v-model="input.confirmPassord" required="required" />
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
    <vuestic-modal :show.sync="show" v-bind:small="true" v-bind:force="true" ref="modal" :cancelClass="'none'" :okText="'modal.close' | translate">
      <div slot="title">{{'modal.title' | translate}}</div>
      <div>
        {{'modal.message' | translate}}
      </div>
    </vuestic-modal>
  </div>
</template>

<script>
  export default {
    name: 'signup',
    data() {
      return {
        show: true,
        checkboxOneModel: true,
        input: {
          username: '',
          password: ''
        },
        modal: {
          title: '',
          message: ''
        }
      }
    },
    methods: {
      signUp() {
        this
          .$http
          .post('http://localhost/api/v1/auth/signup', this.input)
          .then((res) => {
            const { token } = res.body;
            localStorage.setItem('token', token)
            this.$router.push('/admin/dashboard')
          })
          .catch((e) => {
            this.modal.title = 'Error'
            this.modal.message = e.body.reason
            this.$refs.modal.open()
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
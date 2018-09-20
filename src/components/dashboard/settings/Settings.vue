<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('settings.masterRelated')">
          <form v-on:submit.prevent="updateResourceRequestInterval">
            <div class="form-group with-icon-right form-group-w-btn" :class="{'has-error': errors.has('resourceRequestInterval')}">
              <div class="input-group">
                <input name="resourceRequestInterval" min="1" v-model="master.resourceRequestInterval" v-validate="'min_value:1'"
                  title="" required />
                <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                <i class="fa fa-check valid-icon icon-right input-icon"></i>
                <label class="control-label">{{'settings.master.resourceRequestInterval' | translate}}
                </label><i class="bar"></i>
                <small v-show="errors.has('resourceRequestInterval')" class="help text-danger">
                  {{ errors.first('resourceRequestInterval') }}
                </small>
              </div>
              <button :disabled="errors.has('resourceRequestInterval')" class="btn btn-primary btn-sm">
                <i class="fa fa-save"></i>
              </button>
            </div>
          </form>
          <form v-on:submit.prevent="updateTaskDispatchInterval">
            <div class="form-group with-icon-right form-group-w-btn" :class="{'has-error': errors.has('taskDispatchInterval')}">
              <div class="input-group">
                <input name="taskDispatchInterval" min="1" v-model="master.taskDispatchInterval" v-validate="'min_value:1'"
                  title="" required />
                <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                <i class="fa fa-check valid-icon icon-right input-icon"></i>
                <label class="control-label">{{'settings.master.taskDispatchInterval' | translate}}
                </label><i class="bar"></i>
                <small v-show="errors.has('taskDispatchInterval')" class="help text-danger">
                  {{ errors.first('taskDispatchInterval') }}
                </small>
              </div>
              <button :disabled="errors.has('taskDispatchInterval')" class="btn btn-primary btn-sm">
                <i class="fa fa-save"></i>
              </button>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('settings.slaveRelated')">
          <form v-on:submit.prevent="updateCpuThreshold">
            <div class="form-group with-icon-right form-group-w-btn" :class="{'has-error': errors.has('cpuThreshold')}">
              <div class="input-group">
                <input name="cpuThreshold" min="0" max="100" v-model="slave.threshold.cpu" v-validate="'numeric|between:0,100'"
                  title="" required />
                <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                <i class="fa fa-check valid-icon icon-right input-icon"></i>
                <label class="control-label">{{'settings.slave.cpuThreshold' | translate}}
                </label><i class="bar"></i>
                <small v-show="errors.has('cpuThreshold')" class="help text-danger">
                  {{ errors.first('cpuThreshold') }}
                </small>
              </div>
              <button :disabled="errors.has('cpuThreshold')" class="btn btn-primary btn-sm">
                <i class="fa fa-save"></i>
              </button>
            </div>
          </form>
          <form v-on:submit.prevent="updateMemoryThreshold">
            <div class="form-group with-icon-right form-group-w-btn" :class="{'has-error': errors.has('memoryThreshold')}">
              <div class="input-group">
                <input name="memoryThreshold" min="0" max="100" v-model="slave.threshold.memory" v-validate="'numeric|between:0,100'"
                  title="" required />
                <i class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                <i class="fa fa-check valid-icon icon-right input-icon"></i>
                <label class="control-label">{{'settings.slave.memoryThreshold' | translate}}
                </label><i class="bar"></i>
                <small v-show="errors.has('memoryThreshold')" class="help text-danger">
                  {{ errors.first('memoryThreshold') }}
                </small>
              </div>
              <button :disabled="errors.has('memoryThreshold')" class="btn btn-primary btn-sm">
                <i class="fa fa-save"></i>
              </button>
            </div>
          </form>
        </vuestic-widget>
      </div>
    </div>
    <vuestic-modal :show.sync="show" v-bind:small="true" v-bind:force="true" ref="modal" :cancelClass="'none'" :okText="'modal.close' | translate">
      <div>
        {{modal.message}}
      </div>
    </vuestic-modal>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        show: true,
        modal: {
          message: ''
        },
        master: {
          resourceRequestInterval: null,
          taskDispatchInterval: null
        },
        slave: {
          threshold: {
            cpu: null,
            memory: null
          }
        }
      }
    },
    methods: {
      update(token, property) {
        axios
          .post('http://localhost/api/v1/settings/update', property, { headers: { 'x-access-token': token } })
          .then(() => {
            this.modal.message = 'Success';
            this.$refs.modal.open()
          })
          .catch((e) => {
            this.modal.message = 'Failed';
            this.$refs.modal.open()
          })
      },
      updateResourceRequestInterval() {
        const { token } = JSON.parse(localStorage.getItem('userInfo'))

        const property = { master: { resourceRequestInterval: this.master.resourceRequestInterval } }

        this.update(token, property)
      },
      updateTaskDispatchInterval() {
        const { token } = JSON.parse(localStorage.getItem('userInfo'))

        const property = { master: { taskDispatchInterval: this.master.taskDispatchInterval } }

        this.update(token, property)
      },
      updateCpuThreshold() {
        const { token } = JSON.parse(localStorage.getItem('userInfo'))

        const property = { slave: { threshold: { cpu: this.slave.threshold.cpu } } }

        this.update(token, property)
      },
      updateMemoryThreshold() {
        const { token } = JSON.parse(localStorage.getItem('userInfo'))

        const property = { slave: { threshold: { memory: this.slave.threshold.memory } } }

        this.update(token, property)
      }
    },
    mounted() {
      this.$nextTick(() => {
        const { token } = JSON.parse(localStorage.getItem('userInfo'))

        axios
          .get('http://localhost/api/v1/settings/master', { headers: { 'x-access-token': token } })
          .then((res) => {
            this.master = res.data
          })
          .catch(() => {
          })

        axios
          .get('http://localhost/api/v1/settings/slave', { headers: { 'x-access-token': token } })
          .then((res) => {
            this.slave = res.data
          })
          .catch(() => {
          })
      })
    }
  }
</script>
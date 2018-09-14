<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('settings.masterRelated')">
          <form v-on:submit.prevent="">
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
          <form v-on:submit.prevent="">
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
          <form v-on:submit.prevent="">
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
          <form v-on:submit.prevent="">
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

  </div>
</template>

<script>
  export default {
    data() {
      return {
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
    }
  }
</script>
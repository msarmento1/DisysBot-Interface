<template>
  <vuestic-widget :headerText="$t('menu.add')">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <div class="input-group">
            <input id="task-argument-template" v-model="taskArgumentTemplate" required />
            <label class="control-label" for="task-argument-template">Task Argument Template</label><i class="bar"></i>
          </div>
        </div>

        <div v-for="(intepretiveDirective, index) in intepretiveDirectives" :key="index">
          <component :is="intepretiveDirective"></component>
        </div>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
  import fileDirective from './components/FileDirective.vue'
  import numberDirective from './components/NumberDirective.vue'
  import stringDirective from './components/StringDirective.vue'

  export default {
    components: {
      'file-directive': fileDirective,
      'number-directive': numberDirective,
      'string-directive': stringDirective
    },
    data() {
      return {
        taskArgumentTemplate: ''
      }
    },
    computed: {
      intepretiveDirectives: function () {
        const matches = this.taskArgumentTemplate.match(/(%n|%s|%f)/g);

        const directives = [];

        for (let match in matches) {
          switch (matches[match]) {
            case '%f':
              directives.push('file-directive');
              break;

            case '%n':
              directives.push('number-directive');
              break;

            case '%s':
              directives.push('string-directive');
              break;
          }
        }

        return directives;
      }
    }
  }
</script>
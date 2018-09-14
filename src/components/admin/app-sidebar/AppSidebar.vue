<template>
  <vuestic-sidebar :hidden="isOpen">
    <template slot="menu">
      <sidebar-link :to="{ name: 'dashboard' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-dashboard"></span>
          <span>{{ $t('menu.dashboard') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link-group>
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-tasks"></span>
          <span>{{ $t('menu.taskSet') }}</span>
        </span>
        <sidebar-link :to="{ name: 'running' }">
          <span slot="title">
            <span>{{ $t('menu.running') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'finished' }">
          <span slot="title">
            <span>{{ $t('menu.finished') }}</span>
          </span>
        </sidebar-link>
        <sidebar-link :to="{ name: 'progress-bars' }">
          <span slot="title">
            <span>{{ $t('menu.add') }}</span>
          </span>
        </sidebar-link>
      </sidebar-link-group>
      <sidebar-link :to="{ name: 'slave' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-laptop"></span>
          <span>{{ $t('menu.slaves') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link :to="{ name: 'sys-log' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-file-text-o"></span>
          <span>{{ $t('menu.logs') }}</span>
        </span>
      </sidebar-link>
      <sidebar-link v-if="isAdmin" :to="{ name: 'settings' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon fa fa-gear"></span>
          <span>{{ $t('menu.settings') }}</span>
        </span>
      </sidebar-link>
    </template>
  </vuestic-sidebar>
</template>

<script>

  import VuesticSidebar
    from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
  import SidebarLink from './components/SidebarLink'
  import SidebarLinkGroup from './components/SidebarLinkGroup'

  export default {
    name: 'app-sidebar',
    data() {
      return {
        isAdmin: JSON.parse(localStorage.getItem('userInfo')).isAdmin
      }
    },
    components: {
      VuesticSidebar,
      SidebarLink,
      SidebarLinkGroup
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    }
  }

</script>
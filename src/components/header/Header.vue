<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    :width="400"
    :breakpoint="500"
    bordered
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index" v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const menuList = ref([
  {
    icon: 'fa-brands fa-html5',
    label: 'HTML',
    separator: false
  },
  {
    icon: 'fa-brands fa-css3',
    label: 'CSS',
    separator: false
  },
  {
    icon: 'fa-brands fa-js',
    label: 'JAVASCRIPT',
    separator: true
  },
  {
    icon: 'fa-solid fa-t',
    label: 'TYPESCRIPT',
    separator: true
  },
  {
    icon: 'fa-brands fa-vuejs',
    label: 'VUE JS',
    separator: true
  },
  {
    icon: 'fa-brands fa-react',
    label: 'REACT JS',
    separator: true
  },
  {
    icon: 'fa-solid fa-d',
    label: 'ALGORITHM',
    separator: true
  }
]);



</script>

<template>
  <q-layout view="hHh lpR fFf">
    <Header/>

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer/>
  </q-layout>
</template>

<script setup lang="ts">
import {Header,Footer} from '@/components'
</script>

<style>
@import '@/assets/base.css';
</style>

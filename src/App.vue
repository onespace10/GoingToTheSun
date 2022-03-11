<script setup>
import NavBar from './components/NavBar.vue';
// import CardList from './components/CardList.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <!-- <CardList /> -->
  <NavBar />
  <!-- <div>
    <router-link :to="{name: '/'}">Home</router-link>
    <router-link :to="{name: '/about'}">About</router-link>
    <router-link :to="{name: '/user'}">Users</router-link> -->
    <!-- <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'about'}">About</router-link>
    <router-link :to="{name: 'users'}">Users</router-link> -->
  <!-- </div> -->
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>

<script setup>
import { useStore } from 'vuex';

  const userstore = useStore()
  userstore.commit("addMenu");
</script>

<template>
  <router-view/>
</template>
<style>
  #app{
    height: 100%;
  }
  html{
    background-color: #e2ebec;
  }
  
</style>

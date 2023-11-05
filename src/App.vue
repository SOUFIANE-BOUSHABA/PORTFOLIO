<template>
  <AppHeader :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode"/>
  <router-view :isDarkMode="isDarkMode" />
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // Toggle the dark mode state
    },
  },
  components: {
    AppHeader,
  },
};
</script>

<style>

</style>

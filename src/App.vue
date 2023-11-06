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
      this.isDarkMode = !this.isDarkMode; 
      localStorage.setItem('darkMode', this.isDarkMode.toString());
    },
  },
  created() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode) {
      this.isDarkMode = darkMode === 'true';
    }
  },
  components: {
    AppHeader,
  },
};
</script>

<style>

</style>

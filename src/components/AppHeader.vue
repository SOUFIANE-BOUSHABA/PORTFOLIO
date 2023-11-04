<template>
  <header :class="{'dark-mode': isDarkMode}" class="bg-slate-900 drop-shadow-md leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
    <div class="flex items-center justify-between p-4">
      <div class="flex items-center">
        <span class="text-2xl font-semibold ml-2">
          <pre> &lt;SOUFIANE/&gt;</pre>
        </span>
      </div>
      <nav class="space-x-5" :class="{ 'hidden': !showMenu, 'grid': showMenu }">
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/portfolio">PORTFOLIO</a>
        <a href="/contact">CONTACT</a>
      </nav>
      <div>
        <button @click="toggleDarkMode" class="text-white bg-slate-300 p-2 mr-4 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
          </svg>
        </button>

        <button @click="toggleMenu" class="burger--menu p-2 md:hidden sm:inline-block" :class="{ 'dark-mode-menu': isDarkMode }">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 9.5H7M21 4.5H3M21 14.5H3M21 19.5H7"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isDarkMode: false,
      showMenu: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
  header{
    transition:.7s;
  }
  .dark-mode {
    background-color: white;
    color: black;
  }
  nav{
    display:block;
    transition:.7s;
  }
  .dark-mode-menu {
    background: black;
  }
  @media (max-width: 768px) {
    nav {
      position: absolute;
      display: none;
      right: 60px;
      top: 100px;
    }
    nav.grid {
      display: grid;
    }
    nav a:nth-child(1) {
      margin-left: 20px;
    }
  }
</style>

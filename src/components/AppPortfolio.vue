<template>
  <div  :class="{'dark-mode': isDarkMode}" class="  font-custom all p-20 bg-slate-900 drop-shadow-md leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-auto">
    <h1 class="text-2xl font-bold mb-4">Projects</h1>
   
    <div class="flex gap-3 flex-wrap items-center mb-4">
      <button  :class="{'dark-mode': isDarkMode}" class="flex gap-4 items-center justify-center h-12 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2" @click="filterProjects('webDev')">Web Development</button>
      <button  :class="{'dark-mode': isDarkMode}" class="flex gap-4 items-center justify-center h-12 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2" @click="filterProjects('webDesign')">Web Design</button>
      <input type="text" v-model="searchQuery" :class="{' bg-slate-200': isDarkMode}" class="w-1/3  p-2  border-0 bg-slate-400 text-black rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Search Projects">
    </div>
    <hr  class="text-slate-400">    
   
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div v-for="project in filteredProjects" :key="project.id" class="p-4 border rounded hover:shadow-lg">
        <img :src="project.image" alt="Project Image" class="w-full rounded">
        <h2 class="text-lg font-semibold mt-2">{{ project.name }}</h2>
        <p class=" mt-2">{{ project.description }}</p>
        <div class="mt-2">
          <a :href="project.githubLink" target="_blank" class="text-blue-500 hover:underline mr-2">GitHub</a>
          <a :href="project.demoLink" target="_blank" class="text-blue-500 hover:underline">Demo</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swal from 'sweetalert2';
export default {
  props: {
    isDarkMode: Boolean,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Project 1',
          description: 'Description of Project 1',
          image: require('@/assets/f298fd17-4a38-40d5-9476-48b9cd58a448-removebg-preview.png'),
          technology: 'Vue.js, Tailwind CSS',
          githubLink: 'https://github.com/project1',
          demoLink: 'https://demo.project1.com',
          type: 'webDev',
        }, {
          id: 2,
          name: 'Project 2',
          description: 'Description of Project 2',
          image: require('@/assets/logo.png'),
          technology: 'Vue.js, Tailwind CSS',
          githubLink: 'https://github.com/project1',
          demoLink: 'https://demo.project1.com',
          type: 'webDev',
        }, {
         id: 3,
          name: 'Project 3',
          description: 'Description of Project 3',
          image: require('@/assets/f298fd17-4a38-40d5-9476-48b9cd58a448-removebg-preview.png'),
          technology: 'Vue.js, Tailwind CSS',
          githubLink: 'https://github.com/project1',
          demoLink: 'https://demo.project1.com',
          type: 'webDesign',
        },{
         id: 4,
          name: 'Project 4',
          description: 'Description of Project 4',
          image: require('@/assets/f298fd17-4a38-40d5-9476-48b9cd58a448-removebg-preview.png'),
          technology: 'Vue.js, Tailwind CSS',
          githubLink: 'https://github.com/project1',
          demoLink: 'https://demo.project1.com',
          type: 'webDev',
        }
      ],
      filterType: 'webDev',
      searchQuery: '',
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((project) => {
        const nameMatch = project.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        return nameMatch && (project.type === this.filterType || this.filterType === 'all');
      });
    },
  },
  methods: {
    filterProjects(type) {
      this.filterType = type;
    },
    
  },
  created() {
         window.addEventListener('load', () => {
             const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })

            Toast.fire({
            icon: 'info',
            title: 'This page is still in development.'
            })
    });
  },
};
</script>

<style scoped>
.all{
  transition:.7s;
}
.dark-mode {
    background-color: #F7F7F7;
    color: black;
}
input::placeholder{
  color:black;
}
</style>
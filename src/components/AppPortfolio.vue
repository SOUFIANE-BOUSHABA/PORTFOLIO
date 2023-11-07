<template>
  <div :class="{'dark-mode': isDarkMode}" class="font-custom all p-20 bg-slate-900 drop-shadow-md leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-auto">
    <h1 class="text-2xl font-bold mb-4">Projects</h1>

    <div class="flex gap-3 flex-wrap items-center mb-4">
      <button :class="{'dark-mode': isDarkMode}" class="flex gap-4 items-center justify-center h-12 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2" @click="filterProjects('webDev')">Web Development</button>
      <button :class="{'dark-mode': isDarkMode}" class="flex gap-4 items-center justify-center h-12 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2" @click="filterProjects('webDesign')">Web Design</button>
      <input type="text" v-model="searchQuery" :class="{' bg-slate-200': isDarkMode}" class="w-1/3 p-2 border-0 bg-slate-400 text-black rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Search Projects">
    </div>
    <hr class="text-slate-400">

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div v-for="project in filteredProjects" :key="project.id" class="p-4 border rounded cursor-pointer hover:shadow-lg relative">
        <div class="project-image-container">
          <img :src="project.image" alt="Project Image" class="w-full rounded">
          <div class="project-links gap-4" >
            <div class="github-link  bg-slate-700 p-4 rounded-full "><a :href="project.githubLink" target="_blank" class="">   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github github-icon" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg></a></div>
            <div class="demo-link bg-slate-700 p-4 rounded-full"><a :href="project.demoLink" target="_blank" class=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16"> <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/> <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/> </svg></a></div>
          </div>
        </div>
        <h2 class="text-lg font-semibold mt-2">{{ project.name }}</h2>
        <p class="mt-2">{{ project.technology }}</p>
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
          image: require('@/assets/f298fd17-4a38-40d5-9476-48b9cd58a448-removebg-preview.png'),
          technology: 'Vue.js, Tailwind CSS',
          githubLink: 'https://github.com/project1',
          demoLink: 'https://demo.project1.com',
          type: 'webDev',
        }, {
          id: 2,
          name: 'Project 2',
          image: require('@/assets/logo.png'),
          technology: 'Vue.js, Tailwind CSS',
          githubLink: 'https://github.com/project1',
          demoLink: 'https://demo.project1.com',
          type: 'webDev',
        }, {
         id: 3,
          name: 'Project 3',
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
.all {
  transition: 0.7s;
}

.dark-mode {
  background-color: #F7F7F7;
  color: black;
}

input::placeholder {
  color: black;
}

.project-image-container {
  position: relative;
}

.project-links {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-image-container:hover .project-links {
  opacity: 1;
}

.project-links a {
  color: white;
}

</style>


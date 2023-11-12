<template>
  <div :class="{'dark-mode': isDarkMode}" class=" all font-custom h-auto bg-slate-900  leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
    <!-- First Section -->
  <section class="py-12 flex flex-wrap">
  <div class="w-full md:w-2/5">
    <img src="@/assets/f298fd17-4a38-40d5-9476-48b9cd58a448-removebg-preview.png" alt="Your Image" class="rounded-full mx-auto w-64 h-64" />
  </div>
  <div class="w-full md:w-3/5">
    <div class="pr-16 pl-16">
      <h2 class="text-3xl mt-4 font-semibold">Soufiane Boushaba</h2>
      <p class="text-gray-600 mt-4  font-medium">I was born in Errachidia and am currently 22 years old. I have a strong passion for web development and a keen interest in all things digital. As a dedicated and enthusiastic individual, I am continuously expanding my knowledge and skills in the field of web development. Currently, I am a student at YouCode, where I am actively learning and working on projects to further develop my expertise in the world of web development. My goal is to make a positive impact on the digital landscape and contribute to the ever-evolving digital world.</p>
      <button  :class="{'dark-mode': isDarkMode}" class="flex gap-4 items-center justify-center h-12 mt-4 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2">Download CV  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download download-icon" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/> </svg></button>

    </div>
  </div>
</section>


    <!-- Second Section -->
    <section class="py-8 text-center ">
    <h2 class="text-2xl font-semibold mb-4">Skills</h2>
     <div class="mb-4">
        <button @click="showAll"          :class="{'dark-mode': isDarkMode}" class="items-center justify-center h-12 mt-4 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2 hover:bg-slate-600">All</button>
        <button @click="showTechnologies" :class="{'dark-mode': isDarkMode}" class="items-center justify-center h-12 mt-4 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2 hover:bg-slate-600">Technologies</button>
        <button @click="showTools"        :class="{'dark-mode': isDarkMode}" class="items-center justify-center h-12 mt-4 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2 hover:bg-slate-600">Tools</button>
     </div>
      
      <div v-if="showingTechnologies" class=" flex flex-wrap gap-4 px-24 justify-center py-12">
         <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md" > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
          <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> 
          <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> </a> 
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
           <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
            <a href="https://laravel.com/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width="40" height="40"/> </a> 
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> 
            <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40"/> </a> 
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a>
              <a href="https://www.php.net" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a>
               <a href="https://sass-lang.com" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> 
               <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>
                <a href="https://vuejs.org/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a> 
        <div>
         
        </div>
      </div>
      <div v-if="showingTools" class=" flex flex-wrap gap-4 px-24 justify-center py-12">
            <a href="https://www.adobe.com/in/products/illustrator.html"  class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/> </a> 

             <a href="https://www.photoshop.com/en" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </a>

               <a href="https://postman.com" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> 

                <a href="https://www.adobe.com/products/xd.html" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" width="40" height="40"/> </a>

        <div>
         
        </div>
      </div>
      <div v-if="showingAll" class=" flex flex-wrap gap-4 px-24 justify-center py-12">
         <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>
          <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> 
          <a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> </a> 
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
           <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40"/> </a> 
           <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
            <a href="https://laravel.com/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg" alt="laravel" width="40" height="40"/> </a> 
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> 
            <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40"/> </a> 
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a>
             <a href="https://www.photoshop.com/en" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40"/> </a>
              <a href="https://www.php.net" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a>
               <a href="https://postman.com" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> 
               <a href="https://sass-lang.com" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> 
               <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a>
                <a href="https://vuejs.org/" target="_blank" rel="noreferrer" class="icon-bottom bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a> 
                <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noreferrer" class="icon-top bg-slate-300 p-2 rounded drop-shadow-md"> <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" width="40" height="40"/> </a>
        <div>
         
        </div>
      </div>
    </section>

    <!-- Third Section -->
    
   <section class="py-8 px-4  text-center">
   <h2 class="text-2xl font-semibold mb-4">Services</h2>
   <div class="flex gap-16 justify-center flex-wrap">
           <div class="w-full md:w-1/4 border-2 py-20 px-4 group relative cursor-pointer">
                <div :class="{' group-hover:text-black': isDarkMode}" class="text-center grid gap-8 place-items-center z-10  group-hover:text-white">
                    <a class="bg-slate-200 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"  class="bi bi-code-slash text-black" viewBox="0 0 16 16">
                        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                    </svg>
                    </a>
                    <h3 class="text-xl font-semibold">Web Development</h3>
                    <p class="text-justify">This category encompasses the creation and maintenance of websites and web applications. It involves front-end and back-end development.</p>
                </div>
                <div :class="{'bg-slate-950': isDarkMode}" class="bg-slate-400 cercle h-4 w-full absolute rounded-t-full bottom-0 left-0 group-hover:h-full transition-height duration-300 opacity-50 group-hover:rounded-none duration-500"></div>
            </div>

            <div class="w-full md:w-1/4 border-2 py-20 px-4 group relative cursor-pointer ">
              <div :class="{' group-hover:text-black': isDarkMode}" class="text-center grid gap-8 place-items-center z-10  group-hover:text-white">
                <a class="bg-slate-200 p-3 rounded-full">  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-code text-black" viewBox="0 0 16 16"> <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/> <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/> </svg></a>
                <h3 class="text-xl font-semibold">Mobile Development</h3>
                <p class="text-justify">Mobile development focuses on creating applications for mobile devices, such as smartphones and tablets.</p>
                </div>
                <div :class="{' bg-slate-950': isDarkMode}" class="bg-slate-400 h-4 w-full absolute rounded-t-full bottom-0 left-0 group-hover:h-full  transition-height duration-300  opacity-50 group-hover:rounded-none duration-500"></div>
            </div>
            <div class="w-full md:w-1/4 border-2 py-20 px-4 group relative cursor-pointer ">
                <div :class="{' group-hover:text-black': isDarkMode}" class="text-center grid gap-8 place-items-center z-10  group-hover:text-white">
                <a class="bg-slate-200 p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="text-black" viewBox="0 0 24 24"><path d="M16.24,11.51l1.57-1.57l-3.75-3.75l-1.57,1.57L8.35,3.63c-0.78-0.78-2.05-0.78-2.83,0l-1.9,1.9 c-0.78,0.78-0.78,2.05,0,2.83l4.13,4.13L3,17.25V21h3.75l4.76-4.76l4.13,4.13c0.95,0.95,2.23,0.6,2.83,0l-1.9-1.9 c0.78-0.78,0.78-2.05,0-2.83L16.24,11.51z M9.18,11.07L5.04,6.94l1.89-1.9c0,0,0,0,0,0l1.27,1.27L7.02,7.5l1.41,1.41l1.19-1.19 l1.45,1.45L9.18,11.07z M17.06,18.96l-4.13-4.13l1.9-1.9l1.45,1.45l-1.19,1.19l1.41,1.41l1.19-1.19l1.27,1.27L17.06,18.96z"/><path d="M20.71,7.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34c-0.47-0.47-1.12-0.29-1.41,0l-1.83,1.83l3.75,3.75L20.71,7.04z"/></svg>  </a>
                    <h3 class="text-xl font-semibold">Web design </h3>
                <p class="text-justify">Web design is about creating the visual layout and user interface of websites. It involves graphic design, typography, color schemes, and the overall aesthetics of a website, enhancing the user experience.</p>
                </div>
                <div :class="{'bg-slate-950': isDarkMode}" class="bg-slate-400 h-4 w-full absolute rounded-t-full bottom-0 left-0 group-hover:h-full  transition-height duration-300  opacity-50 group-hover:rounded-none duration-500"></div>
            </div>
   </div>          
</section>


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
      showingTechnologies: false,
      showingTools: false,
      showingAll: true,
    };
  },
  methods: {
    showTechnologies() {
      this.showingTechnologies = true;
      this.showingTools = false;
      this.showingAll = false;
    },
    showTools() {
      this.showingTechnologies = false;
      this.showingTools = true;
      this.showingAll = false;
    },
    showAll() {
      this.showingTechnologies = false;
      this.showingTools = false;
      this.showingAll = true;
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

.download-icon {
  animation: moveUpDown .7s infinite alternate;
}

@keyframes moveUpDown {
  0% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(4px);
  }
}

.icon-top{
  animation:  icontop 1s infinite alternate;
}

@keyframes icontop {
  0% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(4px);
  }
}

.icon-bottom{
  animation: iconbottom 1s infinite alternate;
}

@keyframes iconbottom {
  0%  {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(-4px);
  }
}

.all{
    transition:.7s;
}
.dark-mode {
    background-color: #F7F7F7;
    color: black;
}


</style>
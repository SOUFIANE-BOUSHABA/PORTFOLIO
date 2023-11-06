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
    <section class="py-8 flex flex-wrap">
      <div class="w-full md:w-1/2">
        <div class="text-center">
          <i class="icon-for-code text-4xl"></i>
          <h3 class="text-xl font-semibold">Web Development</h3>
          <p>Your web development description.</p>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="text-center">
          <i class="icon-for-design text-4xl"></i>
          <h3 class="text-xl font-semibold">Web Design</h3>
          <p>Your web design description.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
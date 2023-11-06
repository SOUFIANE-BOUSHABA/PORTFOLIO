<template>
  <div :class="{'dark-mode': isDarkMode}" class=" all h-auto bg-slate-900  leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
    <!-- First Section -->
  <section class="py-12 flex flex-wrap">
  <div class="w-full md:w-2/5">
    <img src="@/assets/f298fd17-4a38-40d5-9476-48b9cd58a448-removebg-preview.png" alt="Your Image" class="rounded-full mx-auto w-64 h-64" />
  </div>
  <div class="w-full md:w-3/5">
    <div class="pr-16 pl-4">
      <h2 class="text-3xl mt-4 font-semibold">Soufiane Boushaba</h2>
      <p class="text-gray-600 mt-4">I was born in Errachidia and am currently 22 years old. I have a strong passion for web development and a keen interest in all things digital. As a dedicated and enthusiastic individual, I am continuously expanding my knowledge and skills in the field of web development. Currently, I am a student at YouCode, where I am actively learning and working on projects to further develop my expertise in the world of web development. My goal is to make a positive impact on the digital landscape and contribute to the ever-evolving digital world.</p>
      <button  :class="{'dark-mode': isDarkMode}" class="flex gap-4 items-center justify-center h-12 mt-4 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2">Download CV  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download download-icon" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/> </svg></button>

    </div>
  </div>
</section>


    <!-- Second Section -->
    <section class="py-8 text-center">
      <div class="mb-4">
        <button @click="showTechnologies">Technologies</button>
        <button @click="showTools">Tools</button>
        <button @click="showAll">All</button>
      </div>
      <div v-if="showingTechnologies">
        test
        <div>
         
        </div>
      </div>
      <div v-if="showingTools">
        testttt
        <div>
         
        </div>
      </div>
      <div v-if="showingAll">
        testttttttttt
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
.all{
    transition:.7s;
}
.dark-mode {
    background-color: #F7F7F7;
    color: black;
}
</style>
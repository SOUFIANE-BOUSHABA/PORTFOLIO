<template>
  <div class="flex p-8 bg-slate-900 drop-shadow-md leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-screen">
  
    <div class="flex-1 p-6">
      <div class="text-6xl mb-4">Hi, I'm Soufiane Boushaba</div>
      <div class="text-4xl mb-4">I'm a Full Stack Developer</div>
      <a href="#about-me" class="text-blue-400 mt-4">See more about me</a>
      <div class="mt-16">
        <button class="border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2">Download CV</button>
        <button class="bg-teal-900 text-white py-2 px-4">Let's talk</button>
      </div>
    </div>

   
    <div class="w-1/4 p-4">
      <img src="@/assets/logo.png" alt="Your Picture" class="rounded-full w-32 h-32 mx-auto" />
    </div>

 
    <div class="w-1/8 p-4">
      <div class="grid  gap-4">
      
        <a href="https://github.com/SOUFIANE-BOUSHABA" target="_blank" class="bg-gray-300 p-4 text-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>
        </a>
       
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" class="bg-gray-300 p-4 text-center">
          <i class="fab fa-linkedin"></i>
        </a>
     
        <a href="https://twitter.com/your-twitter" target="_blank" class="bg-gray-300 p-4 text-center">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome',
};
</script>

<style scoped>

</style>

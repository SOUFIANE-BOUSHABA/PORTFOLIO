<template>
  <div  :class="{'dark-mode': isDarkMode}" class=" all md:flex sm:grid  pb-56 p-20 bg-slate-900 drop-shadow-md leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-auto">
    <!-- Left Section -->
    <div class="w-2/4 p-6">
      <h1 class="text-6xl font-bold mb-4">Let's Talk About Your Project.</h1>

       <!-- Email Section -->
      <div class="flex items-center mt-20 mb-4">
        <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4a8 8 0 00-8 8v8a2 2 0 002 2h12a2 2 0 002-2v-8a8 8 0 00-8-8z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 14h2m0 0h-2m0 0h2m0 0h-2m0 0h2m0 0h-2" />
          </svg>
        </div>
        <div class="ml-2 ">
          <p class="text-xl font-semibold">Mail me at:</p>
          <p class="text-gray-600">soufianboushaba12@gmail.com</p>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="w-2/3 p-6">
     

      <!-- Form Section -->
      <form>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
          <input type="text" id="name" name="name" :class="{'border-0 bg-slate-200': isDarkMode}" class="w-full p-2  border-0 bg-slate-400 text-black rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email"  :class="{'border-0 bg-slate-200': isDarkMode}" class="w-full p-2  border-0 bg-slate-400 text-black rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="mb-4">
          <label for="comment" class="block text-sm font-medium text-gray-700">Comment</label>
          <textarea id="comment" name="comment" rows="4"  :class="{'border-0 bg-slate-200': isDarkMode}" class="w-full p-2  border-0 bg-slate-400 text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <button type="submit" class="bg-black text-white p-3 rounded-md hover:bg-blue-600">SEND</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContact",
   props: {
    isDarkMode: Boolean,
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

</style>

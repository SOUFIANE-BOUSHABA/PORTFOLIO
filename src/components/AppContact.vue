<template>
  <div  :class="{'dark-mode': isDarkMode}" class=" all md:flex font-custom  py-40 p-20 bg-slate-900 drop-shadow-md leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-auto">
    <!-- Left Section -->
    <div class=" flex-1 p-6">
      <h1 class="text-6xl font-bold mb-4">Let's Talk About Your Project.</h1>

       <!-- Email Section -->
      <div class="flex flex-1 items-center mt-20 mb-4">
        <div class="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </div>
        <div class="ml-2 ">
          <p class="text-xl font-semibold">Mail me at:</p>
           <a href="mailto:soufianboushaba12@gmail.com">soufianboushaba12@gmail.com</a>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="flex-1 p-6">
     

      <!-- Form Section -->
      <form class="text-black" @submit.prevent="submitForm">
        <div class="mb-4 ">
          <label for="name" class="block text-sm font-medium text-gray-700"></label>
          <input type="text" id="name" placeholder="Enter your name" name="name" :class="{' bg-slate-200': isDarkMode}" class="w-full p-2  border-0 bg-slate-400 text-black rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"></label>
          <input type="email" placeholder="Email" id="email" name="email"  :class="{'bg-slate-200': isDarkMode}" class="w-full p-2  border-0 bg-slate-400 text-black rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="mb-4">
          <label for="comment" class="block text-sm font-medium text-gray-700"></label>
          <textarea id="comment" placeholder="write ..." name="comment" rows="4"  :class="{' bg-slate-200': isDarkMode}" class="w-full p-2  border-0 bg-slate-400 text-black rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
        </div>

        <input type="submit" :class="{'bg-slate-950 text-white': isDarkMode}" class="bg-slate-400 p-3 rounded-md hover:bg-slate-600" value="SEND">
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  name: "AppContact",
   props: {
    isDarkMode: Boolean,
  },

   methods: {
    submitForm() {
    // 
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const comment = document.getElementById("comment").value;

    //
      const nameRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const commentRegex = /^[A-Za-z\s]+$/;
    //  
      if (!nameRegex.test(name)) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })

            Toast.fire({
            icon: 'error',
            title: 'Please enter a valid name containing only letters and spaces.'
            });
        
        return;
      }

      if (!emailRegex.test(email)) {
         const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })

            Toast.fire({
            icon: 'error',
            title: 'Please enter a valid email adresse'
            });
        return;
      }

      if (!commentRegex.test(comment)) {
         const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })

            Toast.fire({
            icon: 'error',
            title: 'Please enter a valid comment'
            });
        return;
      }
      else{
           const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })

            Toast.fire({
            icon: 'success',
            title: 'your comment send successfuly.'
            })
        return;
      }
    },
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
input::placeholder,
textarea::placeholder {
  color: #000; 
}
@media(max-width:600px)
{
    .all{
        display:grid;
    }
}

</style>

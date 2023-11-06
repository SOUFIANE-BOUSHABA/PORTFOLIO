<template>
   <div class="w-full md:w-1/4 border-2 py-20 px-4 group relative cursor-pointer ">
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
  
</style>

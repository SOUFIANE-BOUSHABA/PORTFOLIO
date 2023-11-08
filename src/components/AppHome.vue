<template>
 <div :class="{'dark-mode': isDarkMode}"  class="contentt">
  <div   :class="{'dark-mode': isDarkMode}" class="flex  font-custom all p-8 bg-slate-900 drop-shadow-md leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-auto">
    <div class="flex-1  p-6 ">
      <div class="text-6xl mb-4">Hi, I'm Soufiane Boushaba</div>
      <div class="text-4xl mb-6 h-20" ref="typedText">  </div>
      <a href="/about" class=" flex gap-4 items-center text-blue-400 mt-4">See more about me  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right see-more-icon" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg></a>
      <div class="mt-16 flex gap-4  sm:grid md:flex btns ">
        <button  :class="{'dark-mode': isDarkMode}" class="flex gap-4 items-center justify-center h-16 border-slate-400 border-solid border-2 text-white py-2 px-4 mr-2">Download CV  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download download-icon" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/> </svg></button>
        <a  href="/contact"  class="bg-teal-900 text-white h-16 py-2 px-4 flex  items-center">Let's talk</a>
        <div class=" ml-6 w-2/4 h-96 rounded "> 
            <div class=" h-30 flex gap-4 mt-2 items-center">
                        <span class="relative flex w-4 h-4 ">
                            <span class="animate-ping absolute w-4 h-4 inline-flex h-full w-full rounded-full  bg-green-500 opacity-75"></span>
                            <span class="relative inline-flex rounded-full w-4 h-4 bg-green-500"></span>
                       </span>
                        <span class="relative flex w-4 h-4">
                            <span class="animate-ping absolute w-4 h-4 inline-flex h-full w-full rounded-full   bg-red-500 opacity-75"></span>
                            <span class="relative inline-flex rounded-full w-4 h-4  bg-red-500"></span>
                       </span>
                        <span class="relative flex w-4 h-4">
                            <span class="animate-ping absolute w-4 h-4 inline-flex h-full w-full rounded-full  bg-yellow-500 opacity-75"></span>
                            <span class="relative inline-flex rounded-full w-4 h-4 bg-yellow-500"></span>
                       </span>
            </div>
                                <div class="w-64 mt-6 border-solid border-2 py-6 ">
                                        <pre>  function repeat() {</pre>
                                        <pre>    code();</pre>
                                        <pre>    eat();</pre>
                                        <pre>    code();</pre>
                                        <pre>    sleep();</pre>
                                        <pre>  }</pre>

                                        <pre>  repeat();</pre>
                                </div>
        
        </div>
      </div>
    </div>
<div class="cursor-circle" :class="{'dark-mode-circle': isDarkMode}" :style="{ transform: `translate(${cursorX}, ${cursorY})` }"></div>

    <div class =" flex justify-between  w-2/5">
    <div class="w-76 p-4">
      <img src="@/assets/f298fd17-4a38-40d5-9476-48b9cd58a448-removebg-preview.png" alt="Your Picture" class="rounded-full w-3/4 h-76 mr-96 mx-auto" />
    </div>

    <div class="w-1/8 p-4 mt-28">
      <div class="grid gap-4">
        <a href="https://github.com/SOUFIANE-BOUSHABA" target="_blank" class=" text-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github github-icon" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>
        </a>
       
        <a href="https://www.linkedin.com/in/soufian-boushaba-265600201" target="_blank" class=" text-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin linkedin-icon" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
        </a>
     
        <a href="https://twitter.com/Soufian59463058" target="_blank" class=" text-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter twitter-icon" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg>
        </a>
      </div>
    </div>
   </div>
  </div>
</div>
</template>

<script>
import Swal from 'sweetalert2';
import Typed from 'typed.js';
export default {
     props: {
    isDarkMode: Boolean,
  },
  name: 'AppHome',
  data() {
    return {
       cursorX: 0,
       cursorY: 0,
    };
  },
  mounted() {
    this.initTyped();
    this.attachCursorListener();
  },
  methods: {
     initTyped() {
      const options = {
        strings: ["I'm a Full Stack web Developer",  'UI/UX Designer'],
        typeSpeed: 50, 
        backSpeed: 25,
        backDelay: 1500, 
        showCursor: false, 
        loop: true, 
      };

      new Typed(this.$refs.typedText, options);
    },

     attachCursorListener() {
      document.addEventListener("mousemove", this.updateCursorPosition);
    },
    updateCursorPosition(event) {
      this.cursorX = event.clientX + "px";
      this.cursorY = event.clientY + "px";
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
 div{
    transition:.7s;
  }
.dark-mode {
    background-color: #F7F7F7;
    color: black;
  }


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

.see-more-icon {
  animation: moveleftRight 1s infinite alternate;
}

@keyframes moveleftRight {
  0% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(4px);
  }
}

.github-icon {
  animation: rotateGitHub 3s infinite linear;
}

@keyframes rotateGitHub {
  0% {
    transform: rotate(0deg);
  }
  80%{
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.linkedin-icon {
  animation: rotateGitHub 4s infinite linear;
}

@keyframes rotateGitHub {
  0% {
    transform: rotate(0deg);
  }
  80%{
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.twitter-icon {
  animation: rotateGitHub 5s infinite linear;
}

@keyframes rotateGitHub {
  0% {
    transform: rotate(0deg);
  }
  80%{
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media(max-width:1150px){
 .all{
     display:grid;
 }
}

@media(max-width:700px){
 .btns{
     display:grid;
 }
}


.cursor-circle {
    position: fixed;
    width: 40px;
    height: 40px;
    border:1px solid white;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out;
    z-index: 9999; 
  }
  .dark-mode-circle{
      border:1px solid black; 
  }

  @media(max-width:1000px){
    .cursor-circle{
      display:none;
    }
  }
</style>

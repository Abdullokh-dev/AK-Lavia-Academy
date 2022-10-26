<template>
  <div class="container-fluid">
    <RouterView/>
  </div>
</template>

<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay: 200,
  duration: 1500,
  once: false,
  mirror: false
});

export default {
  name: "App",
  components: {Footer, Header}
}

</script>


<style scoped>

</style>

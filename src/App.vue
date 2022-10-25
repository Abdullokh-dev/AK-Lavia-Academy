<template>
  <div class="container-fluid">
    <RouterView/>
  <Footer />
  </div>
</template>

<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {Footer, Header}
}

</script>


<style scoped>

</style>

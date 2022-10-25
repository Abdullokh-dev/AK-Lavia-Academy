<template>
    <Banner />
    <HomePageContent />
    <Footer />
</template>

<script>
import Banner from "../components/Banner.vue";
import HomePageContent from "../components/HomePageContent.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Home",
  components: {Footer, HomePageContent, Banner}
}
</script>

<style scoped>

</style>
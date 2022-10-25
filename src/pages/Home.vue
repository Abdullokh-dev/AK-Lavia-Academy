<template>
    <Banner />
    <HomePageContent />
</template>

<script>
import Banner from "../components/Banner.vue";
import HomePageContent from "../components/HomePageContent.vue";
export default {
    name: "Home",
  components: {HomePageContent, Banner}
}
</script>

<style scoped>

</style>
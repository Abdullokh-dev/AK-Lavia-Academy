<template>
  <Header color="#F5F5F5"/>
  <div class="row text-center main-row">
    <!-- Bg Curl -->
    <div>
      <img alt="#" class="bg-curl3" src="../assets/images/curly-bg3.png">
    </div>
    <div class="col-12">
      <div class="text-1 mt-5 pt-3">
        LAVIA ACADEMY
      </div>

      <div class="text-2 mt-3">
        Lavia kompaniyasi Xitoylik
        investorlar tomonidan
        moliyalashtirilgan bo‘lib, O‘zbekistonda aniq
        rejaga asoslangan IT(Information Technology) ,
        biznes loyihalarini boshlamoqchi edi.
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Academy",
  components: {Header}
}
</script>

<style scoped>
.main-row {
  background-color: #F5F5F5;
}

.text-1 {
  font-size: 33px;
  font-weight: 700;
  line-height: 43px;
  color: #111116;
}

.text-2 {
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  color: #515151;
  margin-bottom: 50vh;
}

.bg-curl3 {
  position: absolute;
  right: 0;
  margin-top: -100px;
  opacity: 0.3;
}

@media only screen and (min-width: 768px) {
  .text-1 {
    font-size: 60px;
    line-height: 90px;
  }

  .text-2 {
    font-size: 22px;
    line-height: 40px;
    padding: 0 40px;
  }
}

@media only screen and (min-width: 1200px) {
  .text-1 {
    font-size: 71px;
  }

  .text-2 {
    font-size: 29px;
    padding: 0 40px;
  }
}
</style>
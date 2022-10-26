<template>
  <div class="row text-center">
    <div class="col-12 d-md-none"></div>

    <div class="col-12">
      <div class="text-1">Siz g‘alaba qozondingiz!</div>
    </div>

    <div class="col-12">
      <div class="text-2">
        Endi sizda PREMIUM ta‘rifi uchun 50% chegirma,
        STANDART ta‘rifi uchun 30% chegirma mavjud.
      </div>
    </div>

    <div class="col-12">
      <div class="time">00 : 24 : 58</div>
    </div>

    <div class="col-12">
      <div class="text-3">
        Chegirma muddati: 48 soat.
        Ushbu vaqt ichida siz shartnomani imzolashingiz kerak.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Winner"
}
</script>

<style scoped>
.d-md-none {
  background-image: url("../assets/images/register/img_1.png");
  height: 220px;
  width: 100%;
  background-size: cover;
}

.text-1 {
  font-size: 27px;
  font-weight: 700;
  line-height: 90px;
  text-align: center;
  margin-top: 55px;
}

.text-2 {
  font-size: 16px;
  line-height: 27px;
}

.time {
  font-size: 66px;
  font-weight: 600;
  line-height: 90px;
  margin: 40px 0;
}

.text-3 {
  font-size: 19px;
  font-weight: 500;
  line-height: 37px;
}

@media only screen and (min-width: 768px) {
  .text-1 {
    font-size: 46px;
    margin-top: 80px;
  }

  .text-2 {
    margin-top: 80px;
    font-size: 28px;
    line-height: 45px;
  }

  .time {
    font-size: 126px;
    margin: 80px 0;
  }

  .text-3 {
    font-size: 37px;
    font-weight: 700;
    line-height: 54px;
    margin-top: 80px;
  }
}

@media only screen and (min-width: 1200px) {
  .text-1 {
    font-size: 51px;
    margin-top: 90px;
  }

  .text-2 {
    margin-top: 80px;
    font-size: 41px;
    line-height: 57px;
  }

  .time {
    font-size: 200px;
    margin: 80px 0;
  }

  .text-3 {
    font-size: 51px;
    line-height: 90px;
    margin-top: 80px;
  }
}
</style>
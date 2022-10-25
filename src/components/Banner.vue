<template>
  <div class="row banner-row">
    <div class="col-12 col-lg-6 d-flex justify-content-center">
      <div class="ms-sm-0 ms-lg-5 left-side">
        <div class="text-1">O‘zbekistonda hali bunaqasi bo‘lmagan!</div>
        <div class="text-2">
          SIZ ORZU  Qilgan Kasb
        </div>
        <div class="text-3">
          <span class="red-text">DIQQAT: </span>
          <span>
            Ushbu ma‘lumotlarni o‘qiganingizdan so‘ng sizda yuqori daromadli,
            “toza” ish egasi bo‘lishimkoniyati paydo bo‘ladi.
          </span>
        </div>
        <div class="mt-4 mb-5 pb-4">
          <button class="more-info-btn"> Ro'yxatdan o'tish </button>
        </div>
      </div>
    </div>

    <div class="col-6">

    </div>

  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>
.banner-row {
  background: linear-gradient(90.63deg, #FFFBF4 7.63%, #F7FCF9 100%);
  padding-left: 5vw;
}

.left-side {
  margin-top: 70px;
}

.text-1 {
  color: #6F6F76;
  font-size: 18px;
}

.text-2 {
  font-weight: 700;
  font-size: 55px;
  line-height: 60px;
}

.red-text {
  color: #FA3913;
}

.text-3 {
  font-weight: 400;
  font-family: Rubik, sans-serif;
  color: #6F6F76;
  width: 420px;
  line-height: 36px;
  font-size: 18px;
  margin-top: 10px;
}

.more-info-btn {
  width: 180px;
  height: 70px;
  border: none;
  box-shadow: 5px 10px 30px 0 #FFA5024D;
  background-color: #FFA502;
  border-radius: 15px;
  font-weight: 500;
  font-size: 16px;
  color: white;
}

@media only screen and (max-width: 991px) {
  .left-side {
    text-align: center;
  }
  .text-3 {
    margin: auto;
  }

}

@media only screen and (min-width: 992px) and (max-width: 1299px) {
  .text-2 {
    width: 350px;
  }
  .banner-row {
    padding-left: 20px !important;
  }

  .text-2 {
    font-size: 50px;
    line-height: 55px;
  }
}

@media only screen and (min-width: 1300px) {
  .text-2 {
    width: 450px;
  }

  .left-side {
    margin-top: 100px;
  }

  .text-1 {
    font-size: 23px;
  }

  .text-2 {
    font-weight: 700;
    font-size: 70px;
    line-height: 80px;
  }
}
</style>
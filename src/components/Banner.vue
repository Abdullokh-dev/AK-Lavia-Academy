<template>
  <Header />
  <div class="row banner-row">
    <div class="col-12 col-md-6 d-flex justify-content-center ps-xl-5">
      <div class="ms-sm-0 ms-lg-5 left-side" data-aos="fade-down-right" data-aos-delay="100">
        <div class="text-1">O‘zbekistonda hali bunaqasi bo‘lmagan!</div>
        <div class="text-2">SIZ ORZU Qilgan Kasb</div>
        <div class="text-3">
          <span class="red-text">DIQQAT: </span>
          <span>
            Ushbu ma‘lumotlarni o‘qiganingizdan so‘ng sizda yuqori daromadli,
            “toza” ish egasi bo‘lishimkoniyati paydo bo‘ladi.
          </span>
        </div>
        <div class="mt-4 mb-5 pb-4">
          <button class="more-info-btn" @click="academy"> Batafsil ma’lumot</button>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 mt-md-5 mt-lg-2 mt-xl-4 d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
      <div class="card-1">
        <img class="sandbox-image" src="../assets/images/sandbox-img.png">
        <div class="card-1-text-1">Yuqori DAROMAD</div>
        <div class="card-1-text-2">Biz bilan kelajak kasblarini egallang!</div>
      </div>
      <div>
        <img alt="#" class="image" src="../assets/images/banner1.png">
      </div>
      <div class="card-2">
        <img class="heart-sandbox-image" src="../assets/images/heart-sandbox.png">
        <div class="card-2-text-1">40k +</div>
        <div class="card-2-text-2">Bizning o’quvchilar</div>
        <div class="card-2-students">
          <img src="../assets/images/studens.png" width="70">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Banner",
  methods: {
    academy() {
      this.$router.push('/academy')
    }
  },
  components: {Header}
}
</script>

<style scoped>
.banner-row {
  background: linear-gradient(90.63deg, #FFFBF4 7.63%, #F7FCF9 100%);
}

.image {
  width: 320px;
  height: 295px;
}

/* left side card */
.card-1 {
  font-family: Rubik, sans-serif;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  width: 90px;
  margin: 70px 270px 0 0;
}

.sandbox-image {
  margin-top: -20px;
  width: 50px;
}

.card-1-text-1 {
  margin-top: -9px;
  font-weight: 600;
  font-size: 7px;
  line-height: 7px;
  color: #111116;
}

.card-1-text-2 {
  margin-top: 5px;
  font-weight: 400;
  font-size: 7px;
  line-height: 7px;
  color: #6F6F76;
  padding: 0 3px 5px 3px;
}

/* right side card */
.card-2 {
  font-family: Rubik, sans-serif;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  width: 90px;
  margin: 50px 0 0 250px;
}

.heart-sandbox-image {
  margin-top: -20px;
  width: 50px;
}

.card-2-text-1 {
  margin-top: -7px;
  font-weight: 600;
  font-size: 13px;
  line-height: 7px;
  color: #111116;
}

.card-2-text-2 {
  margin-top: 5px;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #6F6F76;
  padding: 0 2px 7px 2px;
}

.card-2-students {
  padding-bottom: 10px;
}

.left-side {
  margin-top: 70px;
  text-align: center;
}

.text-1 {
  color: #6F6F76;
  font-size: 20px;
}

.text-2 {
  font-weight: 700;
  font-size: 41px;
  line-height: 43px;
  margin-top: 20px;
}

.red-text {
  color: #FA3913;
}

.text-3 {
  font-weight: 200;
  font-family: Rubik, sans-serif;
  color: #6F6F76;
  line-height: 21px;
  font-size: 15px;
  margin-top: 20px;
}

.more-info-btn {
  border: none;
  box-shadow: 5px 10px 30px 0 #FFA5024D;
  background-color: #FFA502;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  color: white;
  padding: 15px 10px;
}

/* Medium */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .left-side {
    padding-left: 20px;
    text-align: left;
  }

  .card-1-text-1, .card-1-text-2 {
    font-size: 9px;
    line-height: 9px;
  }

  .card-1 {
    width: 110px;
    padding-bottom: 5px;
    margin-right: 300px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .left-side {
    text-align: left;
  }

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

  .image {
    width: 420px;
    height: 395px;
  }

  .card-1 {
    border-radius: 10px;
    text-align: center;
    width: 130px;
    margin: 100px 370px 0 0;
  }

  .sandbox-image, .heart-sandbox-image {
    margin-top: -25px;
    width: 60px;
  }

  .card-1-text-1 {
    font-size: 12px;
    line-height: 12px;
  }

  .card-1-text-2 {
    margin-top: 5px;
    font-size: 10px;
    line-height: 13px;
    padding: 0 5px 10px 5px;
  }

  .card-2 {
    border-radius: 10px;
    width: 120px;
    margin: 70px 0 0 310px;
  }

  .card-2-text-1 {
    margin-top: -10px;
    font-size: 17px;
    line-height: 22px;
  }

  .card-2-text-2 {
    margin-top: 5px;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: #6F6F76;
    padding: 0 2px 7px 2px;
  }

}

@media only screen and (min-width: 1200px) {
  .text-2 {
    width: 450px;
  }

  .left-side {
    margin-top: 100px;
    text-align: left;
  }

  .text-1 {
    font-size: 23px;
  }

  .text-2 {
    font-weight: 700;
    font-size: 70px;
    line-height: 80px;
  }

  .text-3 {
    line-height: 36px;
    font-size: 18px;
    margin-top: 20px;
    width: 450px;
  }

  .image {
    width: 578px;
    height: 544px;
  }

  .card-1 {
    border-radius: 20px;
    width: 150px;
    margin: 120px 470px 0 0;
  }

  .sandbox-image, .heart-sandbox-image {
    margin-top: -30px;
    width: 70px;
  }

  .card-1-text-1 {
    margin-top: -15px;
    font-size: 12px;
    line-height: 24px;
  }

  .card-1-text-2 {
    margin-top: 2px;
    font-size: 10px;
    line-height: 15px;
    padding: 0 3px 8px 3px;
  }

  /* right side card */
  .card-2 {
    border-radius: 20px;
    width: 150px;
    margin: 75px 0 0 390px;
  }

  .card-2-text-1 {
    font-size: 25px;
    line-height: 25px;
  }

  .card-2-text-2 {
    font-size: 14px;
    line-height: 30px;
    padding: 0 2px 7px 2px;
  }

  .card-2-students > img {
    width: 120px;
    padding-bottom: 10px;
  }

}

@media only screen and (min-width: 1400px) {
  .text-1 {
    font-size: 23px;
  }

  .text-2 {
    font-size: 75px;
    width: 500px;
  }

  .more-info-btn {
    border-radius: 15px;
    font-size: 16px;
    padding: 20px 20px;
  }

  .image {
    width: 600px;
    height: 566px;
  }

  .card-1 {
    width: 200px;
    margin: 120px 570px 0 0;
  }

  .sandbox-image, .heart-sandbox-image {
    margin-top: -38px;
    width: 89px;
  }

  .card-1-text-1 {
    font-size: 16px;
  }

  .card-1-text-2 {
    font-size: 13px;
  }

  /* right side card */
  .card-2 {
    width: 200px;
    margin: 95px 0 0 460px;
  }

  .card-2-text-1 {
    font-size: 30px;
    line-height: 25px;
  }

  .card-2-text-2 {
    font-size: 18px;
  }

  .card-2-students > img {
    width: 154px;
    padding: 10px 0 10px 0;
  }
}
</style>
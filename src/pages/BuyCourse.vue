<template>
  <div class="row main-row">

    <div class="col-12">
      <div class="text-1">
        Kursga yozilish!
      </div>
    </div>

    <div class="row d-flex justify-content-md-center">
      <div class="col-12 col-md-9">
        <div class="select-div">
          <select aria-label="Default select example" class="form-select">
            <option selected>Lavia Android Developer</option>
            <option value="1">Lavia IOS developer</option>
            <option value="2">Lavia Frontend developer</option>
            <option value="3">Lavia Backend developer</option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-2 d-flex justify-content-center justify-content-md-start">
        <div class="button-div text-center mt-3">
          <button>To’lash</button>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="col-12 col-lg-11">

        <div class="row ps-4 ps-xl-0">
          <div class="col-12 col-md-6 col-xl-3 mt-4 mt-md-5">
            <div class="card-course text-center">
              <div class="title">Boshlanish vaqti:</div>
              <div class="title-name">Noyabr</div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mt-md-5">
            <div class="card-course text-center m-3">
              <div class="title">Kurs nomi:</div>
              <div class="title-name">Lavia android developer</div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mt-xl-5">
            <div class="card-course text-center m-3">
              <div class="title">narxi:</div>
              <div class="title-name">1 000 000 so’m</div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-xl-3 mt-xl-5">
            <div class="card-course text-center m-3">
              <div class="title">Qolgan joylar:</div>
              <div class="title-name">12</div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="col-12">
      <div class="text-2 ps-4 ps-md-3 ms-md-3 ps-xl-4 mt-xl-5">
        <span class="dark-text">Kurs haqida ma’lumot:</span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
        luctus venenatis, lectus magna fringilla urna, porttitor
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyCourse",
}
</script>

<style scoped>
.main-row {
  background-color: white;
}

.text-1 {
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 41px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 96px;
}

.select-div {
  margin-top: 176px;
  padding: 0 18px;
}

select {
  border-radius: 4px;
  height: 44px;
  border-color: #FFBE48;
  font-size: 20px;
  font-weight: 400;
  background-image: url("../assets/images/buy-course/Vector.svg")
}

button {
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #FFBE48;
  font-size: 18px;
  padding: 5px 30px;
}

.card-course {
  border: 1px solid #FFBE48;
  border-radius: 15px;
  max-width: 364px;
  margin: 20px auto !important;
}

.title {
  font-size: 24px;
  font-weight: 600;
  line-height: 58px;
  margin-top: 38px;
}

.title-name {
  font-size: 24px;
  font-weight: 400;
  line-height: 58px;
  padding-bottom: 46px;
}

.dark-text {
  color: black;
}

.text-2 {
  font-size: 17px;
  font-weight: 400;
  line-height: 34px;
  color: #727272;
  margin-bottom: 125px;
}

@media only screen and (min-width: 768px) {
  .select-div {
    margin-top: 126px;
    padding: 0 18px;
  }

  button {
    height: 44px;
    margin-top: 110px;
  }
}

@media only screen and (min-width: 1200px) {
  .text-1 {
    font-size: 51px;
    margin-top: 120px;
  }

  button {
    width: 150px;
  }

  .title {
    font-size: 19px;
    margin-top: 10px;
  }

  .title-name {
    font-size: 18px;
    line-height: 18px;
    padding-bottom: 26px;
  }

  .text-2 {
    font-size: 19px;
    margin-bottom: 20vh;
  }
}

@media only screen and (min-width: 1400px) {
  .text-1 {
    margin-top: 112px;
  }

  .title {
    font-size: 24px;
    margin-top: 38px;
  }

  .title-name {
    font-size: 24px;
    line-height: 58px;
    padding-bottom: 46px;
  }

  .text-2 {
    font-size: 20px;
    margin-bottom: 20vh;
    max-width: 900px;
  }

  button {
    width: 200px;
  }
}

</style>
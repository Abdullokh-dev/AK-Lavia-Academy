<template>
  <div class="row">

    <div class="col-12 col-lg-3 p-0">
      <div class="image-box"></div>
    </div>

    <div class="col-12 col-lg-9">
      <div class="col-12 d-xxl-flex justify-content-xxl-center" data-aos="fade-down" data-aos-delay="300">
        <div class="text-1">Xush kelibsiz!</div>
      </div>

      <div class="col-12 d-xxl-flex justify-content-xxl-center" data-aos="fade-down" data-aos-delay="450">
        <div class="text-2">Ro’yxatdan o’tish</div>
      </div>

      <div class="col-12 text-center input-box mt-5 d-xxl-flex justify-content-xxl-center" data-aos="fade-right">
        <input placeholder="Abdullokh Khamzaev" type="text">
      </div>

      <div class="col-12 text-center input-box mt-4 d-xxl-flex justify-content-xxl-center" data-aos="fade-left">
        <input placeholder="(91) _ _ _-_ _-_ _" type="text">
      </div>

      <div class="col-12 text-center input-box mt-4 d-xxl-flex justify-content-xxl-center" data-aos="fade-right">
        <input placeholder="**********" type="text">
      </div>

      <div class="col-12 mt-4 input-box text-center" data-aos="fade-left">
        <div class="btn-box">
          <button> Ro’yxatdan o’tish</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>
.image-box {
  background-image: url("../assets/images/register/img_1.png");
  height: 220px;
  width: 100%;
  background-size: cover;
}

.text-1 {
  margin-top: 67px;
  text-align: center;
  color: black;
  font-size: 21px;
  font-weight: 500;
  line-height: 24px;
}

.text-2 {
  color: black;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 15px;
}

input {
  width: 100%;
  max-width: 660px;
  border: none;
  background-color: #dadada;
  border-radius: 3px;
  height: 43px;
  padding-left: 11px;
  font-size: 13px;
}

button {
  border: none;
  border-radius: 8px;
  background-color: #6C63FF;
  color: white;
  font-size: 15px;
  line-height: 24px;
  width: 100% !important;
  max-width: 660px;
  height: 43px;
}

.btn-box {
  width: 100%;
}

@media only screen and (min-width: 992px) {
  .image-box {
    background-image: url("../assets/images/register/img.png");
    height: 100vh;
  }

  .text-1 {
    font-size: 28px;
    text-align: left;
    padding-left: 50px;
    margin-top: 200px;
  }

  .text-2 {
    text-align: left;
    padding-left: 50px;
  }

  .input-box {
    display: flex;
    margin-left: 50px;
  }

  input {
    height: 79px;
    padding-left: 35px;
    border-radius: 8px;
    font-size: 21px;
  }

  button {
    font-size: 25px;
    height: 79px;
  }

  .btn-box {
    text-align: left;
    width: 100%;
  }
}

@media only screen and (min-width: 1400px) {
  input {
    border-radius: 15px;
    padding-left: 21px;
  }

  button {
    font-size: 25px;
    height: 79px;
    border-radius: 15px;
  }

  .btn-box {
    text-align: center;
    width: 100%;
  }
}
</style>
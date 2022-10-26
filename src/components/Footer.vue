<template>
  <div class="row">
    <div class="col">
      
      <!-- Top side -->
      <div class="row top-side">
        <div class="col-12 col-lg-5">
          <div class="text-top-side" data-aos="fade-right" data-aos-delay="200">
            Imkoniyatni qo’ldan <br> boy bermang !
            <span class="narrow ps-5">
              <img src="../assets/images/narrow1.png">
            </span>
          </div>
        </div>
        <div class="col" data-aos="fade-right" data-aos-delay="400">
          <button class="send-btn" @click="register">Ro’yxatdan o’tish</button>
        </div>
        <div class="col d-flex align-items-end d-none d-lg-block" data-aos="fade-left" data-aos-delay="400">
          <img src="../assets/images/footer-img.png" width="350" alt="#" class="image">
        </div>
      </div>

      <!-- Bottom side -->
      <div class="row bottom-side">

        <div class="col-12 col-md-8 col-xl-3" data-aos="fade-in" data-aos-delay="400">
          <div class="col d-flex justify-content-center mt-5">
            <img src="../assets/images/logo.png" alt="#" class="logo">
          </div>
          <div class="col d-flex justify-content-center mt-3 name ms-3">
            Laviya Academy
          </div>
          <div class="mt-3 text2 text-center">
            O‘zbekistonda hali bunaqasi bo‘lmagan!
          </div>
          <div class="icons-group d-flex justify-content-center mt-4">
            <img src="../assets/images/google.png" alt="#">
            <img src="../assets/images/twitter.png" alt="#">
            <img src="../assets/images/instagram.png" alt="#">
            <img src="../assets/images/linkedin.png" alt="#">
          </div>
        </div>

        <div class="col-6 col-md-4 col-xl-2 d-flex justify-content-md-start mt-0 p-0 ps-sm-2 mt-md-5" data-aos="fade-in" data-aos-delay="550">
          <ul class="service-ul">
            <li class="list-name">Services</li>
            <li>Documentation</li>
            <li>Design</li>
            <li>Themes</li>
            <li>Illustrations</li>
          </ul>
        </div>

        <div class="col-6 col-md-4 col-xl-2 d-md-flex justify-content-md-center p-0 pe-sm-2 mt-xl-5" data-aos="fade-in" data-aos-delay="700">
          <ul class="ul2">
            <li class="list-name">Company</li>
            <li @click="about">About</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>

        <div class="col-4 col-xl-2 d-md-flex justify-content-md-center p-0 ps-sm-2 mt-xl-5" data-aos="fade-in" data-aos-delay="850">
          <ul>
            <li class="list-name">Job Info</li>
            <li>Select</li>
            <li>Services</li>
            <li>Payment</li>
          </ul>
        </div>

        <div class="col p-0 pe-sm-2 mt-xl-5 d-md-flex justify-content-md-center" data-aos="fade-in" data-aos-delay="1000">
          <ul class="ul2">
            <li class="list-name">Contact</li>
            <li>Call : 99 982 34 43</li>
            <li>Email : laviya@gmail.com</li>
            <li>Address : Toshkent shahar</li>
          </ul>
        </div>

        <div class="hr-box">
          <hr>
        </div>

        <div class="copyright text-center">
          Copyright©laviya.academy
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    register() {
      this.$router.push('/register')
    },
    about() {
      this.$router.push('/academy')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');
.top-side {
  background-color: #2A2A31;
}

.bottom-side {
  background-color: #111116;
}

.text-top-side {
  font-family: 'Merienda', cursive;
  font-size: 30px;
  color: white;
  margin: 60px 0 47px 0;
  float: right;
}

.send-btn {
  width: 180px;
  height: 55px;
  border: none;
  border-radius: 10px;
  background-color: #FFA502;
  color: white;
  font-family: Rubik, sans-serif;
  font-weight: 500;
  box-shadow: 5px 10px 30px 0 #FFA5024D;
  margin-top: 80px;
}

.image {
  right: 30px;
  position: absolute;
  margin-top: -105px;
}

.logo {
  box-shadow: 0 0 10px 0 #FFFFFF40;
  border: none;
  border-radius: 50%;
}

.name {
  color: white;
  font-size: 25px;
  margin: auto 0;
}

.text2 {
  color: #6F6F76;
  font-size: 20px;
  float: start;
}

.icons-group > img{
  margin: 6px;
}

ul {
  list-style: none;
  margin-top: 40px;
}

.list-name {
  color: #F2F2F2;
  font-weight: 700;
  font-size: 18px;
}

li {
  line-height: 40px;
  color: #B3B3B3;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
}

.hr-box {
  padding: 0 7vw 0 7vw;
}

hr {
  color: white;
  height: 10px;
}

.copyright {
  color: #B2B2B2;
  margin: 0 0 40px 0;
  font-size: 16px;
  font-weight: 300;
}

@media only screen and (max-width: 767px) {
  .ul2 {
    text-align: right;
    padding-right: 32px;
  }
}

@media only screen and (min-width: 768px) {
  .service-ul {
    margin-left: -8px;
  }
}

@media only screen and (max-width: 991px) {
  .top-side {
    text-align: center;
  }

  .text-top-side {
    float: none;
    margin: 25px auto 0 auto;
  }

  .send-btn {
    margin: 40px 0;
  }

  .narrow {
    display: none;
  }

}

</style>
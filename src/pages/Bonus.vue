<template>
  <div class="row text-center">
    <div class="col-12 text-1" data-aos="fade-down"> LAVIA ACADEMY BONUS</div>
    <div class="col-12 text-2" data-aos="zoom-in">
      Siz test yechish orqali xohlagan kursingizga 50% li chegirmaga ega bo’lishingiz mumkin!
    </div>
    <div class="col-12 text-3" data-aos="zoom-out">Test orqali omadingizni sinab ko’ring!</div>
    <div class="col-12 text-3" data-aos="zoom-in"> Testni yechish uchun ro’yxatdan o’tishingiz kerak!</div>
    <div class="col">
      <div>
        <button @click="register" data-aos="fade-up"> Ro’yxatdan o’tish</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bonus",
  methods: {
    register() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.text-1 {
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  margin-top: 40px;
  color: #111116;
}

.text-2 {
  font-size: 19px;
  font-weight: 600;
  line-height: 40px;
  margin-top: 40px;
  color: black;
}

.text-3 {
  font-size: 19px;
  font-weight: 600;
  line-height: 40px;
  color: #686666;
  margin-top: 40px;
}

button {
  background-color: black;
  color: white;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  padding: 10px 20px;
  margin-top: 40px;
}

@media only screen and (min-width: 768px) {
  .text-1 {
    font-size: 40px;
    line-height: 90px;
    margin-top: 120px;
  }

  .text-2, .text-3 {
    font-size: 30px;
  }

  button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 7px;
    font-size: 18px;
    padding: 10px 20px;
    margin-top: 40px;
  }
}

@media only screen and (min-width: 1200px) {
  .text-1 {
    font-size: 51px;
    margin-top: 40px;
  }

  .text-2, .text-3 {
    font-size: 35px;
    margin-top: 60px;
  }

  button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 7px;
    font-size: 18px;
    padding: 10px 20px;
    margin-top: 40px;
  }
}
</style>
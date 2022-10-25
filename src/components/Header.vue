<template>
  <div class="row header-row" :style="{background: color}">
    <div class="col-3 col-md d-flex justify-content-center ms-sm-0 ms-lg-5">
      <img src="../assets/images/logo.png" height="67" width="67" alt="logo">
    </div>
    <div class="col-7 d-none d-md-block lists-group">
      <span class="list-item">Bosh sahifa</span>
      <span class="list-item">Qabul</span>
      <span class="list-item">Akademiya</span>
    </div>
    <div class="col d-none d-md-block d-flex justify-content-end me-sm-0 me-lg-5">
      <button class="register-button"> Ro'yxatdan o'tish </button>
    </div>
    <div class="col d-block d-md-none d-flex justify-content-end">
      <button class="show-btn" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <img src="../assets/images/bar-chart.png">
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="lists-group lists-toggled">
          <li><span class="list-item">Bosh sahifa</span></li>
          <li><span class="list-item">Qabul</span></li>
          <li><span class="list-item">Akademiya</span></li>
          <hr />
          <li><span class="list-item">Ro’yxatdan o’tish</span></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    color: {
      type: String,
      required: false,
      default: "linear-gradient(90.63deg, #FFFBF4 7.63%, #F7FCF9 100%)"
    }
  }
}
</script>

<style scoped>
* {
  font-weight: 400;
  font-size: 18px;
  color: #111116;
}

.header-row {
  padding: 37px 5vw 37px 0;
}

.lists-group {
  margin-top: 20px;
  float: left;
}

.list-item {
  text-align: start;
  padding: 0 18px;
}

.register-button {
  width: 162px;
  height: 64px;
  border: none;
  box-shadow: 0 -10px 20px 0 #585867 inset;
  background-color: #111116;
  border-radius: 15px;
  font-weight: 500;
  font-size: 16px;
  color: white;
}

.show-btn {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: -20px;
}

.lists-toggled {
  list-style: none;
  float: right;
}

.lists-toggled > li {
  line-height: 35px;
}

</style>
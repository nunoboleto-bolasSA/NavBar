<template>
  <div class="navigation">
    <ul>
      <li class="list active">
        <a href="#">
          <span class="icon"
            ><ion-icon name="checkmark-circle-outline"></ion-icon
          ></span>
          <span class="title">teste</span>
        </a>
      </li>
      <li class="list">
        <a href="#">
          <span class="icon"
            ><ion-icon name="checkmark-circle-outline"></ion-icon
          ></span>
          <span class="title">teste</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: "add", title: "teste" },
        { icon: "add", title: "teste" },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  min-height: 100vh;
  background: white;
}
.navigation {
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  width: 200px;
  border-radius: 10px;
  box-sizing: initial;
  border-left: 5px solid orange;
  background: orange;
  transition: 0.5%;
}
.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 5px;
  padding-top: 40px;
}
.navigation ul li {
  position: relative;
  list-style: none;
  width: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.navigation ul li.active {
  background: white;
}
.navigation ul li.active a {
  color: #333;
}
.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: white;
}
.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 70px;
  text-align: center;
}
.navigation ul li a .icon ion-icon {
  font-size: 1.5em;
}
.navigation ul li a .title {
  position: relative;
  display: block;
  padding-left: 5px;
  height: 60px;
  line-height: 60px;
  white-space: normal;
}
</style>
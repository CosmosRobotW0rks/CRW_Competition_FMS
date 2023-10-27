<template>
  <div>
    <h1 class="main-heading">COSMOS ROBOT WORKS 29 EKİM ROBOT YARIŞMASI</h1>
    <div class="team" style="background: none">
      <p class="headline">Takım Adı</p>
      <p class="headline">Puan</p>
      <p class="headline">Sıralama</p>
    </div>
    <div v-for="item in results" class="team">
      <p>{{ item.team_name }}</p>
      <p>{{ item.point }}</p>
      <p>{{ item.rank }}</p>
    </div>
  </div>
  <img class="crw-logo" src="./crwLogo.png" />
</template>

<script setup lang="ts">
const results: any = ref();

try {
  const { data } = await useFetch("/api/getData");
  results.value = data.value?.data;
} catch (err) {
  console.log(err);
}

const refresh = async () => {
  const { data } = await useFetch("/api/getData");
  results.value = data.value?.data;
  console.log(results.value);
};

setInterval(() => refresh(), 5000);
</script>

<style>
* {
  font-family: "Comic Sans", Courier, monospace;
  margin: 0;
  padding: 0;
}

body {
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  height: 100%;
}
.main-heading {
  margin: 50px auto;
  text-align: center;
  font-size: 60px;
}

.team {
  background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
  width: 80%;
  margin: 10px auto;
  display: flex;
  align-content: space-between;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-items: space-between;
  height: 60px;
  border-radius: 10px;
}
.team p {
  font-size: 2rem;
  padding: 1rem;
  text-align: left;
  width: 33%;
  height: 50%;
  color: #1b053d;
}
.headline {
  background: linear-gradient(90deg, #0008ff 0%, #8e10e8 100%);
  color: white !important;
  border: 5px solid #000000;
  margin-bottom: 20px;
  border-radius: 15px;
}
.crw-logo {
  position: absolute;
  right: 10px;
  bottom: -25px;
  width: 15%;
  aspect-ratio: 1/1;
  filter: drop-shadow(0px 0px 20px #ff1212);
}
</style>

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
    <img class="crw-logo" src="./public/crwLogo.png" />
  </div>
</template>

<script setup lang="ts">
const results: any = ref();

const { data } = await useFetch("/api/getData");
results.value = data.value?.data;

setInterval(async () => {
  const { data } = await useFetch("/api/getData");
  results.value = data.value?.data;
}, 5000);
</script>

<style>
* {
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  padding: 0;
}

body {
  background-color: #000000;
  color: #ffffff;
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
  text-align: center;
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
  right: 15px;
  bottom: 15px;
  width: 15%;
  aspect-ratio: 1/1;
  filter: drop-shadow(0px 0px 20px #ff1212);
}
</style>

<template>
  <div id="map" style="height: 250px; width: 100%;"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

onMounted(() => {
  const position = [47.486188238478015, 19.05822854439719];

  const map = L.map("map").setView(position, 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  }).addTo(map);

  //közösségi narancs marker githubról
  const orangeIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  L.marker(position, { icon: orangeIcon }).addTo(map);
});
</script>

<style scoped>
#map {
  border-radius: 12px;
}
</style>

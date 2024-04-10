<template>
  <div class="w-full grid grid-cols-2 gap-2 min-h-[50vh]">
    <p class="text-6xl block font-bold h-full content-center leading-snug ml-8">
      Cooperativa<br /><span>Illenca</span
      ><Icon class="ml-2" name="fluent-emoji:fire"></Icon>
    </p>
  </div>

  <div class="grid grid-cols-2 gap-4">
    <LandingCard :data="plantes"></LandingCard>
    <LandingCard :data="jardins" reverse></LandingCard>
    <Card class="col-span-2"> <p>Preus</p> </Card>
  </div>
</template>

<script setup>
const plantes = {
  title: "Plantes",
  description:
    "La millor varietat de plantes amb la millor qualitat illenca possible.",
  action: "Totes les plantes",
  image: "planta.jpeg",
};

const jardins = {
  title: "Jardins",
  description:
    "Com quedarien les teves plantes en un jardi real ? Descobreix-ho visitant la nostra amplia gama de jardins d’exibició",
  action: "Visita els jardins",
  image: "jardi.jpeg",
};
</script>

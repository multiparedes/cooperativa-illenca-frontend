<template>
  <p>Plantes !</p>
  <div class="grid grid-cols-3 gap-4">
    <Card v-for="plant in plants" class="grid grid-cols-2 gap-x-2">
      <div class="relative">
        <img src="/placeholder.avif" alt="" />
        <div class="absolute top-1 left-1">
          <Icon name="fluent:calendar-empty-20-regular" size="36px" />
          <p
            class="text-xs font-bold z-2"
            style="
              position: absolute;
              top: 55%;
              left: 50%;
              transform: translate(-50%, -50%);
            "
          >
            {{ plant.diesCreixement }}
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-2 justify-around item-center">
        <p class="flex justify-between font-bold">
          {{ plant.nom }}
        </p>

        <p class="italic text-slate-800">
          {{ plant.tipus }} de {{ plant.temporada.toLowerCase() }}
        </p>

        <p class="text-ellipsis">{{ plant.descripcio }}</p>

        <div class="ml-auto">
          <span class="px-2 py-1 bg-primary-200 rounded-lg"
            >{{ plant.preu_planta }} €</span
          >
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup>
const plants = ref([]);

async function fetchData() {
  plants.value = [
    {
      nom: "Rosa",
      tipus: "Flor",
      temporada: "Primavera",
      diesCreixement: 30,
      preu_planta: 5,
      descripcio:
        "La rosa es una planta muy popular en jardinería debido a su belleza y fragancia.",
    },
    {
      nom: "Tomàquet",
      tipus: "Hortaliza",
      temporada: "Verano",
      diesCreixement: 60,
      preu_planta: 3,
      descripcio:
        "El tomate es una planta anual que se cultiva ampliamente en todo el mundo para su uso culinario.",
    },
    {
      nom: "Lavanda",
      tipus: "Aromática",
      temporada: "Primavera",
      diesCreixement: 90,
      preu_planta: 4,
      descripcio:
        "La lavanda es una planta aromática muy apreciada por su fragancia y sus propiedades relajantes.",
    },
    {
      nom: "Girasol",
      tipus: "Flor",
      temporada: "Verano",
      diesCreixement: 90,
      preu_planta: 2,
      descripcio:
        "El girasol es una planta ornamental conocida por seguir la trayectoria del sol durante el día.",
    },
    {
      nom: "Pimiento",
      tipus: "Hortaliza",
      temporada: "Verano",
      diesCreixement: 75,
      preu_planta: 3,
      descripcio:
        "El pimiento es una hortaliza sabrosa y nutritiva que se utiliza en una amplia variedad de platos.",
    },
    {
      nom: "Orquídea",
      tipus: "Flor",
      temporada: "Invierno",
      diesCreixement: 120,
      preu_planta: 8,
      descripcio:
        "La orquídea es una flor exótica conocida por su belleza y diversidad de colores.",
    },
    {
      nom: "Cebollas",
      tipus: "Hortaliza",
      temporada: "Otoño",
      diesCreixement: 150,
      preu_planta: 2,
      descripcio:
        "Las cebollas son vegetales populares en la cocina debido a su sabor distintivo y versatilidad.",
    },
    {
      nom: "Menta",
      tipus: "Aromática",
      temporada: "Primavera",
      diesCreixement: 60,
      preu_planta: 4,
      descripcio:
        "La menta es una planta aromática utilizada en infusiones, cócteles y como condimento en platos dulces y salados.",
    },
    {
      nom: "Caléndula",
      tipus: "Flor",
      temporada: "Primavera",
      diesCreixement: 45,
      preu_planta: 3,
      descripcio:
        "La caléndula es una flor que se utiliza tanto con fines ornamentales como medicinales debido a sus propiedades antiinflamatorias y cicatrizantes.",
    },
    {
      nom: "Geranio",
      tipus: "Flor",
      temporada: "Primavera",
      diesCreixement: 60,
      preu_planta: 3,
      descripcio:
        "Los geranios son plantas muy comunes en jardinería, conocidas por sus brillantes y coloridas flores.",
    },
    {
      nom: "Pepino",
      tipus: "Hortaliza",
      temporada: "Verano",
      diesCreixement: 50,
      preu_planta: 2,
      descripcio:
        "El pepino es una hortaliza refrescante y baja en calorías, ideal para ensaladas y platos frescos.",
    },
    {
      nom: "Jazmín",
      tipus: "Flor",
      temporada: "Primavera",
      diesCreixement: 90,
      preu_planta: 6,
      descripcio:
        "El jazmín es una planta trepadora conocida por su fragancia dulce y sus flores blancas o amarillas.",
    },
    {
      nom: "Espinaca",
      tipus: "Hortaliza",
      temporada: "Otoño",
      diesCreixement: 40,
      preu_planta: 1,
      descripcio:
        "Las espinacas son vegetales de hoja verde ricos en nutrientes y versátiles en la cocina.",
    },
    {
      nom: "Hierbabuena",
      tipus: "Aromática",
      temporada: "Primavera",
      diesCreixement: 45,
      preu_planta: 3,
      descripcio:
        "La hierbabuena es una planta aromática similar a la menta, utilizada en infusiones y cócteles.",
    },
    {
      nom: "Tulipán",
      tipus: "Flor",
      temporada: "Primavera",
      diesCreixement: 60,
      preu_planta: 4,
      descripcio:
        "El tulipán es una flor bulbosa muy apreciada en jardinería por su variedad de colores y formas.",
    },
  ];
}

fetchData();
</script>

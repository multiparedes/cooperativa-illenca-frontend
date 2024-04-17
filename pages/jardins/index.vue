<template>
  <p>Els nostres jardins !</p>
  <div class="grid grid-cols-3 gap-4">
    <Card v-for="jardi in jardins" class="grid grid-cols-2 gap-x-2">
      <div class="relative">
        <img src="/placeholder.avif" alt="" />
      </div>
      <div class="flex flex-col gap-2 justify-around item-center">
        <p class="flex justify-between font-bold">
          {{ jardi.nom }}
        </p>

        <p class="italic text-slate-800">
          {{ jardi.carrer }} nº {{ jardi.numeroCarrer }}
        </p>

        <p class="text-ellipsis">Superfície : {{ jardi.superficie }} m&sup2;</p>

        <div class="ml-auto">
          <span
            class="px-2 py-1 rounded-lg"
            :class="jardi.isPublic ? 'bg-primary-200' : 'bg-red-200'"
            >{{ jardi.isPublic ? "Públic" : "Privat" }}</span
          >
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup>
const jardins = ref([]);

async function fetchData() {
  jardins.value = [
    {
      nom: "Can Pep",
      carrer: "Carretera Valldemossa",
      numeroCarrer: 23,
      isPublic: 1,
      superficie: 30000,
    },
    {
      nom: "Son Marti",
      carrer: "Carretera de Bunyola",
      numeroCarrer: 69,
      isPublic: 1,
      superficie: 25400,
    },
    {
      nom: "Don Silvio",
      carrer: "Carrer Major",
      numeroCarrer: 22,
      isPublic: 1,
      superficie: 44000,
    },
    {
      nom: "Can Betlet",
      carrer: "Carretera Gran",
      numeroCarrer: 14,
      isPublic: 1,
      superficie: 8461,
    },
    {
      nom: "Son Espases",
      carrer: "Carrer Igual",
      numeroCarrer: 3,
      isPublic: 1,
      superficie: 3000,
    },
    {
      nom: "Miramar",
      carrer: "Carretera Intermitent",
      numeroCarrer: 145,
      isPublic: 0,
      superficie: 3200,
    },
    {
      nom: "son llatzer",
      carrer: "Carrer de na Baldufa",
      numeroCarrer: 37,
      isPublic: 1,
      superficie: 95231,
    },
  ];
}

fetchData();
</script>

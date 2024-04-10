<template>
  <Card class="mb-4 flex justify-between shadow-lg items-center h-fit">
    <NuxtLink
      to="/"
      class="text-xl font-bold tracking-wider uppercase inline-flex items-center px-2 py-1 cursor-pointer hover:bg-primary-100 rounded-md transition-colors"
    >
      <p class="hidden md:block">
        Cooperativa
        <span class="text-primary-400">Illenca</span>
      </p>
    </NuxtLink>

    <div class="flex gap-1">
      <Button variant="link">Contacte</Button>
      <Button variant="link">Reserves</Button>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Button variant="link">Informació</Button>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Plantes</MenubarItem>
            <MenubarItem>Jardins</MenubarItem>
            <MenubarItem>Preus</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  </Card>
</template>

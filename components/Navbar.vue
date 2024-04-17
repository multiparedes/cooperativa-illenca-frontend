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

    <div class="flex gap-1 items-center">
      <Button variant="link">Contacte</Button>
      <Button variant="link">Reserves</Button>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Button variant="link">Informació</Button>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <nuxt-link to="/plantes">Plantes</nuxt-link>
            </MenubarItem>
            <MenubarItem>
              <nuxt-link to="/jardins">Jardins</nuxt-link>
            </MenubarItem>
            <MenubarItem>Preus</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <span
        class="grid place-content-center cursor-pointer hover:bg-primary-500 rounded-full transition-colors hover:text-white aspect-square px-2 py-1"
      >
        <Icon variant="link" name="fluent:person-32-filled" />
      </span>
    </div>
  </Card>
</template>

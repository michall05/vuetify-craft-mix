<template>
	<v-navigation-drawer
        expand-on-hover
        rail
    >
    	<v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmail.com"
          ></v-list-item>
        </v-list>

        <v-divider/>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-image" title="Image Gallery" value="gallery"></v-list-item>
          <v-list-item prepend-icon="mdi-dialpad" title="Grayscale Gallery" value="grayscale"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
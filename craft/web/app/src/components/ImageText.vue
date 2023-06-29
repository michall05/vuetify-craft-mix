<template>
  <v-card class="d-flex">
    <v-img :src="imageSrc" :alt="altText" height="200" cover></v-img>
    <v-card-text>{{ text }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: 'https://placehold.co/600x400',
      altText: 'Image description',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
  },
}
</script>
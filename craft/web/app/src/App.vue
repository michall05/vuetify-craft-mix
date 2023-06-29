<template>
  <v-layout>
      <v-main>
        <Card/>
        <Accordion/>
        <ImageText/>
      </v-main>
  </v-layout>
</template>

<script setup>
  import Card from './components/Card.vue';
  import Accordion from './components/Accordion.vue';
  import ImageText from './components/ImageText.vue';
</script>
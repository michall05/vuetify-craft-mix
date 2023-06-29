<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      {{ text }}
    </v-card-text>
    <v-card-actions>
      <v-btn :href="primaryButtonLink" color="primary">{{ primaryButtonLabel }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: 'Card Title',
      text: 'This is the content of the card.',
      primaryButtonLabel: 'Action 1',
      primaryButtonLink: 'https://google.com/'
    }
  }
}
</script>

<style>
/* Add custom styles here if needed */
</style>

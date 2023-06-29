<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item, index) in items"
      :key="index"
    >
      <v-expansion-panel-title>
        {{item.title}}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{item.content}}
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>

</template>

<script>
export default {
  data() {
    return {
      activeItem: null,
      items: [
        {
          title: 'Accordion Item 1',
          content: 'Content for Accordion Item 1',
        },
        {
          title: 'Accordion Item 2',
          content: 'Content for Accordion Item 2',
        },
        {
          title: 'Accordion Item 3',
          content: 'Content for Accordion Item 3',
        },
      ],
    };
  }
};
</script>


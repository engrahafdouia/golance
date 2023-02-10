<template>

  <!-- simple marquee text -->
<marquee-text>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
</marquee-text>

<!-- short text need more duplicates -->
<marquee-text :repeat="10">
  Short text =(
</marquee-text>

<!-- slow duration -->
<marquee-text :duration="30">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
</marquee-text>
</template>

<script setup>
import MarqueeText from 'vue-marquee-text-component';
</script>

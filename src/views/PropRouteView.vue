<template>
  <h1>Prop route page</h1>
  <p>{{ this.$route.params }}</p>
  <p>{{ id }}</p>
</template>

<script>
export default {
  name: "PropRouteView",
  props: {
    id: Number,
  },
};
</script>

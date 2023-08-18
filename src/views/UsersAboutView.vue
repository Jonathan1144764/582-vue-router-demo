<template>
  <h1>This is the about page for {{ $route.params.username }}</h1>
  <p>{{ username }}</p>
  <p>{{ student }}</p>
</template>

<script>
export default {
  name: "UsersAboutView",
  props: {
    username: String,
    student: Object,
  },
};
</script>

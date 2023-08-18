<template>
  <h1>Demo page</h1>
  <DemoPost />
  <DemoPostBefore />
</template>

<script>
import DemoPost from "../components/DemoPost.vue";
import DemoPostBefore from "../components/DemoPostBefore.vue";

export default {
  name: "DemoView",
  components: {
    DemoPost,
    DemoPostBefore,
  },
};
</script>

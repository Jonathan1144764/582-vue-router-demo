<template>
  <div class="post">
    <h1>DEMO POST BEOFRE</h1>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       post: null,
//       error: null,
//     };
//   },
//   beforeRouteEnter(to, from, next) {
//     getPost(to.params.id, (err, post) => {
//       // `setData` is a method defined below
//       next((vm) => vm.setData(err, post));
//     });
//   },
//   // when route changes and this component is already rendered,
//   // the logic will be slightly different.
//   async beforeRouteUpdate(to, from) {
//     this.post = null;
//     try {
//       this.post = await getPost(to.params.id);
//     } catch (error) {
//       this.error = error.toString();
//     }
//   },
//   methods: {
//     setData(error, post) {
//       if (error) {
//         this.error = error;
//       } else {
//         this.post = post;
//       }
//     },
//   },
// };
</script>

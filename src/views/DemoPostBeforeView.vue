<template>
  <div class="post">
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
  <!-- <DemoPost /> -->
</template>

<script>
// import DemoPost from "../components/DemoPost.vue";

function getPost(id, cb) {
  fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => response.json())
    .then((json) => {
      cb(null, json);
    })
    .catch((error) => {
      cb(error, null);
    });
}
export default {
  data() {
    return {
      post: null,
      error: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      getPost(to.params.id, (err, post) => {
        vm.setData(err, post);
      });
    });
    // getPost(to.params.id, (err, post) => {
    //   // `setData` is a method defined below
    //   next((vm) => vm.setData(err, post));
    // });
  },
  // when route changes and this component is already rendered,
  // the logic will be slightly different.
  async beforeRouteUpdate(to, from) {
    this.post = null;
    console.log(from);
    try {
      this.post = await getPost(to.params.id);
    } catch (error) {
      this.error = error.toString();
    }
  },
  methods: {
    setData(error, post) {
      if (error) {
        this.error = error;
      } else {
        this.post = post;
      }
    },
  },
  //   components: {
  //     DemoPost,
  //   },
};
</script>

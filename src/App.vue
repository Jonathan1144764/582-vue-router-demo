<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/demo/3">Demo</router-link> |
    <router-link to="/before/3">Demo Before</router-link> |
    <button>User</button>
    <button @click="propView">Prop</button>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          id: 1,
          name: "Peter",
          age: 3000,
        },
        {
          id: 2,
          name: "Charisse",
          age: 5000,
        },
        {
          id: 3,
          name: "Maryam",
          age: 100000,
        },
        {
          id: 4,
          name: "Frankenstein",
          age: 3000,
        },
        {
          id: 5,
          name: "Juliana",
          age: 5000,
        },
        {
          id: 6,
          name: "Edgardo",
          age: 100000,
        },
      ],
    };
  },
  methods: {
    propView() {
      return this.$router.push({ name: "prop", params: { id: 1 } });
    },
    // navToUser() {
    //   let r = Math.floor(Math.random() * this.students.length);
    //   return this.$router.push({
    //     name: "user",
    //     params: { username: this.students[r].name },
    //   });
    // },
    // navToUser() {
    //   for (let student of this.students) {
    //     return this.$router.push({
    //       name: "user",
    //       params: { username: student.name, id: student.id },
    //     });
    //   }
    // },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

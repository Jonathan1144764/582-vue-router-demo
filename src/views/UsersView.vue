<template>
  <h1>This is the user page for {{ showCurStudent.name }}</h1>
  <button @click="about" :student="student">About user</button>
  <button @click="navigate">Back home</button>
  <!-- <p>{{ students }}</p> -->
  <p>{{ showCurStudent }}</p>
  <router-view></router-view>
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
  props: {
    student: Object,
  },
  computed: {
    showCurStudent() {
      for (let student of this.students) {
        if (student.id == this.$route.params.id) return student;
      }
      return "Student not found";
    },
  },
  methods: {
    navigate() {
      this.$router.push({ name: "home" });
    },
    about() {
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].id == this.$route.params.id) {
          this.$router.push({
            name: "aboutuser",
            params: { username: this.students[i].name },
          });
        }
      }
      // this.$router.push({
      //   name: "aboutuser",
      //   params: { username: this.$route.params.username },
      // });
    },
    // showCurStudent() {
    //   for (let i = 0; i < this.students.length; i++) {
    //     if (this.$route.params.id == this.students[i].id) {
    //       let user = this.students[i];
    //       return user;
    //     }
    //   }
    // },
  },
};
</script>

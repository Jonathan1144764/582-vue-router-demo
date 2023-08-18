<template>
  <div class="about">
    <h1>This is an about page for {{ $route.params.username }}</h1>
    <div v-for="student of students" :key="student.id">
      <button :data-clickid="student.id" :student="student" @click="toUser">
        To {{ student.name }}
      </button>
    </div>
  </div>
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
    toUser(event) {
      let id = event.target.dataset.clickid;
      return this.$router.push({ name: "user", params: { id: id } });
    },
  },
};
</script>

<template>
  <div>home page {{ username }}</div>
  <input
    v-model="username"
    maxlength="100"
  >
  <button @click="checkUsername">
    Check
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: 'Home',
  props: {
    user: {
      type: Object, // should we create User type?
      required: false,
      default: null,
    }
  },
  data() {
    return {
      username: '',
    };
  },
  computed: {
    // ...mapState(["user"]),
  },
  methods: {
    // ...mapActions(["getUser"]),
    checkUsername() {
      console.log('username is ', this.username);
    }
  },
})
</script>

<style scoped>
</style>

<template>
  <div>home page {{ username }}</div>
  <input
    v-model="username"
    maxlength="100"
  >
  <button @click="checkUsername">
    Check
  </button>

  <div v-if="user">
    {{ user }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { default as github } from '../lib/services/github';

// import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: 'Home',
  data() {
    return {
      username: '',
      user: null,
    };
  },
  computed: {
    // ...mapState(["user"]),
  },
  methods: {
    // ...mapActions(["getUser"]),
    checkUsername: async function () {
      const response = await github(this.username);
      if (response)  {
        delete response.repos; // too long for test
        this.user = response;
      }
    }
  },
})
</script>

<style scoped>
</style>

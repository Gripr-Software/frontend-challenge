<template>
  <v-container class="h-100">
    <div
      v-if="isLoggedIn"
      class="h-100 d-flex flex-column align-center justify-center"
    >
      Logged in as:
      <div class="d-flex align-center">
        <v-avatar color="primary" class="mr-2">
          <span class="white--text">{{ user.initials }}</span>
        </v-avatar>
        <template v-if="user.fullName">
          {{ user.fullName }}
        </template>
        <template v-else>
          {{ user.email }}
        </template>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters("auth", {
      isLoggedIn: "isLoggedIn",
    }),
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>

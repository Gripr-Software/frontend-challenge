<template>
  <v-app>
    <AppLoginDialog
      v-model="loginDialog"
      @submit:form="onLogin"
    ></AppLoginDialog>
    <v-app-bar app>
      <template v-if="isLoggedIn">
        <v-avatar color="primary">
          <span class="white--text">{{ user.initials }}</span>
        </v-avatar>
      </template>

      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        @click="loginDialog = true"
        v-if="!isLoggedIn"
        :loading="isLoggingIn"
      >
        Login
      </v-btn>
      <v-btn color="error" v-else @click="onLogout">
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      loginDialog: false,
    };
  },
  computed: {
    ...mapGetters("auth", {
      isLoggedIn: "isLoggedIn",
    }),
    ...mapState("auth", {
      isLoggingIn: (state) => state.isLoggingIn,
      user: (state) => state.user,
    }),
  },
  methods: {
    onLogin(args) {
      this.$store.dispatch("auth/login", args);
    },
    onLogout() {
      this.$store.dispatch("auth/logout");
    },
  },
  mounted() {
    this.$store.dispatch("auth/getUser");
  },
};
</script>

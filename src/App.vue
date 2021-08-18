<template>
  <v-app>
    <AppLoginDialog
      v-model="loginDialog"
      @submit:form="onLogin"
    ></AppLoginDialog>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
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

    <v-main> </v-main>
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

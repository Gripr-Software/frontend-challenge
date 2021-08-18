<template>
  <v-app>
    <AppLoginDialog
      v-model="loginDialog"
      @submit:form="onLogin"
    ></AppLoginDialog>
    <v-app-bar app>
      <v-app-bar-title>Title</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-if="!isLoggedIn">
        <v-btn
          color="primary"
          @click="loginDialog = true"
          :loading="isLoggingIn"
        >
          Login
        </v-btn>
      </template>
      <template v-else>
        <v-menu bottom min-width="200px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="primary" size="48">
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar color="primary">
                  <span class="white--text text-h5">{{ user.initials }}</span>
                </v-avatar>
                <h3>{{ user.fullName }}</h3>
                <p class="text-caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text color="error" @click="onLogout">
                  Logout
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </template>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab :to="{ name: 'home' }">Home</v-tab>
          <v-tab :to="{ name: 'tasks' }">Tasks</v-tab>
        </v-tabs>
      </template>
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

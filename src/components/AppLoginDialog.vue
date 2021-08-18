<template>
  <v-dialog v-model="localDialog" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form
            ref="loginForm"
            v-model="login.valid"
            v-on:submit.prevent
            @submit="onLogin"
          >
            <v-row>
              <v-col>
                <v-text-field
                  label="Email"
                  v-model="login.email.value"
                  :rules="login.email.rules"
                  outlined
                  dense
                  required
                  autofocus
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="Password"
                  v-model="login.password.value"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="login.password.rules"
                  :type="showPassword ? 'text' : 'password'"
                  outlined
                  dense
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="localDialog = false">
          Cancel
        </v-btn>
        <v-btn color="primary" @click="onLogin">
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
  },
  model: {
    prop: "dialog",
    event: "dialog:change",
  },
  computed: {
    localDialog: {
      get() {
        return this.dialog;
      },
      set(value) {
        this.$emit("dialog:change", value);
      },
    },
  },
  data() {
    return {
      showPassword: false,
      login: {
        valid: false,
        email: {
          value: "",
          rules: [
            (v) => !!v || "Email is required",
            (v) => (v && !!v.trim()) || "Email is required",
          ],
        },
        password: {
          value: "",
          rules: [(v) => !!v || "Password is required"],
        },
      },
    };
  },
  methods: {
    onLogin() {
      const valid = this.$refs.loginForm.validate();
      if (valid) {
        const data = {
          email: this.login.email.value,
          password: this.login.password.value,
        };
        this.$emit("submit:form", data);
        //this.$refs.loginForm.reset();
        this.localDialog = false;
      }
    },
  },
};
</script>

<style></style>



<template>
  <v-form id="login">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            outlined
            class="blue--text"
            prepend-icon="email"
            label="Email"
            name="email"
            v-model="email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-sm-12">
          <v-text-field
            outlined
            :type="passwordType"
            prepend-icon="vpn_key"
            label="Password"
            name="password"
            v-model="password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-sm-1" />
        <v-col class="col-sm-4">
          <v-btn class="text-xs-center" v-on:click="login()">Login</v-btn>
        </v-col>
        <v-col>
          <v-btn text @click="togglePasswordVisibility()">show/hide password</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      passwordType: "password"
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    async login() {
      var payload = {
        email: this.email,
        password: this.password
      };
      await this.$store
        .dispatch("login", payload)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
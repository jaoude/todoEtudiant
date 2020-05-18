<template>
  <v-form id="signup" class="transform: scale(0.875)">
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
        <v-col class="col-sm-12">
          <v-text-field
            outlined
            :type="passwordType"
            prepend-icon="vpn_key"
            label="confirm Password"
            name="confirmPassword"
            v-model="confirmPassword"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-sm-1" />
        <v-col class="col-sm-4">
          <v-btn class="text-xs-center" v-on:click="register()">Register</v-btn>
        </v-col>
        <v-col>
          <v-btn text @click="togglePasswordVisibility()">show/hide password</v-btn>
        </v-col>
      </v-row>
      {{email}}
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    register() {
      let payload = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
      this.$store
        .dispatch("register", payload)
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
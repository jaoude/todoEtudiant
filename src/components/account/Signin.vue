<template>
  <v-form id="login">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            outlined
            :rules="isEmailValid()"
            class="blue--text"
            prepend-icon="email"
            label="Email"
            name="email"
            v-model="input.email"
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
            v-model="input.password"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-sm-1" />
        <v-col class="col-sm-4">
          <v-btn
            class="text-xs-center"
            :disabled="isEmailValid && input.password == ''"
            v-on:click="login()"
          >Login</v-btn>
        </v-col>
        <v-col>
          <v-btn text @click="togglePasswordVisibility()">show/hide password</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: ""
      },
      passwordType: "password"
    };
  },
  methods: {
    ...mapActions(["login"]),
    togglePasswordVisibility() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    isEmailValid: function() {
      return this.input.email == ""
        ? [true]
        : this.$emailRegex.test(this.input.email)
        ? [true]
        : ["Invalid Email"];
    },
    async login() {
      if (this.input.email != "" && this.input.password != "") {
        alert();
        var payload = {
          email: this.input.email,
          password: this.input.password
        };
        await this.$store.dispatch("login", payload);

        alert(this.input.email);
      } else {
        alert("A email and password must be present");
        console.log("A email and password must be present");
      }
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
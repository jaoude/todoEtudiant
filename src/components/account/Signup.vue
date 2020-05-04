<template>
  <v-form id="login" class="transform: scale(0.875)">
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
        <v-col class="col-sm-12">
          <v-text-field
            outlined
            :type="passwordType"
            prepend-icon="vpn_key"
            label="confirm Password"
            name="confirmPassword"
            v-model="input.confirmPassword"
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
      {{input.email}}
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      input: {
        email: "",
        password: "",
        confirmPassword: ""
      },
      passwordType: "password"
    };
  },
  methods: {
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
    register() {
      if (
        this.input.email != "" &&
        this.input.confirmEmail != "" &&
        this.input.password != ""
      ) {
        if (!(this.input.email === this.input.confirmEmail)) {
          alert("Password and confirm password should match");
        }
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
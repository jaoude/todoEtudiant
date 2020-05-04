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
            v-model="input.password"
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
      {{input.email}}
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Login",
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
    login() {
      if (this.input.email != "" && this.input.password != "") {
        if (
          this.input.email == this.$parent.mockAccount.email &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          alert("The email and / or password is incorrect");
          console.log("The email and / or password is incorrect");
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
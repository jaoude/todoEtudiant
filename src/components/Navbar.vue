<template>
  <nav>
    <v-toolbar>
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light">todo</span>
        <span>ETUDIANT</span>
      </v-toolbar-title>
      <router-link to="/home" tag="button">
        <v-btn text class="white">
          <v-icon>home</v-icon>
          <span class="text-none">Home</span>
        </v-btn>
      </router-link>
      <router-link to="/about" tag="button">
        <v-btn text class="white">
          <v-icon>info</v-icon>
          <span class="text-none">About</span>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <span v-show="this.$store.getters.isLoggedIn">{{this.$store.state.userName}}</span>
      <router-link v-if="!this.$store.getters.isLoggedIn" to="/account/signin" tag="button">
        <v-btn text class="white">
          <span class="text-none">Sign In</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </router-link>
      <router-link v-if="!this.$store.getters.isLoggedIn" to="/account/signup" tag="button">
        <v-btn text class="white">
          <span class="text-none">Sign Up</span>
          <v-icon>add</v-icon>
        </v-btn>
      </router-link>
      <router-link v-if="this.$store.getters.isLoggedIn" to="/home" tag="button">
        <v-btn text class="white" @click="logout">
          <span class="text-none">Sign Out</span>
          <v-icon>power_settings_new</v-icon>
        </v-btn>
      </router-link>

      <v-btn icon href="https://www.facebook.com/usj.edu.lb/videos/890474227787534/">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
      </v-btn>
      <v-btn icon href="https://twitter.com/usjliban?lang=en">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/home");
      });
    }
  }
};
</script> 
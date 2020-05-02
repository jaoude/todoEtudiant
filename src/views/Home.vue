<template>
<div class="home">
  <h1>Home Page</h1>
    <div class="icons">
    <font-awesome-icon icon="user"/>
    <font-awesome-icon icon="envelope"/>
    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
  </div>
    <v-btn text x-small class="pink white--text">
       <font-awesome-icon v-bind:icon="{ prefix: 'fab', iconName: 'facebook' }"/>
    </v-btn>
    <v-btn text x-small class="blue  white--text">
        <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
    </v-btn>
</div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
};
</script>

<style scoped>
blue {
  color:#08a0e9
}
</style>

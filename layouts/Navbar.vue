<template>
  <v-app>
    <v-app-bar fixed app color="primary">
      <img @click="goToHome" src="Logo.png" style="width: 5rem; cursor: pointer" />
      <v-spacer />
      <v-btn
        rounded
        text
        @click="goToProfile"
        style="font-size: medium"
        class="white--text"
        >Profile</v-btn
      >
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
};
</script>

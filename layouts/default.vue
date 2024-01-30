<template>
  <v-app>
    <v-app-bar fixed app color="#FFE194">
      <v-app-bar-nav-icon @click.native.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img @click="goToHome" src="Logo.png" style="width: 5rem; cursor: pointer" />
      <v-spacer />
      <v-btn
        rounded
        text
        @click="goToProfile"
        style="font-size: medium"
        class="black--text"
        >Profile</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="goToHome">Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="goToProfile">Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
      :style="{ marginLeft: drawer ? '90px' : '0' }"
      style="background-color: #faf1e4"
    >
      <v-container>
        <div @click="closeDrawerOnOutsideClick">
          <!-- Your main content goes here -->
          <Navbar />
          <Nuxt />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    goToHome() {
      // นำทางไปที่หน้า Home
      // ตัวอย่าง: this.$router.push('/home');
    },
    goToProfile() {
      // นำทางไปที่หน้า Profile
      // ตัวอย่าง: this.$router.push('/profile');
    },
    closeDrawerOnOutsideClick() {
      if (this.drawer) {
        this.drawer = false;
      }
    },
  },
};
</script>

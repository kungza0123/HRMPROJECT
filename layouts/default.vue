<template>
  <v-app>
    <v-app-bar fixed app color="#FFE194">
      <v-app-bar-nav-icon @click.native.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <img @click="goToHome" src="Logo.png" style="width: 5rem; cursor: pointer" /> -->
      <img class="d-flex justify-center" src="@/Img/8.ส้มชูมือถือ.png" alt="Vue.js Logo" style="max-width: 100%; max-height: 100%;" @click="goToHome" />
      <v-spacer />
      <v-btn rounded text @click="goToLogout" style="font-size: medium" class="red--textlogout-btn" color="red"
        >Logout</v-btn
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
            <v-icon>mdi-account-minus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="goToresign">พนักงานลาออก</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-chart-areaspline-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="goTograph">report garp</v-list-item-title>
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
      this.$router.push("./document_view_docsystem");
      this.drawer = false;
    },
    goToresign() {
      // นำทางไปที่หน้า Home
      // ตัวอย่าง: this.$router.push('/home');
      this.$router.push("./document_view_docsystem");
      this.drawer = false;
    },
    goTograph() {
      // นำทางไปที่หน้า Home
      // ตัวอย่าง: this.$router.push('/home');
      this.$router.push("./document_view_docsystem");
      this.drawer = false;
    },
    goToLogout() {
      // นำทางไปที่หน้า Profile
      // ตัวอย่าง: this.$router.push('/profile');
      this.$router.push("/login");
    },
    closeDrawerOnOutsideClick() {
      if (this.drawer) {
        this.drawer = false;
      }
    },
  },
};
</script>
<style>
.red--textlogout-btn:hover {
  background-color: red !important;
  color: white !important;
}
</style>

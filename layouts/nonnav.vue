<template>
    <v-app>
      
  
     
  
      <v-main
        :style="{ marginLeft: drawer ? '90px' : '0' }"
        style="background-color: #FFE194"
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
  
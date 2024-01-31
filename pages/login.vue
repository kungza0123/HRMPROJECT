<template>
  <v-row class="text-center d-flex align-center justify-center">
    <v-col cols="12" sm="8" md="6">
    <div class="centero">
     <v-card >
        <div class="container">
          <img class="d-flex justify-center" src="@/assets/logo.png" alt="Vue.js Logo" />
          <img class="d-flex justify-center" src="@/assets/logo.png" alt="Vue.js Logo" />
        </div>

        <v-card-title class="headline justify-center">
          <div>
            <h3>LOGIN</h3>
          </div>
        </v-card-title>
        <v-card-text>
          <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent>
              <v-text-field
                v-model="Username"
                label="Username"
                :rules="UsernameRules"
              ></v-text-field>

              <v-text-field
                v-model="Password"
                label="Password"
                :rules="PasswordRules"
              ></v-text-field>

              <v-btn
                type="submit"
                block
                class="mt-2"
                to="./document/document_view_docsystem"
                >Login</v-btn
              >
            </v-form>
          </v-sheet>
        </v-card-text>
        <v-card-actions> </v-card-actions>
      </v-card>
    
    </div>
     
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "nonnav",
  data: () => ({
    Username: "",
    UsernameRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "Usernsme is required.";
      },
    ],
    Password: "",
    PasswordRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Password is required.";
      },
    ],
  }),

  methods: () => ({
    submit() {},
  }),
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  
}

img {
  width: 200px;
  /* ปรับขนาดของรูปภาพตามต้องการ */
  height: auto;
}
.centero{
  position: absolute;
   top: 20%;
  width: 45%; 
  
}
</style>

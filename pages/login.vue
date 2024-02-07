<template>
  <div class="container">
    <v-card class="mx-auto pa-15 pb-8" elevation="8" max-width="555" rounded="lg">
      <div class="centero">
        <img class="d-flex justify-center" src="@/Img/S16.png" alt="Vue.js Logo" />
      </div>

      <v-card-title class="headline justify-center">
        <div>
          <h3>LOGIN</h3>
        </div>
      </v-card-title>
      <v-card-text>
        <v-sheet width="auto" class="mx-auto">
          <v-form fast-fail @submit.prevent>
            <v-text-field
              v-model="Username"
              label="ชื่อผู้ใช้"
              :rules="UsernameRules"
              prepend-inner-icon="mdi-account"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="Password"
              label="รหัสผ่าน"
              :rules="PasswordRules"
              :append-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              prepend-inner-icon="mdi-lock-outline"
              outlined
              @click:append="togglePasswordVisibility"
            ></v-text-field>
            <v-btn
              type="submit"
              block
              class="mt-2"
              to="./document/document_view_docsystem"
            >Login</v-btn>
          </v-form>
        </v-sheet>
      </v-card-text>
      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "nonnav",
  methods: {
    togglePasswordVisibility() {
      this.visible = !this.visible;
    },
  },
  data: () => ({
    Username: "",
    UsernameRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "กรุณากรอกชื่อผู้ใช้";
      },
    ],
    Password: "",
    PasswordRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "กรุณากรอกรหัสผ่าน";
      },
    ],
    visible: false,
  }),
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 200px;
  height: auto;
}

.centero {
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-btn:hover {
  background-color: #FFB319 !important;
  color: white !important;
}
</style>

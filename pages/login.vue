<template>
  <v-row class="text-center d-flex align-center justify-center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <div class="container">
          <img class="d-flex justify-center" src="@/assets/logo.png" alt="Vue.js Logo" />
          <img class="d-flex justify-center" src="@/assets/logo.png" alt="Vue.js Logo" />
        </div>

        <v-card-title class="headline justify-center"> LOGIN </v-card-title>
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

              <v-btn type="submit" block class="mt-2" to="./document/document_view_docsystem">Login</v-btn>
            </v-form>
          </v-sheet>
        </v-card-text>
        <v-card-actions> </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
export default {
  //   mixins: [validationMixin],

  // validations: {
  //   Username: { required, maxLength: maxLength(10) },
  //   email: { required, email },
  //   select: { required },
  // },

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

  // UsernameErrors () {
  //       const errors = []
  //       if (!this.$v.Usernamename.$dirty) return errors
  //       // !this.$v.Usernamename.maxLength && errors.push('Name must be at most 10 characters long')
  //       !this.$v.Usernamename.required && errors.push('Username is required.')
  //       return errors
  //     },
  // PasswordErrors () {
  //       const errors = []
  //       if (!this.$v.Password.$dirty) return errors
  //       // !this.$v.Password.maxLength && errors.push('Name must be at most 10 characters long')
  //       !this.$v.Password.required && errors.push('Password is required.')
  //       return errors
  //     },

  methods: () => ({
    submit(){
      
    }
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
</style>

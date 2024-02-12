<template>
  <div class="container">
    <v-card class="mx-auto pa-15 pb-8" elevation="8" max-width="555" rounded="lg">
      <div class="centero">
        <img
          class="d-flex justify-center shake"
          src="@/Img/S16.png"
          alt="Vue.js Logo"
          @mouseenter="startShaking"
          @mouseleave="stopShaking"
        />
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
              v-model="form.Username"
              label="ชื่อผู้ใช้"
              :rules="form.UsernameRules"
              prepend-inner-icon="mdi-account"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="form.Password"
              label="รหัสผ่าน"
              :rules="form.PasswordRules"
              :append-icon="form.visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="form.visible ? 'text' : 'password'"
              density="compact"
              prepend-inner-icon="mdi-lock-outline"
              outlined
              @click:append="togglePasswordVisibility"
            ></v-text-field>
            <v-btn type="submit" block class="mt-2" @click="submit">Login</v-btn>
          </v-form>
        </v-sheet>
      </v-card-text>
      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  layout: "nonnav",

  data: () => ({
    form: {
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
    },
  }),
  methods: {
    togglePasswordVisibility() {
      this.form.visible = !this.form.visible;
    },
    startShaking() {
      this.$el.querySelector(".shake").classList.add("shaking");
    },
    stopShaking() {
      this.$el.querySelector(".shake").classList.remove("shaking");
    },
    submit() {
      if (this.form.Username != "" && this.form.Password != "") {
        this.$axios
          .get("/login", {
            params: {
              USERNAME: this.form.Username,
              PASSWORD: this.form.Password,
            },
          })
          .then((data) => {
            if (data.data.response.length == 0) {
              // alert("Username or password wrong ");
              this.$swal.fire({
                icon: "error",
                title: "Oops...",
                text: "ชื่อผู้ใช้หรือรหัสผ่านผิด!",
              });
              this.form.Username="",
              this.form.Password=""
            } else {
              var user = JSON.stringify(data.data.response);
              console.log(user);
              window.sessionStorage.setItem("user", user);
              this.$router.push({
                path: "/document_view_docsystem",
              });
            }
          })
          .catch((error) => {
            // alert(error);
            this.$swal.fire({
                icon: "error",
                title: "Oops...",
                text: "ไม่สามารถเข้าสู่ระบบได้",
              });
              console.log("dfgdffdgdfgdf");
          });
          
      } else {
        // alert("Please fill out the information correctly.");
        this.$swal.fire({
          title: "กรุณาใส่ชื่อผูใช้และรหัสผ่าน",
          text: "That thing is still around?",
          icon: "info",
        });
      }
    },
  },
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
  background-color: #ffb319 !important;
  color: white !important;
}
.shake {
  transition: transform 0.1s ease-in-out;
}

.shaking {
  transform: translateX(-5px); /* Adjust the distance as needed */
}
</style>

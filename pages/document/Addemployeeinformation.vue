<template>
  <div>
    <div class="text-center d-flex align-center justify-center">
      <h2>เพิ่มข้อมูลพนักงาน</h2>
    </div>

    
      <v-card class="mx-auto" elevation="8" max-width="mx-auto" rounded="lg">
      <v-sheet width="auto" class="mx-auto">
        <v-form>
         <v-card-text >
        <v-container>
          <v-row>
            <h3 class="mr-9 mt-6">รหัสพนักงาน :</h3>
            <v-flex xs12 sm6 md3>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="iduser"
                  label="รหัสพนักงาน"
                  outlined
                ></v-text-field>
              </v-col>
            </v-flex>
            <h3 class="mt-6">วันที่เริ่มทำงาน :</h3>
            <v-flex xs12 sm6 md3>
              <v-col cols="12" sm="6" md="6">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="datef"
                      label="วันที่เริ่มทำงาน"
                      outlined
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>

                  <v-date-picker v-model="datef" @input="menu1 = false"></v-date-picker>
                </v-menu>
              </v-col>
            </v-flex>
          </v-row>

          <v-row>
            <h3 class="mr-10 mt-6">ชื่อ-นามสกุล :</h3>
            <v-col cols="12" sm="6" md="1">
              <v-select :items="items" label="" dense outlined></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="name" label="ชื่อ" outlined></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="lastname" label="นามสกุล" outlined></v-text-field>
            </v-col>
            <h3 class="mr-8 mt-6">ชื่อเล่น :</h3>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="nickname" label="ชื่อเล่น" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <h3 class="mr-1 mt-6">Name-Lastname :</h3>
            <v-col cols="12" sm="6" md="1">
              <v-select :items="itemss" label="" dense outlined></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="first" label="First Name" outlined></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="last" label="Last Name" outlined></v-text-field>
            </v-col>
            <h3 class="mr-1 mt-6">Nickname :</h3>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="nickname1" label="Nickname" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <h3 class="mr-1 mt-6">วันเกิด :</h3>
            <v-col cols="12" sm="" md="1">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateb"
                    label="วันเกิด"
                    outlined
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>

                <v-date-picker v-model="dateb" @input="menu2 = false"></v-date-picker>
              </v-menu>
            </v-col>
            <h3 class="mr-1 mt-6">บัตรประชาชน :</h3>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="information"
                label="บัตรประชาชน"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <h3 class="mr-1 mt-6">แผนก :</h3>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="department" label="แผนก" outlined></v-text-field>
            </v-col>
            <h3 class="mr-1 mt-6">ฝ่าย :</h3>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="department1" label="ฝ่าย" outlined></v-text-field>
            </v-col>
            <h3 class="mr-1 mt-6">ตำแหน่ง :</h3>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="department2" label="ตำแหน่ง" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <h3 class="mr-1 mt-6">Email :</h3>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="email" label="Email" outlined></v-text-field>
            </v-col>
            <h3 class="mr-1 mt-6">เบอร์ :</h3>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="phone" label="เบอร์โทรศัพท์" outlined></v-text-field>
            </v-col>
            <h3 class="mr-5 mt-6">สถานะ :</h3>
            <v-col cols="12" sm="6" md="2">
              <v-select :items="itemsss" label="" dense outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <h3 class="mr-10 mt-6">ไฟล์ภาพ :</h3>
            <v-col cols="12" sm="6" md="2">
              <v-file-input
                v-model="file"
                label="Choose a file"
                outlined
                accept="image/*"
                @change="uploadFile"
              ></v-file-input>
            </v-col>
          </v-row>
          <center>
          <v-btn class="mr-4" @click="submit" tile color="success"> บันทึก </v-btn>
          <v-btn class="mr-4" @click="cancel" tile color="error"> ยกเลิก </v-btn>
          </center>
          
        </v-container>
        
        
        </v-card-text>
        
        
        
        </v-form>
       
       
      </v-sheet>
       
      </v-card>
   
  </div>
</template>
<script>
export default {
  data: () => ({
    iduser: "",
    datef: "",

    name: "",
    lastname: "",
    first: "",
    last: "",
    nickname: "",
    nickname1: "",
    dateb: "",
    information: "",
    department: "",
    department1: "",
    department2: "",
    email: "",
    phone: "",
    select: null,
    items: ["นาย", "นาง", "นางสาว"],
    itemss: ["Mr", "Miss"],
    itemsss: ["กำลังทำงาน", "ลาออก", "ทดลองงาน"],
    checkbox: false,
    menu1: false,
    menu2: false,
    file: null,
  }),

  uploadFile() {
    // ทำการอัปโหลดไฟล์ที่ถูกเลือก
    console.log("File uploaded:", this.file);
  },
  components: {
    // Import the necessary components
    "v-menu": () => import("vuetify/lib/components/VMenu/VMenu"),
    "v-date-picker": () => import("vuetify/lib/components/VDatePicker/VDatePicker"),
  },
  methods: {
    uploadFile() {},
    submit() {
      this.$swal({
        title: "คุณต้องการบันทึกการเปลี่ยนแปลงหรือไม่?",
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "บันทึก",
        denyButtonText: `ยกเลิก`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire("บันทึกสำเร็จ!", "", "success");

          // เปลี่ยนหน้าไปยัง OtherPage
          this.$router.push({ name: "document-document_view_docsystem" });
        }
      });
    },
    cancel(){
      this.$router.push({ name: "document-document_view_docsystem" });
    },
  },
};
</script>

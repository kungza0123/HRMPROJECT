<template>
  <div>
    <div class="text-center d-flex align-center justify-center">
      <h3>เพิ่มข้อมูลพนักงาน</h3>
    </div>
    <v-card>
      <v-form>
        <v-container>
          <v-row>

            <v-flex xs12 sm6 md3>
              <v-col cols="12" sm="6">

                <v-text-field v-model="iduser" label="รหัสพนักงาน" outlined></v-text-field>
              </v-col>

            </v-flex>

            <v-flex xs12 sm6 md3>
              <v-col cols="12" sm="6" md="6">

                <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                  offset-y>
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="datef" label="วันที่เริ่มทำงาน" outlined readonly v-on="on"></v-text-field>
                  </template>

                  <v-date-picker v-model="datef" @input="menu1 = false"></v-date-picker>
                </v-menu>

              </v-col>

            </v-flex>

          </v-row>

          <v-row>

            <v-col cols="12" sm="6" md="1">
              <v-select :items="items" label="" dense outlined></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="name" label="ชื่อ" outlined></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="lastname" label="นามสกุล" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="1">
              <v-select :items="itemss" label="" dense outlined></v-select>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="first" label="First Name" outlined></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="last" label="Last Name" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="nickname" label="ชื่อเล่น" outlined></v-text-field>
            </v-col>

            <v-col cols="12" sm="" md="1">

              <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                offset-y>
                <template v-slot:activator="{ on }">
                  <v-text-field v-model="dateb" label="วันเกิด" outlined readonly v-on="on"></v-text-field>
                </template>

                <v-date-picker v-model="dateb" @input="menu2 = false"></v-date-picker>
              </v-menu>

            </v-col>


            <v-col cols="12" sm="6" md="3">
              <v-text-field v-model="information" label="บัตรประชาชน" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="department" label="แผนก" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="department1" label="ฝ่าย" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="department2" label="ตำแหน่ง" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="email" label="Email" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="2">
              <v-text-field v-model="phone" label="เบอร์โทรศัพท์" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="2">
              <v-select :items="itemsss" label="" dense outlined></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="2">
              <v-file-input v-model="file" label="Choose a file" outlined accept="image/*"
                @change="uploadFile"></v-file-input>
            </v-col>
          </v-row>
          <v-btn class="mr-4" @click="submit">
            submit
          </v-btn>
        </v-container>
      </v-form>
    </v-card>

  </div>
</template>
<script>

export default {


  data: () => ({
    iduser:"",
    datef:"",

    name: "",
    lastname:"",
    first:"",
    last:"",
    nickname:"",
    dateb:"",
    information:"",
    department:"",
    department1:"",
    department2:"",
    email: "",
    phone:"",
    select: null,
    items: ['นาย', 'นาง', 'นางสาว'],
    itemss: ['Mr', 'Miss'],
    itemsss: ['กำลังทำงาน', 'ลาออก', 'ทดลองงาน'],
    checkbox: false,
    menu1: false,
    menu2: false,
    file: null,
  }),

  uploadFile() {
    // ทำการอัปโหลดไฟล์ที่ถูกเลือก
    console.log('File uploaded:', this.file);
  },
  components: {
    // Import the necessary components
    'v-menu': () => import('vuetify/lib/components/VMenu/VMenu'),
    'v-date-picker': () => import('vuetify/lib/components/VDatePicker/VDatePicker'),
  },
  methods: {
    uploadFile(){

    },
    submit() {
      this.$swal({
        title: "คุณต้องการบันทึกการเปลี่ยนแปลงหรือไม่?",
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "บันทึก",
        denyButtonText: `ยกเลิก`
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire("บันทึกสำเร็จ!", "", "success");

          // เปลี่ยนหน้าไปยัง OtherPage
          this.$router.push({ name: 'document-document_view_docsystem' });
        } 
      });
    },
  },
};
</script>

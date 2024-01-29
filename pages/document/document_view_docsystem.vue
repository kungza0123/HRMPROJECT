<template>
  <div>
    <div class="text-center d-flex align-center justify-center">
      <h3>พนักงานทั้งหมด</h3>
    </div>
    <v-card>
      <v-flex xs12 sm6 md3>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        
      </v-flex>
      
      <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "รหัสพนักงาน",
          align: "start",
          filterable: false,
          value: "iduser",
        },
        { text: "ชื่อ-นามสกุล", value: "namelastname" },
        { text: "เพศ", value: "gender" },
        { text: "Email", value: "email" },
        { text: "แผนก ", value: "department" },
        { text: "ฝ่าย ", value: "department1" },
        { text: "ตำแหน่ง ", value: "department2" },
        { text: "สถานะ ", value: "department3" },
        { text: "edit-delete", value: "" },
      ],
      desserts: [
        {
          iduser: "6250",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6251",
          namelastname: "Gwendoline Sylvestre",
          gender: "ชาย",
          email: "GwendolineSylvestre@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6252",
          namelastname: "Everard",
          gender: "ชาย",
          email: "Everard@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6253",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6254",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6255",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6256",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6257",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6258",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6259",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6260",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6261",
          namelastname: "Frozen Yogurt",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
        {
          iduser: "6262",
          namelastname: "kungzaza",
          gender: "ชาย",
          email: "HARAJUKU@GMAIL.COM",
          department: "sdadasdasd",
          department1: "sdasdasdasd",
          department2: "adasdasdasdas",
          department3: "กำลังทำงาน",
        },
      ],
    };
  },
};
</script>

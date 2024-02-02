<template>
  <div>
    <div class="text-center d-flex align-center justify-center">
      <h2>พนักงานทั้งหมด</h2>
    </div>
    <v-form>
    <v-card>
      <v-col>
        <v-flex xs12 sm6 md3>
          <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
              hide-details></v-text-field>
          </v-card-title>
        </v-flex>

        <v-row align="center" justify="space-around">
          <span />
          <v-btn tile color="success" to="./Addemployeeinformation">
            <v-icon left>mdi-pencil</v-icon>
            เพิ่มข้อมูล
          </v-btn>
        </v-row>
      </v-col>

      <v-data-table :headers="headers" :items="desserts" :search="search">
        <template v-slot:item="{ item, index }">
          <tr :style="{ backgroundColor: index % 2 === 0 ? '#FFE194' : '#faf1e4' }">
            <td v-for="(value, key) in item" :key="key">
              <span v-if="key === 'department3'" :class="{
                'blinking-text': value === 'กำลังทำงาน',
                'green-text': value === 'กำลังทำงาน',
              }">{{ value }}</span>
              <span v-else>{{ value }}</span>
            </td>
            <td>
              <v-btn icon to="./Addemployeeinformation">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>

              <v-btn icon @click="deleteEmployee(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>

              <v-btn icon to="./Addemployeeinformation">
                <v-icon>mdi-information</v-icon>
              </v-btn>

              <v-btn icon to="./Addemployeeinformation">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
    
    
    </v-form>
    
  </div>
</template>
<script>
import Swal from 'sweetalert2';
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
        { text: "เครื่องมือ", value: "action", sortable: false },
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
      methods: {
        // editEmployee(employee) {
        //   // ดำเนินการที่คุณต้องการเมื่อคลิกที่ mdi-pencil
        //   this.$router.push("/login");
        //   console.log("Edit employee:", employee);
        // },
        deleteEmployee(employee) {
          console.log('Deleting employee:', employee);
          Swal.fire({
            title: 'คุณแน่ใจหรือไม่?',
            text: 'คุณต้องการลบข้อมูลพนักงานนี้หรือไม่?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'ใช่, ลบเลย!',
            cancelButtonText: 'ยกเลิก',
          }).then((result) => {
            if (result.isConfirmed) {
              // ทำงานเมื่อผู้ใช้กด Confirm
              this.desserts = this.desserts.filter((e) => e.iduser !== employee.iduser);
              Swal.fire('ลบข้อมูลเรียบร้อย!', '', 'success');
            }
          });
        },
      },
    };
  },
};
</script>
<style scoped>
.blinking-text {
  animation: blink 1s infinite;
  /* Adjust animation duration as needed */
}

.green-text {
  color: green;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>

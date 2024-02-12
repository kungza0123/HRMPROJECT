<template>
  <div>
    <div class="text-center d-flex align-center justify-center">
      <h2>พนักงานทั้งหมด</h2>
    </div>

    <v-card>
      <v-form>
        <v-col>
          <v-flex xs12 sm6 md3>
          <v-row>
            <v-col>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="ค้นหา"
                outlined
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                v-model="filter"
                :items="filterOptions"
                label="ฟิลเตอร์"
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-flex>

          <v-row align="center" justify="space-around">
            <span />
            <v-btn tile color="success" to="./Addemployeeinformation">
              <v-icon left>mdi-pencil</v-icon>
              เพิ่มข้อมูล
            </v-btn>
          </v-row>
        </v-col>

        <v-data-table
          class="headers"
          :headers="headers"
          :items="desserts"
          :search="search"
        >
          <template v-slot:item="{ item, index }">
            <tr :style="{ backgroundColor: index % 2 === 0 ? '#faf1e4' : '#FFE194' }">
              <td v-for="(value, key) in item" :key="key">
                <span
                  v-if="key === 'status'"
                  :class="{
                    'blinking-text': value === 'Active',
                    'green-text': value === 'Active',
                  }"
                  >{{ value }}</span
                >
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
      </v-form>
    </v-card>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      search: "",
      filter: "ทั้งหมด",
      filterOptions: ["แผนก", "ฝ่าย"], // ปรับแต่งตามความเหมาะสม
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
        { text: "ฝ่าย ", value: "division" },
        { text: "ตำแหน่ง ", value: "position" },
        { text: "สถานะ ", value: "status" },
        { text: "เครื่องมือ", value: "action", sortable: false },
      ],
      desserts: [
        {
          iduser: "001",
          namelastname: "John Doe",
          gender: "ชาย",
          email: "john.doe@example.com",
          department: "IT",
          division: "Development",
          position: "Software Engineer",
          status: "Active",
        },
        {
          iduser: "002",
          namelastname: "Jane Smith",
          gender: "หญิง",
          email: "jane.smith@example.com",
          department: "HR",
          division: "Recruitment",
          position: "HR Specialist",
          status: "Active",
        },
        {
          iduser: "003",
          namelastname: "Mike Johnson",
          gender: "ชาย",
          email: "mike.johnson@example.com",
          department: "Finance",
          division: "Accounting",
          position: "Financial Analyst",
          status: "Active",
        },
        {
          iduser: "004",
          namelastname: "Emily Brown",
          gender: "หญิง",
          email: "emily.brown@example.com",
          department: "Marketing",
          division: "Digital Marketing",
          position: "Marketing Specialist",
          status: "Active",
        },
        {
          iduser: "005",
          namelastname: "David Lee",
          gender: "ชาย",
          email: "david.lee@example.com",
          department: "Sales",
          division: "Sales Operations",
          position: "Sales Representative",
          status: "Active",
        },
        {
          iduser: "006",
          namelastname: "Sophie Miller",
          gender: "หญิง",
          email: "sophie.miller@example.com",
          department: "Customer Support",
          division: "Technical Support",
          position: "Support Engineer",
          status: "Active",
        },
        // ... (ต่อด้วยข้อมูลพนักงานเพิ่มเติม)
        {
          iduser: "007",
          namelastname: "Alex Turner",
          gender: "ชาย",
          email: "alex.turner@example.com",
          department: "Design",
          division: "UI/UX Design",
          position: "UI/UX Designer",
          status: "Active",
        },
      ],
      computed: {
    filteredEmployees() {
      if (this.filter === "ทั้งหมด") {
        return this.employees.filter((employee) =>
          employee.fullName.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        return this.employees.filter(
          (employee) =>
            employee.department === this.filter &&
            employee.fullName.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
      methods: {
        // editEmployee(employee) {
        //   // ดำเนินการที่คุณต้องการเมื่อคลิกที่ mdi-pencil
        //   this.$router.push("/login");
        //   console.log("Edit employee:", employee);
        // },
        deleteEmployee(employee) {
          console.log("Deleting employee:", employee);
          Swal.fire({
            title: "คุณแน่ใจหรือไม่?",
            text: "คุณต้องการลบข้อมูลพนักงานนี้หรือไม่?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "ใช่, ลบเลย!",
            cancelButtonText: "ยกเลิก",
          }).then((result) => {
            if (result.isConfirmed) {
              // ทำงานเมื่อผู้ใช้กด Confirm
              this.desserts = this.desserts.filter((e) => e.iduser !== employee.iduser);
              Swal.fire("ลบข้อมูลเรียบร้อย!", "", "success");
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
.headers {
  background-color: #ffe194;
}
::v-deep .v-data-footer {
  background-color: #ffffff;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>

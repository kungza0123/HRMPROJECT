<template>
  <v-container>
    <div class="container">
      <v-card class="mx-auto pa-15 pb-8" elevation="8" max-width="666" >
        <v-sheet width="auto" class="mx-auto">
         <h1 class="text-center">Login to Management System as</h1>
         <ul class="centero">
            <li class="ml-4">
              <a href="./login">
                <img
                  src="@/Img/4126442.png"
                  alt
                  class="img-thumbnail"
                  style="height: 180px"
                />
                <h2 class="mt-3 text-center">HR</h2>
              </a>
            </li>
            <li class="ml-4">
              <a href="./login">
                <img
                  src="@/Img/software-developer.png"
                  alt
                  class="img-thumbnail"
                  style="height: 180px"
                />
                <h2 class="mt-3 text-center">IT</h2>
              </a>
            </li>
            <li class="ml-4">
              <a href="./login">
                <img
                  src="@/Img/admin.png"
                  alt
                  class="img-thumbnail"
                  style="height: 180px"
                />
                <h2 class="mt-3 text-center">Admin</h2>
              </a>
            </li>
          </ul>
        </v-sheet>

      </v-card>
      
    </div>

    <!-- <div class="d-flex justify-center">
      <div class="pa-5">
        <v-btn rounded color="secondary" to="/login"> GOTO LOGIN </v-btn>
      </div>
    </div> -->
  </v-container>
</template>

<script>
export default {
  layout: "nonnav",
  data() {
    return {};
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
.centero {
  display: flex;
  align-items: center;
  justify-content: center;
}
.centero li {
  list-style-type: none; /* Remove bullet points */
}
.centero li a {
  text-decoration: none; /* Remove underline from links */
}
.centero li img {
  border: 2px solid #000; /* Add a 2px solid black border around the images */
  border-radius: 8px; /* Optional: Add border-radius for rounded corners */
}
</style>








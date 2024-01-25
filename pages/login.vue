<template>
    <v-row class="text-center d-flex align-center justify-center">
        <v-col cols="12" sm="8" md="6">

            <v-card>
                <div class="container">
                    <img class="d-flex justify-center" src="@/assets/logo.png" alt="Vue.js Logo" />
                </div>

                <v-card-title class="headline justify-center">
                    LOGIN
                </v-card-title>
                <v-card-text>
                    <v-sheet width="300" class="mx-auto">
                        <v-form fast-fail @submit.prevent>
                            <v-text-field v-model="Username" label="Username" :rules="UsernameRules"></v-text-field>

                            <v-text-field v-model="Password" label="Password" :rules="PasswordRules"></v-text-field>

                            <v-btn type="submit" block class="mt-2">Login</v-btn>
                        </v-form>
                    </v-sheet>

                </v-card-text>
                <v-card-actions>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
  
<script>
export default {
    data: () => ({
        Username: '',
        UsernameRules: [
            value => {
                if (value?.length > 3) return true

                return 'First name must be at least 3 characters.'
            },
        ],
        Password: '',
        PasswordRules: [
            value => {
                if (/[^0-9]/.test(value)) return true

                return 'Last name can not contain digits.'
            },
        ],
    }),
}
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
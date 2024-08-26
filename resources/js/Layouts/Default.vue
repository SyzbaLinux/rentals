<template>
    <v-app id="inspire" class="welcome">
        <v-app-bar  color="transparent" class="elevation-0">  </v-app-bar>

        <v-main>
            <v-container class="pt-10">
               <slot/>
            </v-container>
        </v-main>
    </v-app>
</template>
<style>

.welcome{
    background-image: url("/images/bg.jpg") !important;
    background-repeat: no-repeat  !important;
    background-size: cover  !important;
    background-position: center !important;
}

</style>


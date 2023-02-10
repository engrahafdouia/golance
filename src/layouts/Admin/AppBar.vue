<template>
  <v-card theme="dark">
     <v-layout>
       <v-navigation-drawer height="40vh" permanent v-model="drawer" temporary width="250"

     >


         <v-list nav dense>



           <v-list-item prepend-icon="mdi-account" >
             <v-list-item-title> {{ user.firstName }}</v-list-item-title>
             <v-list-item-title> {{ user.email }}</v-list-item-title>
             <!-- <template v-slot:append>
             <v-btn
               variant="text"
               icon="mdi-chevron-left"
               @click.stop="rail = !rail"
             ></v-btn>
           </template> -->
           </v-list-item>
         </v-list>

         <v-divider></v-divider>
         <v-card>
     <v-layout>
       <v-navigation-drawer
         class="bg-deep-blue"

         permanent
       >
         <v-list color="transparent">
           <v-list-item prepend-icon="mdi-view-dashboard" > <router-link to="/chartView">Dashboard</router-link></v-list-item>

           <!-- <v-list-item prepend-icon="mdi-view-dashboard" to="/chartView" title="Dashboard"></v-list-item> -->
           <v-list-item prepend-icon="mdi-database" > <router-link to="/productlist">Products List</router-link></v-list-item>

           <v-list-item prepend-icon="mdi-account-box" to="/userList" title="User List"  ></v-list-item>
       <!-- <v-list-item to="/about" >Rahaf Douiar</v-list-item> -->
           <v-list-item prepend-icon="mdi-gavel" title="back" to="/"></v-list-item>
           <div class="pa-2 ">
             <v-btn class="bg-purpleme text-center" block
                   rounded
                   variant="text"
                   v-if="isLoggedIn"
                   to="/"
                   @click="logout"
                 >
                   {{ $t("message.logout") }}
                 </v-btn>
                 <v-btn class="bg-purpleme text-center" block v-else variant="text" to="/login">
                   {{ $t("message.Login") }}
                 </v-btn>
           </div>
         </v-list>

         <template v-slot:append>

         </template>
       </v-navigation-drawer>
       <v-main style="height: 100vh"></v-main>
     </v-layout>
   </v-card>
         <!-- <v-list density="compact" nav>
           <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
           <v-list-item prepend-icon="mdi-account" title="ProductsList" value="account" to="/productlist"></v-list-item>
           <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
         </v-list> -->
         <!-- <v-list >
             <v-list-item  prepend-icon="mdi-view-dashboard" title=""  ><router-link to='/chartView'>Dashboard</router-link></v-list-item>
             <v-list-item  prepend-icon="mdi-account-box" title="Products List"  to="/productlist">Products List</v-list-item>
             <v-list-item  prepend-icon="mdi-gavel" title="Users List" to="/UsersList"></v-list-item>
             <v-list-item  prepend-icon="mdi-gavel" title="Back" to="/"></v-list-item>
           </v-list> -->
         <!-- <v-list color="info">
         <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" to="/chartView"></v-list-item>
         <v-list-item prepend-icon="mdi-clipboard-list" title="Products List" to="/productlist"></v-list-item>
         <v-list-item prepend-icon="mdi-plus-thick" title="Add Product" to="/addProduct"></v-list-item>
         <v-list-item prepend-icon="mdi-circle-edit-outline" to="/EditProduct" title="Edit Product"></v-list-item>
         <v-list-item prepend-icon="mdi-clipboard-list" title="Users List" to="/UsersList"></v-list-item>

         <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
         <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
         <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>
       </v-list> -->
         <!-- <v-list density="compact" nav>
           <v-list-item prepend-icon="mdi-folder" title="Dashboard" value="Dahboard"></v-list-item>
           <v-list-item prepend-icon="mdi-account-multiple" title="Products" value="shared"></v-list-item>
           <v-list-item prepend-icon="mdi-star" title="Users" value="starred"></v-list-item>
         </v-list> -->
       </v-navigation-drawer>

       <v-main style="height: 700px"></v-main>
     </v-layout>
   </v-card>

 </template>
 <script>
 import { mapState } from "pinia";
 import cart from "@/store/caret";
 import user from "@/store/user";
 import { useTheme } from "vuetify";
 export default {
   name: "SelectLocale",

   persist: true,

   setup() {
     const theme = useTheme();

     return {
       theme,
       toggleTheme: () =>
         (theme.global.name.value = theme.global.current.value.dark
           ? "light"
           : "dark"),
     };
   },
   data() {
     return {
       drawer: true,
         items: [
           { title: 'Home', icon: 'mdi-home-city' },
           { title: 'My Account', icon: 'mdi-account' },
           { title: 'Users', icon: 'mdi-account-group-outline' },
         ],
         rail: true,
       langs: ["en", "ar"],
       name: "LocaleSwitcher",

       locales: ["ar", "fr", "en"],
       itemss: ["Home", "Products", "About", "contact"],

       tab: null,
     };
   },
   computed: {
     ...mapState(cart, ["itemsCount"]),
     ...mapState(user, ["isLoggedIn", "user"]),
   },
   mounted() {
     if (sessionStorage.getItem("locale")) {
       this.$i18n.locale = sessionStorage.getItem("locale");
     } else {
       sessionStorage.setItem("locale", this.$i18n.locale);
     }
   },
   methods: {
     toggleLocale() {
       this.$i18n.locale = this.$i18n.locale === "en" ? "ar" : "en";

       this.$vuetify.locale.current =
         this.$vuetify.locale.current === "en" ? "ar" : "en";
     },
     updateLanguage() {
       sessionStorage.setItem("locale", this.$i18n.locale);
     },
   },
 };
 </script>

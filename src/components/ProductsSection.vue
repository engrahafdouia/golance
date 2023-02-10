<template>
  <section>
    <v-container>
      <h2 class="text-h4 text-center py-12">Products</h2>

      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        v-model.trim="searchvalue"
        label="Search products"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
      <v-menu transition="slide-y-reverse-transition">
        <template v-slot:activator="{ props }">
          <v-btn color="purpleme" class="ma-2" v-bind="props">
            Filter By Category
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="productFilterValue('all')">
            <v-list-item-title>All</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('smartphones')">
            <v-list-item-title>smartphones</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('laptops')">
            <v-list-item-title>laptops</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('fragrances')">
            <v-list-item-title>fragrances</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('skincare')">
            <v-list-item-title>skincare</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('groceries')">
            <v-list-item-title>groceries</v-list-item-title>
          </v-list-item>
          <v-list-item @click="productFilterValue('home-decoration')">
            <v-list-item-title>home-decoration</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- <v-btn @click="productFilterValue('all')" class="ma-8 hoveryellocolor" color="#f2f2f3">All</v-btn>
        <v-btn @click="productFilterValue('smartphones')" class="ma-8 hoveryellocolor"  color="#f2f2f3">smartphones</v-btn>
        <v-btn @click="productFilterValue('laptops')" class="ma-8 hoveryellocolor"  color="#f2f2f3">laptops</v-btn>
        <v-btn @click="productFilterValue('fragrances')" class="ma-8 hoveryellocolor"  color="#f2f2f3">fragrances</v-btn>
        <v-btn @click="productFilterValue('skincare')" class="ma-8 hoveryellocolor" color="#f2f2f3" >skincare</v-btn>
        <v-btn @click="productFilterValue('groceries')" class="ma-8 hoveryellocolor"  color="#f2f2f3">groceries</v-btn>
        <v-btn @click="productFilterValue('home-decoration')" class="ma-8 hoveryellocolor"  color="#f2f2f3">home-decoration</v-btn> -->
      <!-- <v-text-field v-model.trim="searchvalue"  label="search" class="ma-8"></v-text-field> -->
    </v-container>
  </section>
  <section>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <product-card v-bind="product">
            <v-btn
              @click="selectSingleProduct(product)"
              class="cartcolor"
              color="primary"
              variant="text"
              to="/single"
            >
              <v-icon>mdi-view</v-icon> show
            </v-btn>

            <v-card-actions>
              <v-btn
               
                rounded="pill"
                class="bg-purpleme text-right"
                @click="AddToCart(product)"
              >
                <!-- :disabled="!isLoggedIn"  -->
                Add to Cart <v-icon>mdi-cart</v-icon></v-btn
              >
            </v-card-actions>
          </product-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapActions, mapStores, mapWritableState } from "pinia";
import { useCartStore } from '@/store/Cart.js'
import { useProductStore } from "@/store/Product";
import UserStore from "@/store/user";
// import CartStore from "@/store/Cart.js";

export default {
  components: { ProductCard },
  created() {
    this.loadProducts(), this.productFilterValue("all");
    // this.searchvalue=''
  },
  data() {
    return {
      Products: this.ProductsStore,
      //searchvalue:this.searchvalue
      loaded: false,
      loading: false,
    };
  },
  computed: {
    ...mapStores(UserStore),
    ...mapStores(useProductStore),
    ...mapWritableState(useProductStore, [
      "searchvalue",
      "productFilterValue",
      "ProductsStore",
      "filteredProducts",
      "productFilterAll",
      "productFilterlaptops",
      "productFilterfragrances",
    ]),
  },

  methods: {
    // ...mapActions(useCartStore, ['AddToCart']),
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    // ...mapStores(CartStore),
    ...mapActions(useCartStore, ['AddToCart']),


    ...mapActions(useProductStore, [
      "addProducttoStore",
      "deletProductStore",
      "selectSingleProduct",
    ]),
    loadProducts() {
      this.axios("https://dummyjson.com/products").then((res) => {
        this.addProducttoStore(res.data.products),
          console.log(res.data.products);
      });
      // console.log(this.res);
    },
  },
};
</script>

<style>
.hoveryellocolor:hover,
.hoveryellocolor:focus {
  /* color:#FBDF07; */
  /* background-color: #FBDF07; */
}
</style>

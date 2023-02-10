<template>
  <section>
    <v-container>
      <h2 class="text-h4 text-center py-12">{{ $t('message.Best Seller') }}</h2>



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
          v-for="product in products"
          :key="product"
        >
        <ProductCardCopy class="set" v-bind="product"/>

            <!-- <v-btn

              class="cartcolor"
              color="primary"
              variant="text"
              to="/single"
            >
              <v-icon>mdi-view</v-icon> show
            </v-btn> -->

            <!-- <v-card-actions>
              <v-btn

                rounded="pill"
                class="bg-purpleme text-right"

              >

                Buy Now <v-icon>mdi-cart</v-icon></v-btn
              >
            </v-card-actions>
          </product-card> -->
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

import ProductCardCopy from "./ProductCardCopy.vue";



// import CartStore from "@/store/Cart.js";

export default {
  components: {  ProductCardCopy },
  created() {
    // this.searchvalue=''
  },
  data() {
    return {
      products: [

{
"id": 12,
"title": "Brown Perfume",
"description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
"price": 40,
"discountPercentage": 15.66,
"rating": 4,
"stock": 52,
"brand": "Royal_Mirage",
"category": "fragrances",
"thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
"images": [
"https://i.dummyjson.com/data/products/12/1.jpg",
"https://i.dummyjson.com/data/products/12/2.jpg",
"https://i.dummyjson.com/data/products/12/3.png",
"https://i.dummyjson.com/data/products/12/4.jpg",
"https://i.dummyjson.com/data/products/12/thumbnail.jpg"
]
},
    {
"id": 2,
"title": "iPhone X",
"description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
"price": 899,
"discountPercentage": 17.94,
"rating": 4.44,
"stock": 34,
"brand": "Apple",
"category": "smartphones",
"thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
"images": [
"https://i.dummyjson.com/data/products/2/1.jpg",
"https://i.dummyjson.com/data/products/2/2.jpg",
"https://i.dummyjson.com/data/products/2/3.jpg",
"https://i.dummyjson.com/data/products/2/thumbnail.jpg"
]
},
{
"id": 28,
"title": "3D Embellishment Art Lamp",
"description": "3D led lamp sticker Wall sticker 3d wall art light on/off button cell operated (included)",
"price": 20,
"discountPercentage": 16.49,
"rating": 4.82,
"stock": 54,
"brand": "LED Lights",
"category": "home-decoration",
"thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
"images": [
"https://i.dummyjson.com/data/products/28/1.jpg",
"https://i.dummyjson.com/data/products/28/2.jpg",
"https://i.dummyjson.com/data/products/28/3.png",
"https://i.dummyjson.com/data/products/28/4.jpg",
"https://i.dummyjson.com/data/products/28/thumbnail.jpg"
]
},

    // 30 items
  ],
      //searchvalue:this.searchvalue
      loaded: false,
      loading: false,
    };
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


      // console.log(this.res);

  },
};
</script>

<style>
.set{
  background-color: #5671891f;

}
</style>

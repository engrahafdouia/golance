<template>

<v-parallax
  src=" " covered
  >

<div class="overlay">


</div>

  </v-parallax>

  <section>
    <v-container>
      <h2 class="text-h4 text-center py-12">Products</h2>
      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Search products"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
      <v-row class="pt-6">

        <!-- <v-col
          v-for="product in 5"
          :key="product.id"

        cols="12"
        sm="4"
        > -->
        <v-col
          v-for="product in products"
          :key="product.id"

        cols="12"
        sm="4"
        >
          <ProductCard v-bind="product" />
        </v-col>
      </v-row>
    </v-container>
  </section>
  </template>


  <script >
import ProductCard from '@/components/ProductCard.vue';

export default{
  components: { ProductCard },

    data() {
        return{
          loaded: false,
      loading: false,
        products:[]
        }
    },
    created() {
    this.loadProducts();
  },
    methods:{
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
      loadProducts() {
     fetch('https://dummyjson.com/products')
      .then(res => res.json())

      .then(products =>  this.products =products.data)
    }
    }
}

  </script>

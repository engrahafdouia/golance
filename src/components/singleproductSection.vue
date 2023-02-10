<template>

  <section>
    <h2 class="text-h4 text-center font-weight-bold ">Product Info</h2>

      <v-container>
           <v-row>
               <v-col>

                   <single-productcard  v-bind="SingleProduct" >
                       <v-btn  variant="text" to="/single">view </v-btn>
                       <v-card-actions>
                       <v-btn         rounded="pill"
        class="bg-purpleme text-right" @click="AddToCart(product)"  >
                           <!-- :disabled="!isLoggedIn" -->
                           <v-icon>mdi-cart</v-icon> Add to cart</v-btn>
                       </v-card-actions>
                   </single-productcard>
               </v-col>
           </v-row>
       </v-container>

</section>

</template>

<script>

import SingleProductcard from './SingleProductcard.vue'
import {useProductStore} from '@/store/Product.js'
import { mapState } from 'pinia'

export default {
  components: { SingleProductcard},
  computed:{
    ...mapState(useProductStore,['SingleProduct' ])
    // ...mapState(useProductStore, ['ProductsStore','currntproductedit'])


  }

  // computed: {
  //       ...mapState(useProductStore, ['ProductsStore','currntproductedit'])
  //   },

}
</script>

<style>

</style>

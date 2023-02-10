<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="800">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate

      ></v-progress-linear>
    </template>

    <v-carousel hide-delimiters>
      <!-- <v-carousel-item :src="thumbnail"></v-carousel-item>
      <v-carousel-item :src="images[0]"></v-carousel-item>
      <v-carousel-item :src="images[1]"></v-carousel-item>
      <v-carousel-item :src="images[2]"></v-carousel-item>
      <v-carousel-item :src="images[3]"></v-carousel-item> -->
            <v-carousel-item src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://i.dummyjson.com/data/products/1/1.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://i.dummyjson.com/data/products/1/2.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://i.dummyjson.com/data/products/1/3.jpg" cover></v-carousel-item>
      <v-carousel-item src="https://i.dummyjson.com/data/products/1/4.jpg" cover></v-carousel-item>
    </v-carousel>

    <v-card-item>
      <v-card-title>Product Name:   iPhone 9</v-card-title>
      <v-card-subtitle>
        <span class="mr-1">category:smartphones</span>

      </v-card-subtitle>
      <v-card-subtitle>
        <span class="mr-1"> brand:apple</span>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :model-value="rating"
          color="amber"
          density="compact"
          half-increments
          readonly
          size="small"
        ></v-rating>

        <div class="text-grey ms-4">4.5 (413)</div>
      </v-row>
      <div class="my-4 text-subtitle-1">
        percentage:11%
      </div>
      <div class="my-4 text-subtitle-1">Price: 549 $$</div>

      <div>Description :An apple mobile which is nothing like apple</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <!-- <v-card-title>Tonight's availability</v-card-title> -->

    <!-- <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div> -->

    <v-card-actions>
      <v-btn
      rounded="pill"
        class="bg-purpleme text-right"
        @click="
          AddToCart({
            id,
            title,
            price,
            description,
            category,
            thumbnail,
            rating,
            brand,
            discountPercentage,
          })
        "
      >
        <!-- :disabled="!isLoggedIn" -->
        <v-icon>mdi-cart</v-icon> Add to cart</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "pinia";
import { useCartStore } from "@/store/Cart.js";
import { useProductStore } from '@/store/Product.js'

// import  CartStore  from '@/store/cart.js';
export default {
  data: () => ({
    show: false,
    loading: false,
    selection: 1,
  }),
  methods: {
    ...mapActions(useCartStore, ["AddToCart"]),
    ...mapActions(useProductStore, ['addProducttoStore', 'deletProductStore', 'selectSingleProduct']),

    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
  props: {
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    thumbnail: String,
    rating: Object,
    images: Array,
    brand: String,
    discountPercentage: Number,
  },
};
</script>

<style>
.cardstyle:hover {
  -webkit-box-shadow: 0px 0px 38px -14px rgba(24, 103, 192, 1);
  -moz-box-shadow: 0px 0px 38px -14px rgba(24, 103, 192, 1);
  box-shadow: 0px 0px 38px -14px rgba(24, 103, 192, 1);
}
</style>

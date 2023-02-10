<template>
  <v-card data-aos="zoom-in" class="mx-auto" max-width="344">
    <v-img :src="image" height="200px" cover />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-title>price:{{ price }}$</v-card-title>
    <v-card-text>category:{{ category }}</v-card-text>

    <v-card-actions>
      <!-- <v-btn
        color="primary"

      >
        <v-icon>mdi-cart</v-icon> Add to cart
      </v-btn> -->
      <v-btn rounded="pill" class="bg-purpleme text-right">
        Add to Cart <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn color="primary" to="/product">
        <v-icon>mdi-view</v-icon> show
      </v-btn>
    </v-card-actions>
    <!-- <v-btn
        color="primary"
        @click="addToCart({id, title, price, image, category})"
      >
        <v-icon>mdi-cart</v-icon> Add to cart
      </v-btn> -->
  </v-card>
</template>

<script>
import { mapActions } from "pinia";
import CartStore from "@/store/caret.js";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions(CartStore, ["addToCart"]),
  },
};
</script>

<style></style>

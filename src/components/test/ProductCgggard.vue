<template>
  <v-card data-aos="zoom-in" :loading="loading" class="mx-auto" max-width="344">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img :src="image" height="200px" cover />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ category }}</v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        :disabled="!isLoggedIn"
        @click="addToCart({ id, title, price, image, category })"
      >
        <v-icon>mdi-cart</v-icon> Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "pinia";
import CartStore from "@/store/caret.js";
import user from "@/store/user";

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

  computed: {
    ...mapState(user, ["isLoggedIn"]),
  },

  methods: {
    ...mapActions(CartStore, ["addToCart"]),
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style></style>

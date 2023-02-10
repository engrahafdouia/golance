<template>
  <v-card data-aos="zoom-in" class="mx-auto" max-width="344">
    <v-img
      src="../assets/dell-SGY0LIfTKZ4-unsplash.jpg"
      height="200px"
      cover
    ></v-img>
    <!-- <v-img
               :src="image"
               height="200px"
               cover
             /> -->
    <!-- <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
   {{description}}
    </v-card-subtitle>
 -->

    <!-- <v-card-title>
  {{ title }}
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle> -->

    <v-card max-width="300px">
      <v-img :src="image" height="200px" cover />
      <v-card-title>{{ title }}</v-card-title>

      <v-card-subtitle>price:{{ price }}$</v-card-subtitle>
      <v-card-subtitle class="font-weight-bold">
        category: {{ category }}
      </v-card-subtitle>
      {{ description }}

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
      <!-- <v-card-actions>
      <v-btn
        color="primary"

      >
        <v-icon>mdi-cart</v-icon> Add to cart
      </v-btn>
      <v-btn
        color="primary" to="/product"

      >
        <v-icon>mdi-view</v-icon> show
      </v-btn>
    </v-card-actions> -->
    </v-card>
    <!-- <v-card >{{ title }}</v-card> -->
    <!-- <v-card-text class="h2-text thin-text">{{title }}</v-card-text>
     <v-card-text> {{description }}</v-card-text>
 -->

    <v-card-actions>
      <!-- <v-btn
      rounded="pill"
      class="bg-purpleme text-center"
    >
      Add to cart <v-icon>mdi-cart</v-icon>
    </v-btn> -->
      <div class="d-flex justify-space-around">
        <!-- <v-btn
            rounded="pill"
          class="bg-purpleme text-right"
        >
          Add to Cart <v-icon>mdi-cart</v-icon>
        </v-btn> -->
        <!-- <v-btn  rounded="pill"
      @click="snackbar = true"
      class="bg-purpleme text-right"
    > -->
        <!-- <v-btn  rounded="pill"


      class="bg-purpleme text-right"
    >
    Add to Cart <v-icon>mdi-cart</v-icon>
    </v-btn> -->
        <!-- <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
     color="indigo"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> -->

        <!-- <v-snackbar
      v-model="snackbar"
      vertical
    >
      <div class="text-subtitle-1 pb-2">Completed</div>

      <p>Product is added to cart Shopping</p>

      <template v-slot:actions>
        <v-btn
          color="indigo"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> -->

        <v-btn rounded="pill"> Show<v-icon>mdi-eye</v-icon> </v-btn>
      </div>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import CartStore from "@/store/caret.js";
import { mapStores } from "pinia";

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
  },
  data: () => ({
    snackbar: false,
    text: `Product,is added to cart Shopping`,
  }),
  methods: {
    ...mapStores(CartStore),
  },
};
</script>

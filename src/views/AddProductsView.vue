<template>
    <section class="ma-16">
      <h3 class="text-h4  font-weight-bold ">Add new Product</h3>

        <v-form  class="w-75 ma-8">
            <v-text-field clearable  variant="underlined" color="indigo" v-model="newproduct.id" required label="id"></v-text-field>
            <v-text-field clearable  variant="underlined" color="indigo" v-model="newproduct.title" required label="title"></v-text-field>
            <v-text-field clearable  variant="underlined" color="indigo" v-model="newproduct.description" required label="description"></v-text-field>
            <v-text-field clearable  variant="underlined" color="indigo" v-model="newproduct.price" required label="price"></v-text-field>
            <v-text-field clearable  variant="underlined" color="indigo" v-model="newproduct.discountPercentage" required label="discountPercentage"></v-text-field>
            <v-text-field clearable  variant="underlined" color="indigo" v-model="newproduct.rating" required label="rating"></v-text-field>
            <v-text-field clearable  variant="underlined" color="indigo" v-model="newproduct.stock" required label="stock"></v-text-field>
            <v-text-field clearable  variant="underlined" color="indigo" v-model="newproduct.brand" required label="brand"></v-text-field>
            <!-- <v-text-field v-model="newproduct.category" required label="category"></v-text-field> -->
            <v-select color="indigo" label="category" v-model="newproduct.category"
                :items="['smartphones', 'laptops', 'fragrances', 'skincare', 'home-decoration', 'groceries']"></v-select>
            <v-text-field color="indigo" v-model="newproduct.thumbnail" required label="thumbnail"></v-text-field>
            <v-btn @click.prevent="AddProduct(newproduct)" color="indigo" to="/productlist">Add Product
                <!-- <v-overlay activator="parent" location-strategy="connected" scroll-strategy="block" >
                    <v-card class="pa-2">

                    </v-card>
                </v-overlay> -->
            </v-btn>
        </v-form>
    </section>
</template>

<script>

import { mapActions, mapState } from 'pinia'
import { useProductStore } from '@/store/Product'
// const store =useProductStore()
export default {
    data() {
        return {
            newproduct:
            {
                id: null,
                title: '',
                description: '',
                price: null,
                discountPercentage: null,
                rating: null,
                stock: null,
                brand: null,
                category: '',
                thumbnail: '',
            }
        }
    },
    computed: {
        ...mapState(useProductStore, ['ProductsStore'])
    },
    methods: {
        ...mapActions(useProductStore, ['AddProduct'])
    },
}
</script>


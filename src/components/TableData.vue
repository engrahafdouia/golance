<template>
  <h3 class="text-h4  font-weight-bold py-6 px-4 ">Products List </h3>

  <v-breadcrumbs :items="['ProductsList','All Products' ]"></v-breadcrumbs>

  <v-layout>
            <v-flex py-1 no-wrap>
                <v-btn color="" class=" ml-3 bg-blue-lighten-5" to="/addProduct">Add Product <v-icon>mdi-email-edit-outline</v-icon></v-btn>
            </v-flex>
        </v-layout>
<v-container>
  <v-table v-model:items-per-page="itemsPerPage"
  class=""  >
        <thead>
    <tr class="bg-purpleme">
      <th class="text-center py-2">
        Id
      </th>
      <th class="text-left py-2">
        Title
      </th>
      <th class="text-left py-2">
        Price
      </th>

      <th class="text-left py-2">
        Category
      </th>
      <th class="text-left py-2">
     Actions
      </th>

    </tr>
  </thead>
  <tbody>
    <tr
      class=""
      v-for="(product ,i) in this.ProductsStore"
      :key="product.id"
    >
    <td>{{ product.id }}</td>
    <td>{{ product.title }}</td>
    <td>{{ product.price }}</td>

    <td>{{ product.category }}</td>
    <td >
      <router-link to="/EditProduct">
      <v-icon class="ma-2"  @click="returnindexProductEdit(i)" >mdi-pencil</v-icon>
      </router-link>
    <v-icon class="ma-2" @click="RemoveProduct(i)">mdi-delete</v-icon></td>
      <v-divider></v-divider>
    </tr>
  </tbody>
    </v-table>
    <v-data-table
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="ProductsStore"
      :sort-by="[{ key: 'id', order: 'asc' }]"
      class="elevation-1"
    >
      <!-- <template #[`item.image`]="{ item }">
        <v-img :src="item.raw.images[0]"></v-img>
      </template> -->

      <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template> -->
    </v-data-table>
</v-container>



</template>

<script>

import { mapActions, mapState } from 'pinia'
import { useProductStore } from '@/store/Product'
export default {
data () {
  return {
    page: 1,
    itemsPerPage: 5,
      headers: [
        {
          title: "Id",
          key: "id",
        },
        {
          title: "Title",
          key: "title",
        },
        {
          title: "Price ",
          key: "price",
        },
        {
          title: "Rating",
          key: "rating",
        },
        {
          title: "Brand",
          key: "brand",
        },
        {
          title: "Category",
          key: "category",
        },
        // {
        //   title: "Image",
        //   key: "image",
        // },
        { title: "Actions", key: "actions", sortable: false },
      ],
  }
},
computed:{
  ...mapState(useProductStore,['ProductsStore'])
},
methods: {
  ...mapActions(useProductStore,['RemoveProduct','returnindexProductEdit'])
},
}
</script>

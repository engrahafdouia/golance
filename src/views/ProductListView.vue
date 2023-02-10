<template>
 <h3 class="text-h4  font-weight-bold py-6 px-4 ">Products List </h3>

<v-breadcrumbs :items="['ProductsList','All Products' ]"></v-breadcrumbs>
<v-layout>
            <v-flex py-1 no-wrap>
                <v-btn color="" class=" ml-3 bg-blue-lighten-5" to="/addProduct">Add Product <v-icon>mdi-email-edit-outline</v-icon></v-btn>
            </v-flex>
        </v-layout>

    <data-table></data-table>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useProductStore } from '@/store/Product'
import DataTable from '@/components/DataTable.vue'
export default {
  components: { DataTable },
  computed:{
  ...mapState(useProductStore,['ProductsStore'])
},
methods: {
  ...mapActions(useProductStore,['RemoveProduct','returnindexProductEdit'])
},
}
</script>

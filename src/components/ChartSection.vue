<template>
  <section class="  bg-blue-lighten-5">
     <v-container>
     <v-row>
     <v-col cols="12" md="4"> <v-card
    class="mx-auto"
    max-width="368"
  >
    <v-card-item title="Products">

    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col
          class="text-h2"
          cols="6"
        >
        <!-- Users count: 150 user -->
        </v-col>

        <v-col cols="6" class="text-right">

        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"

      >

        <v-list-item-subtitle>    Products count : {{ ProductsStore.length}} Product</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
        prepend-icon="mdi-account"
      >
      </v-list-item>
    </div>


    <v-divider></v-divider>


  </v-card></v-col>
  <v-col cols="12" md="4"> <v-card
    class="mx-auto"
    max-width="368"
  >
    <v-card-item title="Users">

    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col
          class="text-h2"
          cols="6"
        >
        <!-- Users count: 150 user -->
        </v-col>

        <v-col cols="6" class="text-right">

        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"

      >

        <v-list-item-subtitle>     Users count: 150 user </v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
        prepend-icon="mdi-account"
      >
      </v-list-item>
    </div>


    <v-divider></v-divider>


  </v-card></v-col>
     </v-row>

         <!-- <h1 class="text-h4 text-center mb-2">Also, you can visit us through the location </h1> -->
         <!-- <p class="text-h5 text-center">Users count: 150 user </p> -->
         <!-- <p class="text-h5 text-center">Products count : {{ ProductsStore.length}} Product</p> -->



<v-row>

 <v-col cols="12" md="6">
  <line-chart></line-chart>


 </v-col>
 <v-col cols="12" md="6">
     <donut-chart></donut-chart>
 </v-col>
 <v-col>
  <barChart></barChart>
 </v-col>

</v-row>
     </v-container>
</section>
</template>

<script>
import barChart from '../components/ChartComponnent/barChart.vue'
import DonutChart from '../components/ChartComponnent/DonutChart.vue'
import LineChart from '../components/ChartComponnent/LineChart.vue'
// import useUserStore from '@/store/User'
import { mapState } from 'pinia'
import { useProductStore } from '@/store/Product'
export default {
components: { barChart, DonutChart, LineChart },
computed:{
 ...mapState(useProductStore,['ProductsStore'])

}
}
</script>

<style>

</style>

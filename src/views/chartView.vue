<template>
<!-- <ChartSection/> -->
<section     class="bg-indigo-lighten-3"
>
  <h3 class="text-h4  font-weight-bold py-6 px-4 ">Dashboard </h3>
  <v-breadcrumbs :items="['DashBoard', 'Chartpage', ]"></v-breadcrumbs>
  <v-container>
    <v-row>
         <v-col cols="12" md="4"> <v-card v-wave
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
      <v-col cols="12" md="4"> <v-card v-wave
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
    <v-row>
      <v-col cols="12" md="4"><RadialBar /></v-col>
      <BarChart/>

      <!-- <DonutChart/> -->
    </v-row>
    <BubbleChart/>
    <v-row>
      <!-- <v-col ><LineChart/></v-col> -->

    </v-row>

  </v-container>
</section>
</template>

<script>
import RadialBar from '@/components/ChartComponnent/RadialBar.vue';
import BarChart from '@/components/ChartComponnent/barChart.vue';
// import DonutChart from '@/components/ChartComponnent/DonutChart.vue';
// import LineChart from '@/components/ChartComponnent/LineChart.vue';
import { mapState } from 'pinia'
import { useProductStore } from '@/store/Product'
import BubbleChart from '@/components/ChartComponnent/BubbleChart.vue';
export default {
components: { BarChart, BubbleChart ,RadialBar },
computed:{
    ...mapState(useProductStore,['ProductsStore'])

  }
}
</script>

<style>

</style>

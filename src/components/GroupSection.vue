<template>
  <section class="section-header mt-5">
    <h2 class="text-h4 text-center pt-5 font-weight-bold "> Our Features</h2>

    <v-container class="mt-5 text-center">
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <template v-for="(item, i) in items" :key="i">
          <v-col
            cols="12"
            md="4"
          >
          <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto"
        color="grey-lighten-4"
        max-width="300"
        v-bind="props"
      >
        <v-img
          :aspect-ratio="16/9"
          cover
          :src=item.img
        >
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-yellow-darken-2 v-card--reveal text-h5"
              style="height: 100%;"
            >
          {{item.text}}
            </div>
          </v-expand-transition>
        </v-img>

        <v-card-text class="pt-6">
          <div class="font-weight-light text-grey text-h6 mb-2">
            {{item.title}}

          </div>

          <h3 class="text-h4 font-weight-light text-orange mb-2">
            QW cooking utensils
          </h3>

          <h4 class="font-weight-light text-h6 mb-2">
         {{item.subtext}}.<br>

          </h4>
        </v-card-text>
      </v-card>
    </v-hover>


          </v-col>
        </template>
      </v-row>

    </v-container>

  </section>


  </template>

  <script>
    export default {
      data: () => ({
        // icons: ['mdi-home', 'mdi-play', 'mdi-draw'],
        items: [
          {
            icon:'mdi-home',
            title: 'Web design',
            text: `It's New Release Friday`,
            subtext: 'Newly released songs. Updated daily.',
            img: '../../public/img/pct.png',
          },
          {
            icon:'mdi-draw',
            title: 'Web Developement',
            text: 'Greatest Rock Hits',
            subtext: 'Lose yourself in rock tunes.',
            img: '../assets/dell-SGY0LIfTKZ4-unsplash.jpg',
          },
          {
            icon:'mdi-database',
            title: 'Problem solving',
            text: 'Ambient Bass',
            subtext: 'Chill beats to mellow you out.',
            // img: '../../public/img/pexels-andrea-piacquadio-974911.jpg',
          },
        ],
        // transparent: 'rgba(255, 255, 255, 0)',
      }),
    }
  </script>
  <style>
  .section-header{
    position: relative;
  }
   .section-header h2:after {
      content: "";
      position: absolute;
      display: block;
      width: 100px;
      height: 4px;
      background:#2333B0;
      left: 0;
      right: 0;
      bottom: 0;
  top: 0px;
      margin: auto;
      margin-top: 60px;
  }
  h2::first-letter{
    color: #2333B0;;
  }


  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }

  </style>

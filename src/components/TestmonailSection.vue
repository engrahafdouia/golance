<template>
<section class="pt-6 bg-gryme">

     <v-container>
       <h2 class="text-h4 text-center font-weight-bold mb-8">Testmonails</h2>
     <v-carousel
       cycle
       height="400"
       hide-delimiter-background
       show-arrows="hover"
     >
       <v-carousel-item
         v-for="(slide, i) in slides"
         :key="i"
       >
         <v-sheet class="bg-greyme"
           height="100%"
         >
           <div class="d-flex fill-height justify-center align-center">
             <!-- <div class="text-h2">
               {{ slide }} Slide
             </div> -->
             <v-row>
              <v-col  v-for="test in testmoinals"
          :key="test.id" cols="4" >
                 <v-card
                      class="mx-auto bg-greyme"
                      theme="dark"
                      max-width="600"
                    >
                      <template v-slot:prepend>
                        <v-icon size="x-large"></v-icon>
                      </template>
                      <v-card-text class="text-h5 py-2">
{{ test.quote }}
                      </v-card-text>
                      <v-card-actions>
                        <v-list-item class="w-100">
                          <template v-slot:prepend>
                            <v-avatar
                 color="grey-darken-3"
                 image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-avatar>
                          </template>
                          <v-list-item-title>{{ test.author }}</v-list-item-title>
                          <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>
                          <template v-slot:append>
                            <div class="justify-self-end">
                 <!-- <v-icon class="me-1" icon="mdi-heart"></v-icon>
                 <span class="subheading me-2">256</span>
                 <span class="me-1">·</span> -->
                 <!-- <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                 <span class="subheading">45</span> -->
                 <div class="text-center">
                     <v-rating
                       v-model="rating"
                       hover
                     ></v-rating>
                   </div>
                            </div>
                          </template>
                        </v-list-item>
                      </v-card-actions>
                    </v-card>
               </v-col>
             </v-row>
           </div>
         </v-sheet>
       </v-carousel-item>
     </v-carousel>
   </v-container>
</section>
</template>

<script>
  export default {
    data () {
      return {
        // colors: [
        //   'indigo',
        //   'warning',
        //   'pink darken-2',
        //   'red lighten-1',
        //   'deep-purple accent-4',
        // ],
        testmoinals: [],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],


      rating: 3,


      }
    },
    created() {
     this.loadTestMonial();
  },
  methods: {
    loadTestMonial() {
      fetch("https://dummyjson.com/quotes")
        .then(res => res.json())

        .then(testmoinals =>  this.testmoinals =testmoinals.data)
    },

    }


  }


</script>


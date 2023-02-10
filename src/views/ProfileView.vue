<template >

<v-card data-aos="fade-right"
    :loading="loading"
    class="mx-auto my-12 bg-indigo-lighten-3"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      cover
      height="250"
      :src="userInfo.image"
    ></v-img>

    <v-card-item>
      <v-card-title>      {{ userInfo.firstName + userInfo.lastName }}</v-card-title>

      <v-card-subtitle>
        <span class="my-4 text-subtitle-1">Email : {{ userInfo.email }}</span>


      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >


        <div class="my-4 text-subtitle-1">
          address : {{ userInfo.address.address }}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Phone : {{ userInfo.phone }}
      </div>

      <div class ="my-4 text-subtitle-1">Gender : {{ userInfo.gender }}</div>
      <div class ="my-4 text-subtitle-1">city: {{ userInfo.address.city }}</div>

    </v-card-text>

    <!-- <v-divider class="mx-4 mb-1"></v-divider> -->


    <!-- <div class="px-4">
      <v-chip-group v-model="selection">
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </div> -->

    <!-- <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>
<!--  <template>{{ userInfo }} -->
<!-- <img v-if="image" :key="image.id" @click="switchImage" class="image" :src="image.src" alt="image.alt">  </template>-->

<script>
import { mapState } from "pinia";
import user from "@/store/user";

export default {
  data: () => ({
    userInfo: {},
    loading: false,
      selection: 1,
  }),
  computed: {
    ...mapState(user, ["user"]),
  },

  created() {
    this.axios
      .get("https://dummyjson.com/users/" + this.user.id)
      .then((response) => {
        this.userInfo = response.data;
      });
  },
  methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
};
</script>

<style></style>

<template>
  <section class="ma-16 d-none">
    <v-table class="bg-success" v-model:items-per-page="itemsPerPage">
      <thead>
        <tr class="bg-sucsess">
          <th class="text-center py-2">Id</th>
          <th class="text-left py-2">Title</th>
          <th class="text-left py-2">Price</th>
          <th class="text-left py-2">Percentage</th>
          <th class="text-left py-2">Rating</th>
          <th class="text-left py-2">Stock</th>
          <th class="text-left py-2">Brand</th>
          <th class="text-left py-2">Category</th>
          <th class="text-left py-2">EDIT</th>
          <th class="text-left py-2">DELETE</th>
        </tr>
      </thead>

      <tbody>
        <tr class="bg-info" v-for="(product, i) in this.ProductsStore" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>


          <td>{{ product.category }}</td>
          <td>
            <router-link to="/EditProduct">
              <v-icon class="ma-2" @click="returnindexProductEdit(i)"
                >mdi-circle-edit-outline</v-icon
              >
            </router-link>
          </td>
          <td><v-icon class="ma-2" @click="RemoveProduct(i)">mdi-delete</v-icon></td>
          <v-divider></v-divider>
        </tr>
      </tbody>
    </v-table>
  </section>

  <section class="ma-16">
    <v-data-table  :search="searchvalue"
      :items-per-page="itemsPerPage"
      :headers="headers"
      :items="ProductsStore"
      :sort-by="[{ key: 'id', order: 'asc' }]"
      class="elevation-1"
    >
      <!-- <template #[`item.image`]="{ item }">
        <v-img :src="item.raw.images[0]"></v-img>
      </template> -->
      <template v-slot:top>
        <v-toolbar flat class="bg-purpleme">
          <v-toolbar-title >Products List</v-toolbar-title>

      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        v-model.trim="searchvalue"
        label="Search products"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
          <v-divider class="mx-4" inset vertical></v-divider>

          <v-spacer></v-spacer>
    <v-dialog v-model="dialog" max-width="500px">
            <!-- <template v-slot:activator="{ props }">
              <v-btn color="primary" dark class="mb-2" v-bind="props"> New Item </v-btn>
            </template> -->
            <v-card  class="bg-indigo-lighten-5">
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.id"  clearable  variant="underlined" color="indigo" label="Id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.title"
                        label="Title" clearable  variant="underlined" color="indigo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.rating"
                        label="Rating" clearable  variant="underlined" color="indigo"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.price"
                        label="Price" clearable  variant="underlined" color="indigo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.brand"
                        label="Brand" clearable  variant="underlined" color="indigo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.category" clearable  variant="underlined" color="indigo"
                        label="Category"
                      ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.image"
                        label="Image"
                      ></v-text-field>
                    </v-col> -->
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this Products?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon size="small" class="me-2" @click="editItem(item.raw)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(item.raw)"> mdi-delete </v-icon>
      </template>
      <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template> -->
    </v-data-table>
  </section>
</template>

<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductStore } from "@/store/Product";
export default {



  data() {
    return {
      Products: this.ProductsStore,
      //searchvalue:this.searchvalue
      loaded: false,
      loading: false,
      dialog: false,
      dialogDelete: false,
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

      editedIndex: -1,
      editedItem: {
        id: 0,
        title: "",
        price: 0,
        rating: 0,
        brand: 0,
        category: "",
        //  image: "",
      },
      defaultItem: {
        id: 0,
        title: "",
        price: 0,
        rating: 0,
        brand: 0,
        category: "",
        // image: "",
      },
    };
  },
  computed: {
    ...mapWritableState(useProductStore, [
      "searchvalue",
      "productFilterValue",
      "ProductsStore",
      "filteredProducts",
      "productFilterAll",
      "productFilterlaptops",
      "productFilterfragrances",
    ]),
    ...mapState(useProductStore, ["ProductsStore"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  // created () {
  //     this.initialize()
  //   },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    ...mapActions(useProductStore, ["RemoveProduct", "returnindexProductEdit"]),
    editItem(item) {
      this.editedIndex = this.ProductsStore.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.ProductsStore.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.ProductsStore.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.ProductsStore[this.editedIndex], this.editedItem);
      } else {
        this.ProductsStore.push(this.editedItem);
        console.log(this.ProductsStore);
      }
      this.close();
    },
  },
};
</script>

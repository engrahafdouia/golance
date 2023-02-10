<template>
  <div class="text-center bg-blue">
 cart shopping
 <v-container>
   <!-- <v-table
      fixed-header
      height="300px"
    >
      <thead>
        <tr>
          <th class="text-center">   image
          </th>
          <th class="text-center">
            Product
          </th>
          <th class="text-center">
                      Price
          </th>
          <th class="text-center">            Quantity
          </th>
          <th class="text-center">            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >

          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.Price }}</td>
          <td>{{ item.Quantity }}</td>

          <td>{{ item.Total }}</td>
        </tr>
      </tbody>
    </v-table> -->
 </v-container>
 <!-- <table class="table-shopping-cart">
								<tr class="table_head">
									<th class="column-1">Product</th>
									<th class="column-2"></th>
									<th class="column-3">Price</th>
									<th class="column-4">Quantity</th>
									<th class="column-5">Total</th>
								</tr>

								<tr class="table_row">
									<td class="column-1">
										<div class="how-itemcart1">
											<img src="images/item-cart-04.jpg" alt="IMG">
										</div>
									</td>
									<td class="column-2">Fresh Strawberries</td>
									<td class="column-3">$ 36.00</td>
									<td class="column-4">
										<div class="wrap-num-product flex-w m-l-auto m-r-0">
											<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-minus"></i>
											</div>

											<input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value="1">

											<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>
									</td>
									<td class="column-5">$ 36.00</td>
								</tr>

								<tr class="table_row">
									<td class="column-1">
										<div class="how-itemcart1">
											<img src="images/item-cart-05.jpg" alt="IMG">
										</div>
									</td>
									<td class="column-2">Lightweight Jacket</td>
									<td class="column-3">$ 16.00</td>
									<td class="column-4">
										<div class="wrap-num-product flex-w m-l-auto m-r-0">
											<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-minus"></i>
											</div>

											<input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product2" value="1">

											<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i class="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>
									</td>
									<td class="column-5">$ 16.00</td>
								</tr>
							</table> -->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            Price: 159,
            Quantity:'sss',
            Total:'12345'
          },
          {
            name: 'Ice cream sandwich',
            Price: 237,
            Quantity:'sss',
            Total:'12345'
          },
          {
            name: 'Eclair',
            Price: 262,
            Quantity:'sss',
            Total:'12345'
          },
          {
            name: 'Cupcake',
            Price: 305,
            Quantity:'sss',
            Total:'12345'
          },
          {
            name: 'Gingerbread',
            Price: 305,
            Quantity:'sss',
            Total:'12345'
          },
          {
            name: 'Jelly bean',
            Price: 305,
            Quantity:'sss',
            Total:'12345'
          },
          {
            name: 'Lollipop',
            Price: 305,
            Quantity:'sss',
            Total:'12345'
          },
          {
            name: 'Honeycomb',
            Price: 305,
            Quantity:'sss',
            Total:'12345'
          },
          {
            name: 'Donut',
            Price: 305,
            Quantity:'sss',
            Total:'12345'
          },
          {
            name: 'KitKat',
            Price: 305,
            Quantity:'sss',
            Total:'12345'
          },
        ],
      }
    },
  }
</script>

import{al as e}from"./index.e9727822.js";const r=e("cart",{persist:!0,state:()=>({items:[]}),getters:{itemscount(t){return t.items.length}},actions:{AddToCart(t){this.items.push(t),console.log(t)},removecardfromcart(t){this.items.splice(t,1)}}});export{r as u};

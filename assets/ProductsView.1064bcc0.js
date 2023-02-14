import{_,o as u,q as V,w as t,l as e,a$ as T,a1 as A,y as r,v as f,s as m,A as c,B as p,V as x,bb as h,bc as B,$ as I,n as N,a0 as P,z as L,a3 as z,E as D,a4 as E,x as d,bd as n,a7 as k,aS as M,aX as R,aY as j}from"./index.e9727822.js";import{c as q}from"./caret.ceb194f8.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import{b as U,e as W,d as X,a as Y,c as b,V as G}from"./VCard.24dfe14e.js";import{V as $}from"./VRow.a811f1b1.js";import{u as H}from"./Cart.b92907bb.js";import{u as g}from"./Product.b8f291e3.js";import{V as S,a as J}from"./VCol.c97aa76c.js";const K={data:()=>({show:!1,loading:!1,selection:1}),methods:{..._(q,["addToCart"]),reserve(){this.loading=!0,setTimeout(()=>this.loading=!1,2e3)}},props:{id:Number,title:String,price:Number,description:String,category:String,thumbnail:String}},O={class:"mr-1"},Q={class:"mt-4 text-subtitle-1"};function Z(l,a,s,F,C,v){return u(),V(G,{loading:l.loading,"data-aos":"zoom-in",class:"mx-auto","max-width":"344"},{loader:t(({isActive:i})=>[e(T,{active:i,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:t(()=>[e(A,{height:"250",width:"100%",src:s.thumbnail,class:"w-100",cover:""},null,8,["src"]),e(X,null,{default:t(()=>[e(U,null,{default:t(()=>[r("Name: "+f(s.title),1)]),_:1}),e(W,null,{default:t(()=>[m("span",O,"Category: "+f(s.category),1)]),_:1})]),_:1}),e(Y,{class:"mb-0 pb-0"},{default:t(()=>[e($,{align:"center",class:"mx-0"}),m("div",Q,"Price: "+f(s.price)+" $",1)]),_:1}),e(b,null,{default:t(()=>[e(c,{rounded:"pill",class:"bg-purpleme text-right",onClick:a[0]||(a[0]=i=>l.addToCart({id:s.id,title:s.title,price:s.price,image:l.image,category:s.category}))},{default:t(()=>[e(p,null,{default:t(()=>[r("mdi-cart")]),_:1}),r(" Add to cart ")]),_:1}),e(c,{to:"/single",onClick:a[1]||(a[1]=i=>l.selectSingleProduct(l.product)),rounded:"pill",class:"text-right"},{default:t(()=>[r(" Show "),e(p,null,{default:t(()=>[r("mdi-eye")]),_:1})]),_:1})]),_:1}),e(x)]),_:1},8,["loading"])}const ee=y(K,[["render",Z]]);const te={components:{ProductCard:ee},created(){this.loadProducts(),this.productFilterValue("all")},data(){return{Products:this.ProductsStore,loaded:!1,loading:!1}},computed:{...h(I),...h(g),...B(g,["searchvalue","productFilterValue","ProductsStore","filteredProducts","productFilterAll","productFilterlaptops","productFilterfragrances"])},methods:{onClick(){this.loading=!0,setTimeout(()=>{this.loading=!1,this.loaded=!0},2e3)},..._(H,["AddToCart"]),..._(g,["addProducttoStore","deletProductStore","selectSingleProduct"]),loadProducts(){this.axios("https://dummyjson.com/products").then(l=>{this.addProducttoStore(l.data.products),console.log(l.data.products)})}}},le=m("h2",{class:"text-h4 text-center py-12"},"Products",-1);function ae(l,a,s,F,C,v){const i=N("product-card");return u(),P(k,null,[m("section",null,[e(S,null,{default:t(()=>[le,e(L,{loading:C.loading,density:"compact",variant:"solo",modelValue:l.searchvalue,"onUpdate:modelValue":a[0]||(a[0]=o=>l.searchvalue=o),modelModifiers:{trim:!0},label:"Search products","append-inner-icon":"mdi-magnify","single-line":"","hide-details":"","onClick:appendInner":v.onClick},null,8,["loading","modelValue","onClick:appendInner"]),e(z,{transition:"slide-y-reverse-transition"},{activator:t(({props:o})=>[e(c,D({color:"purpleme",class:"ma-2"},o),{default:t(()=>[r(" Filter By Category ")]),_:2},1040)]),default:t(()=>[e(E,null,{default:t(()=>[e(d,{onClick:a[1]||(a[1]=o=>l.productFilterValue("all"))},{default:t(()=>[e(n,null,{default:t(()=>[r("All")]),_:1})]),_:1}),e(d,{onClick:a[2]||(a[2]=o=>l.productFilterValue("smartphones"))},{default:t(()=>[e(n,null,{default:t(()=>[r("smartphones")]),_:1})]),_:1}),e(d,{onClick:a[3]||(a[3]=o=>l.productFilterValue("laptops"))},{default:t(()=>[e(n,null,{default:t(()=>[r("laptops")]),_:1})]),_:1}),e(d,{onClick:a[4]||(a[4]=o=>l.productFilterValue("fragrances"))},{default:t(()=>[e(n,null,{default:t(()=>[r("fragrances")]),_:1})]),_:1}),e(d,{onClick:a[5]||(a[5]=o=>l.productFilterValue("skincare"))},{default:t(()=>[e(n,null,{default:t(()=>[r("skincare")]),_:1})]),_:1}),e(d,{onClick:a[6]||(a[6]=o=>l.productFilterValue("groceries"))},{default:t(()=>[e(n,null,{default:t(()=>[r("groceries")]),_:1})]),_:1}),e(d,{onClick:a[7]||(a[7]=o=>l.productFilterValue("home-decoration"))},{default:t(()=>[e(n,null,{default:t(()=>[r("home-decoration")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),m("section",null,[e(S,null,{default:t(()=>[e($,null,{default:t(()=>[(u(!0),P(k,null,M(l.filteredProducts,o=>(u(),V(J,{cols:"12",sm:"6",md:"6",lg:"4",xl:"3",key:o.id},{default:t(()=>[e(i,R(j(o)),{default:t(()=>[e(c,{onClick:w=>l.selectSingleProduct(o),class:"cartcolor",color:"primary",variant:"text",to:"/single"},{default:t(()=>[e(p,null,{default:t(()=>[r("mdi-view")]),_:1}),r(" show ")]),_:2},1032,["onClick"]),e(b,null,{default:t(()=>[e(c,{rounded:"pill",class:"bg-purpleme text-right",onClick:w=>l.AddToCart(o)},{default:t(()=>[r(" Add to Cart "),e(p,null,{default:t(()=>[r("mdi-cart")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1040)]),_:2},1024))),128))]),_:1})]),_:1})])],64)}const re=y(te,[["render",ae]]),pe={__name:"ProductsView",setup(l){return(a,s)=>(u(),V(re))}};export{pe as default};
